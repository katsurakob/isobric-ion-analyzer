import { ISOTOPES, type Isotope } from '../data/isotopes';

export interface IsobarResult {
    type: 'Atomic' | 'Polyatomic';
    formula: string;
    exactMass: number;
    deltaM: number;
    requiredResolution: number;
    abundance: number;
    composition: Isotope[];
}

// Common interference elements in ICP-MS
const POLYATOMIC_SOURCES = ['O', 'Ar', 'N', 'C', 'H', 'Cl', 'S'];

// Find all nuclides for a given mass number
export const findNuclidesByMass = (mass: number): Isotope[] => {
    return ISOTOPES.filter((iso) => iso.nominalMass === mass);
};

export const findNuclide = (query: string): Isotope | null => {
    // Parse queries like "157Gd" or "157"
    const match = query.match(/^(\d+)([a-zA-Z]*)$/);
    if (!match) return null;

    const mass = parseInt(match[1]);
    const symbol = match[2];

    if (symbol) {
        return ISOTOPES.find(
            (iso) => iso.nominalMass === mass && iso.symbol.toLowerCase() === symbol.toLowerCase()
        ) || null;
    }

    // If no symbol, we return the first one (usually the most abundant handled by UI now)
    return ISOTOPES.find((iso) => iso.nominalMass === mass) || null;
};

export const calculateIsobars = (targetNominalMass: number, targetExactMass: number): IsobarResult[] => {
    const results: IsobarResult[] = [];

    // 1. Atomic Isobars
    const atomicIsobars = ISOTOPES.filter(
        (iso) => iso.nominalMass === targetNominalMass && iso.exactMass !== targetExactMass
    );

    atomicIsobars.forEach((iso) => {
        const deltaM = Math.abs(iso.exactMass - targetExactMass);
        results.push({
            type: 'Atomic',
            formula: `${iso.nominalMass}${iso.symbol}`,
            exactMass: iso.exactMass,
            deltaM,
            requiredResolution: targetExactMass / deltaM,
            abundance: iso.abundance,
            composition: [iso],
        });
    });

    // 2. Polyatomic Interferences (Diatomic only for now: Base + X)
    const baseIsotopes = ISOTOPES.filter((iso) => iso.nominalMass < targetNominalMass);
    const interferenceIsotopes = ISOTOPES.filter((iso) => POLYATOMIC_SOURCES.includes(iso.symbol));

    baseIsotopes.forEach((baseIso) => {
        interferenceIsotopes.forEach((interIso) => {
            if (baseIso.nominalMass + interIso.nominalMass === targetNominalMass) {
                const combinedExactMass = baseIso.exactMass + interIso.exactMass;
                // Don't include if it's identical to target (e.g. self)
                if (Math.abs(combinedExactMass - targetExactMass) < 0.000001) return;

                const deltaM = Math.abs(combinedExactMass - targetExactMass);
                const combinedAbundance = (baseIso.abundance / 100) * (interIso.abundance / 100) * 100;

                results.push({
                    type: 'Polyatomic',
                    formula: `${baseIso.nominalMass}${baseIso.symbol}${interIso.nominalMass}${interIso.symbol}`,
                    exactMass: combinedExactMass,
                    deltaM,
                    requiredResolution: targetExactMass / (deltaM === 0 ? 0.00001 : deltaM), // avoid div by 0
                    abundance: combinedAbundance,
                    composition: [baseIso, interIso],
                });
            }
        });
    });

    // Sort by abundance descending
    return results.sort((a, b) => b.abundance - a.abundance);
};

export interface IsotopeDistribution {
    mass: number;
    abundance: number;
}

export const calculateIsotopicDistribution = (symbols: string[]): IsotopeDistribution[] => {
    if (symbols.length === 1) {
        const symbol = symbols[0];
        const isotopes = ISOTOPES.filter(iso => iso.symbol.toLowerCase() === symbol.toLowerCase());
        return isotopes.map(iso => ({
            mass: iso.nominalMass,
            abundance: iso.abundance
        })).sort((a, b) => a.mass - b.mass);
    } else if (symbols.length === 2) {
        const iso1 = ISOTOPES.filter(iso => iso.symbol.toLowerCase() === symbols[0].toLowerCase());
        const iso2 = ISOTOPES.filter(iso => iso.symbol.toLowerCase() === symbols[1].toLowerCase());
        const distributionMap = new Map<number, number>();

        for (const i1 of iso1) {
            for (const i2 of iso2) {
                const mass = i1.nominalMass + i2.nominalMass;
                const abundance = (i1.abundance / 100) * (i2.abundance / 100) * 100;
                distributionMap.set(mass, (distributionMap.get(mass) || 0) + abundance);
            }
        }

        return Array.from(distributionMap.entries())
            .map(([mass, abundance]) => ({ mass, abundance }))
            .sort((a, b) => a.mass - b.mass);
    }
    return [];
};
