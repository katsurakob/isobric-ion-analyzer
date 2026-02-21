export interface Isotope {
  element: string;
  symbol: string;
  nominalMass: number;
  exactMass: number;
  abundance: number;
}

export const ISOTOPES: Isotope[] = [
  {
    "element": "Hydrogen",
    "symbol": "H",
    "nominalMass": 1,
    "exactMass": 1.00782503223,
    "abundance": 99.9885
  },
  {
    "element": "D",
    "symbol": "D",
    "nominalMass": 2,
    "exactMass": 2.01410177812,
    "abundance": 0.0115
  },
  {
    "element": "Helium",
    "symbol": "He",
    "nominalMass": 3,
    "exactMass": 3.0160293201,
    "abundance": 0.000134
  },
  {
    "element": "Helium",
    "symbol": "He",
    "nominalMass": 4,
    "exactMass": 4.00260325413,
    "abundance": 99.999866
  },
  {
    "element": "Lithium",
    "symbol": "Li",
    "nominalMass": 6,
    "exactMass": 6.0151228874,
    "abundance": 7.59
  },
  {
    "element": "Lithium",
    "symbol": "Li",
    "nominalMass": 7,
    "exactMass": 7.0160034366,
    "abundance": 92.41
  },
  {
    "element": "Beryllium",
    "symbol": "Be",
    "nominalMass": 9,
    "exactMass": 9.012183065,
    "abundance": 100
  },
  {
    "element": "Boron",
    "symbol": "B",
    "nominalMass": 10,
    "exactMass": 10.01293695,
    "abundance": 19.900000000000002
  },
  {
    "element": "Boron",
    "symbol": "B",
    "nominalMass": 11,
    "exactMass": 11.00930536,
    "abundance": 80.10000000000001
  },
  {
    "element": "Carbon",
    "symbol": "C",
    "nominalMass": 12,
    "exactMass": 12,
    "abundance": 98.92999999999999
  },
  {
    "element": "Carbon",
    "symbol": "C",
    "nominalMass": 13,
    "exactMass": 13.00335483507,
    "abundance": 1.0699999999999998
  },
  {
    "element": "Nitrogen",
    "symbol": "N",
    "nominalMass": 14,
    "exactMass": 14.00307400443,
    "abundance": 99.636
  },
  {
    "element": "Nitrogen",
    "symbol": "N",
    "nominalMass": 15,
    "exactMass": 15.00010889888,
    "abundance": 0.364
  },
  {
    "element": "Oxygen",
    "symbol": "O",
    "nominalMass": 16,
    "exactMass": 15.99491461957,
    "abundance": 99.75699999999999
  },
  {
    "element": "Oxygen",
    "symbol": "O",
    "nominalMass": 17,
    "exactMass": 16.9991317565,
    "abundance": 0.038
  },
  {
    "element": "Oxygen",
    "symbol": "O",
    "nominalMass": 18,
    "exactMass": 17.99915961286,
    "abundance": 0.20500000000000002
  },
  {
    "element": "Fluorine",
    "symbol": "F",
    "nominalMass": 19,
    "exactMass": 18.99840316273,
    "abundance": 100
  },
  {
    "element": "Neon",
    "symbol": "Ne",
    "nominalMass": 20,
    "exactMass": 19.9924401762,
    "abundance": 90.48
  },
  {
    "element": "Neon",
    "symbol": "Ne",
    "nominalMass": 21,
    "exactMass": 20.993846685,
    "abundance": 0.27
  },
  {
    "element": "Neon",
    "symbol": "Ne",
    "nominalMass": 22,
    "exactMass": 21.991385114,
    "abundance": 9.25
  },
  {
    "element": "Sodium",
    "symbol": "Na",
    "nominalMass": 23,
    "exactMass": 22.989769282,
    "abundance": 100
  },
  {
    "element": "Magnesium",
    "symbol": "Mg",
    "nominalMass": 24,
    "exactMass": 23.985041697,
    "abundance": 78.99000000000001
  },
  {
    "element": "Magnesium",
    "symbol": "Mg",
    "nominalMass": 25,
    "exactMass": 24.985836976,
    "abundance": 10
  },
  {
    "element": "Magnesium",
    "symbol": "Mg",
    "nominalMass": 26,
    "exactMass": 25.982592968,
    "abundance": 11.01
  },
  {
    "element": "Aluminium",
    "symbol": "Al",
    "nominalMass": 27,
    "exactMass": 26.98153853,
    "abundance": 100
  },
  {
    "element": "Silicon",
    "symbol": "Si",
    "nominalMass": 28,
    "exactMass": 27.97692653465,
    "abundance": 92.223
  },
  {
    "element": "Silicon",
    "symbol": "Si",
    "nominalMass": 29,
    "exactMass": 28.9764946649,
    "abundance": 4.6850000000000005
  },
  {
    "element": "Silicon",
    "symbol": "Si",
    "nominalMass": 30,
    "exactMass": 29.973770136,
    "abundance": 3.092
  },
  {
    "element": "Phosphorus",
    "symbol": "P",
    "nominalMass": 31,
    "exactMass": 30.97376199842,
    "abundance": 100
  },
  {
    "element": "Sulfur",
    "symbol": "S",
    "nominalMass": 32,
    "exactMass": 31.9720711744,
    "abundance": 94.99
  },
  {
    "element": "Sulfur",
    "symbol": "S",
    "nominalMass": 33,
    "exactMass": 32.9714589098,
    "abundance": 0.75
  },
  {
    "element": "Sulfur",
    "symbol": "S",
    "nominalMass": 34,
    "exactMass": 33.967867004,
    "abundance": 4.25
  },
  {
    "element": "Sulfur",
    "symbol": "S",
    "nominalMass": 36,
    "exactMass": 35.96708071,
    "abundance": 0.01
  },
  {
    "element": "Chlorine",
    "symbol": "Cl",
    "nominalMass": 35,
    "exactMass": 34.968852682,
    "abundance": 75.76
  },
  {
    "element": "Chlorine",
    "symbol": "Cl",
    "nominalMass": 37,
    "exactMass": 36.965902602,
    "abundance": 24.240000000000002
  },
  {
    "element": "Argon",
    "symbol": "Ar",
    "nominalMass": 36,
    "exactMass": 35.967545105,
    "abundance": 0.3336
  },
  {
    "element": "Argon",
    "symbol": "Ar",
    "nominalMass": 38,
    "exactMass": 37.96273211,
    "abundance": 0.0629
  },
  {
    "element": "Argon",
    "symbol": "Ar",
    "nominalMass": 40,
    "exactMass": 39.9623831237,
    "abundance": 99.6035
  },
  {
    "element": "Potassium",
    "symbol": "K",
    "nominalMass": 39,
    "exactMass": 38.9637064864,
    "abundance": 93.2581
  },
  {
    "element": "Potassium",
    "symbol": "K",
    "nominalMass": 40,
    "exactMass": 39.963998166,
    "abundance": 0.0117
  },
  {
    "element": "Potassium",
    "symbol": "K",
    "nominalMass": 41,
    "exactMass": 40.9618252579,
    "abundance": 6.7302
  },
  {
    "element": "Calcium",
    "symbol": "Ca",
    "nominalMass": 40,
    "exactMass": 39.962590863,
    "abundance": 96.941
  },
  {
    "element": "Calcium",
    "symbol": "Ca",
    "nominalMass": 42,
    "exactMass": 41.95861783,
    "abundance": 0.647
  },
  {
    "element": "Calcium",
    "symbol": "Ca",
    "nominalMass": 43,
    "exactMass": 42.95876644,
    "abundance": 0.135
  },
  {
    "element": "Calcium",
    "symbol": "Ca",
    "nominalMass": 44,
    "exactMass": 43.95548156,
    "abundance": 2.086
  },
  {
    "element": "Calcium",
    "symbol": "Ca",
    "nominalMass": 46,
    "exactMass": 45.953689,
    "abundance": 0.004
  },
  {
    "element": "Calcium",
    "symbol": "Ca",
    "nominalMass": 48,
    "exactMass": 47.95252276,
    "abundance": 0.187
  },
  {
    "element": "Scandium",
    "symbol": "Sc",
    "nominalMass": 45,
    "exactMass": 44.95590828,
    "abundance": 100
  },
  {
    "element": "Titanium",
    "symbol": "Ti",
    "nominalMass": 46,
    "exactMass": 45.95262772,
    "abundance": 8.25
  },
  {
    "element": "Titanium",
    "symbol": "Ti",
    "nominalMass": 47,
    "exactMass": 46.95175879,
    "abundance": 7.4399999999999995
  },
  {
    "element": "Titanium",
    "symbol": "Ti",
    "nominalMass": 48,
    "exactMass": 47.94794198,
    "abundance": 73.72
  },
  {
    "element": "Titanium",
    "symbol": "Ti",
    "nominalMass": 49,
    "exactMass": 48.94786568,
    "abundance": 5.41
  },
  {
    "element": "Titanium",
    "symbol": "Ti",
    "nominalMass": 50,
    "exactMass": 49.94478689,
    "abundance": 5.18
  },
  {
    "element": "Vanadium",
    "symbol": "V",
    "nominalMass": 50,
    "exactMass": 49.94715601,
    "abundance": 0.25
  },
  {
    "element": "Vanadium",
    "symbol": "V",
    "nominalMass": 51,
    "exactMass": 50.94395704,
    "abundance": 99.75
  },
  {
    "element": "Chromium",
    "symbol": "Cr",
    "nominalMass": 50,
    "exactMass": 49.94604183,
    "abundance": 4.345000000000001
  },
  {
    "element": "Chromium",
    "symbol": "Cr",
    "nominalMass": 52,
    "exactMass": 51.94050623,
    "abundance": 83.789
  },
  {
    "element": "Chromium",
    "symbol": "Cr",
    "nominalMass": 53,
    "exactMass": 52.94064815,
    "abundance": 9.501
  },
  {
    "element": "Chromium",
    "symbol": "Cr",
    "nominalMass": 54,
    "exactMass": 53.93887916,
    "abundance": 2.365
  },
  {
    "element": "Manganese",
    "symbol": "Mn",
    "nominalMass": 55,
    "exactMass": 54.93804391,
    "abundance": 100
  },
  {
    "element": "Iron",
    "symbol": "Fe",
    "nominalMass": 54,
    "exactMass": 53.93960899,
    "abundance": 5.845000000000001
  },
  {
    "element": "Iron",
    "symbol": "Fe",
    "nominalMass": 56,
    "exactMass": 55.93493633,
    "abundance": 91.754
  },
  {
    "element": "Iron",
    "symbol": "Fe",
    "nominalMass": 57,
    "exactMass": 56.93539284,
    "abundance": 2.119
  },
  {
    "element": "Iron",
    "symbol": "Fe",
    "nominalMass": 58,
    "exactMass": 57.93327443,
    "abundance": 0.28200000000000003
  },
  {
    "element": "Cobalt",
    "symbol": "Co",
    "nominalMass": 59,
    "exactMass": 58.93319429,
    "abundance": 100
  },
  {
    "element": "Nickel",
    "symbol": "Ni",
    "nominalMass": 58,
    "exactMass": 57.93534241,
    "abundance": 68.077
  },
  {
    "element": "Nickel",
    "symbol": "Ni",
    "nominalMass": 60,
    "exactMass": 59.93078588,
    "abundance": 26.223000000000003
  },
  {
    "element": "Nickel",
    "symbol": "Ni",
    "nominalMass": 61,
    "exactMass": 60.93105557,
    "abundance": 1.1399
  },
  {
    "element": "Nickel",
    "symbol": "Ni",
    "nominalMass": 62,
    "exactMass": 61.92834537,
    "abundance": 3.6346000000000003
  },
  {
    "element": "Nickel",
    "symbol": "Ni",
    "nominalMass": 64,
    "exactMass": 63.92796682,
    "abundance": 0.9255
  },
  {
    "element": "Copper",
    "symbol": "Cu",
    "nominalMass": 63,
    "exactMass": 62.92959772,
    "abundance": 69.15
  },
  {
    "element": "Copper",
    "symbol": "Cu",
    "nominalMass": 65,
    "exactMass": 64.9277897,
    "abundance": 30.85
  },
  {
    "element": "Zinc",
    "symbol": "Zn",
    "nominalMass": 64,
    "exactMass": 63.92914201,
    "abundance": 49.17
  },
  {
    "element": "Zinc",
    "symbol": "Zn",
    "nominalMass": 66,
    "exactMass": 65.92603381,
    "abundance": 27.73
  },
  {
    "element": "Zinc",
    "symbol": "Zn",
    "nominalMass": 67,
    "exactMass": 66.92712775,
    "abundance": 4.04
  },
  {
    "element": "Zinc",
    "symbol": "Zn",
    "nominalMass": 68,
    "exactMass": 67.92484455,
    "abundance": 18.45
  },
  {
    "element": "Zinc",
    "symbol": "Zn",
    "nominalMass": 70,
    "exactMass": 69.9253192,
    "abundance": 0.61
  },
  {
    "element": "Gallium",
    "symbol": "Ga",
    "nominalMass": 69,
    "exactMass": 68.9255735,
    "abundance": 60.108
  },
  {
    "element": "Gallium",
    "symbol": "Ga",
    "nominalMass": 71,
    "exactMass": 70.92470258,
    "abundance": 39.892
  },
  {
    "element": "Germanium",
    "symbol": "Ge",
    "nominalMass": 70,
    "exactMass": 69.92424875,
    "abundance": 20.57
  },
  {
    "element": "Germanium",
    "symbol": "Ge",
    "nominalMass": 72,
    "exactMass": 71.922075826,
    "abundance": 27.450000000000003
  },
  {
    "element": "Germanium",
    "symbol": "Ge",
    "nominalMass": 73,
    "exactMass": 72.923458956,
    "abundance": 7.75
  },
  {
    "element": "Germanium",
    "symbol": "Ge",
    "nominalMass": 74,
    "exactMass": 73.921177761,
    "abundance": 36.5
  },
  {
    "element": "Germanium",
    "symbol": "Ge",
    "nominalMass": 76,
    "exactMass": 75.921402726,
    "abundance": 7.7299999999999995
  },
  {
    "element": "Arsenic",
    "symbol": "As",
    "nominalMass": 75,
    "exactMass": 74.92159457,
    "abundance": 100
  },
  {
    "element": "Selenium",
    "symbol": "Se",
    "nominalMass": 74,
    "exactMass": 73.922475934,
    "abundance": 0.89
  },
  {
    "element": "Selenium",
    "symbol": "Se",
    "nominalMass": 76,
    "exactMass": 75.919213704,
    "abundance": 9.370000000000001
  },
  {
    "element": "Selenium",
    "symbol": "Se",
    "nominalMass": 77,
    "exactMass": 76.919914154,
    "abundance": 7.630000000000001
  },
  {
    "element": "Selenium",
    "symbol": "Se",
    "nominalMass": 78,
    "exactMass": 77.91730928,
    "abundance": 23.77
  },
  {
    "element": "Selenium",
    "symbol": "Se",
    "nominalMass": 80,
    "exactMass": 79.9165218,
    "abundance": 49.61
  },
  {
    "element": "Selenium",
    "symbol": "Se",
    "nominalMass": 82,
    "exactMass": 81.9166995,
    "abundance": 8.73
  },
  {
    "element": "Bromine",
    "symbol": "Br",
    "nominalMass": 79,
    "exactMass": 78.9183376,
    "abundance": 50.690000000000005
  },
  {
    "element": "Bromine",
    "symbol": "Br",
    "nominalMass": 81,
    "exactMass": 80.9162897,
    "abundance": 49.309999999999995
  },
  {
    "element": "Krypton",
    "symbol": "Kr",
    "nominalMass": 78,
    "exactMass": 77.92036494,
    "abundance": 0.35500000000000004
  },
  {
    "element": "Krypton",
    "symbol": "Kr",
    "nominalMass": 80,
    "exactMass": 79.91637808,
    "abundance": 2.286
  },
  {
    "element": "Krypton",
    "symbol": "Kr",
    "nominalMass": 82,
    "exactMass": 81.91348273,
    "abundance": 11.593
  },
  {
    "element": "Krypton",
    "symbol": "Kr",
    "nominalMass": 83,
    "exactMass": 82.91412716,
    "abundance": 11.5
  },
  {
    "element": "Krypton",
    "symbol": "Kr",
    "nominalMass": 84,
    "exactMass": 83.9114977282,
    "abundance": 56.987
  },
  {
    "element": "Krypton",
    "symbol": "Kr",
    "nominalMass": 86,
    "exactMass": 85.9106106269,
    "abundance": 17.279
  },
  {
    "element": "Rubidium",
    "symbol": "Rb",
    "nominalMass": 85,
    "exactMass": 84.9117897379,
    "abundance": 72.17
  },
  {
    "element": "Rubidium",
    "symbol": "Rb",
    "nominalMass": 87,
    "exactMass": 86.909180531,
    "abundance": 27.83
  },
  {
    "element": "Strontium",
    "symbol": "Sr",
    "nominalMass": 84,
    "exactMass": 83.9134191,
    "abundance": 0.5599999999999999
  },
  {
    "element": "Strontium",
    "symbol": "Sr",
    "nominalMass": 86,
    "exactMass": 85.9092606,
    "abundance": 9.86
  },
  {
    "element": "Strontium",
    "symbol": "Sr",
    "nominalMass": 87,
    "exactMass": 86.9088775,
    "abundance": 7.000000000000001
  },
  {
    "element": "Strontium",
    "symbol": "Sr",
    "nominalMass": 88,
    "exactMass": 87.9056125,
    "abundance": 82.58
  },
  {
    "element": "Yttrium",
    "symbol": "Y",
    "nominalMass": 89,
    "exactMass": 88.9058403,
    "abundance": 100
  },
  {
    "element": "Zirconium",
    "symbol": "Zr",
    "nominalMass": 90,
    "exactMass": 89.9046977,
    "abundance": 51.449999999999996
  },
  {
    "element": "Zirconium",
    "symbol": "Zr",
    "nominalMass": 91,
    "exactMass": 90.9056396,
    "abundance": 11.219999999999999
  },
  {
    "element": "Zirconium",
    "symbol": "Zr",
    "nominalMass": 92,
    "exactMass": 91.9050347,
    "abundance": 17.150000000000002
  },
  {
    "element": "Zirconium",
    "symbol": "Zr",
    "nominalMass": 94,
    "exactMass": 93.9063108,
    "abundance": 17.380000000000003
  },
  {
    "element": "Zirconium",
    "symbol": "Zr",
    "nominalMass": 96,
    "exactMass": 95.9082714,
    "abundance": 2.8000000000000003
  },
  {
    "element": "Niobium",
    "symbol": "Nb",
    "nominalMass": 93,
    "exactMass": 92.906373,
    "abundance": 100
  },
  {
    "element": "Molybdenum",
    "symbol": "Mo",
    "nominalMass": 92,
    "exactMass": 91.90680796,
    "abundance": 14.530000000000001
  },
  {
    "element": "Molybdenum",
    "symbol": "Mo",
    "nominalMass": 94,
    "exactMass": 93.9050849,
    "abundance": 9.15
  },
  {
    "element": "Molybdenum",
    "symbol": "Mo",
    "nominalMass": 95,
    "exactMass": 94.90583877,
    "abundance": 15.840000000000002
  },
  {
    "element": "Molybdenum",
    "symbol": "Mo",
    "nominalMass": 96,
    "exactMass": 95.90467612,
    "abundance": 16.669999999999998
  },
  {
    "element": "Molybdenum",
    "symbol": "Mo",
    "nominalMass": 97,
    "exactMass": 96.90601812,
    "abundance": 9.6
  },
  {
    "element": "Molybdenum",
    "symbol": "Mo",
    "nominalMass": 98,
    "exactMass": 97.90540482,
    "abundance": 24.39
  },
  {
    "element": "Molybdenum",
    "symbol": "Mo",
    "nominalMass": 100,
    "exactMass": 99.9074718,
    "abundance": 9.82
  },
  {
    "element": "Ruthenium",
    "symbol": "Ru",
    "nominalMass": 96,
    "exactMass": 95.90759025,
    "abundance": 5.54
  },
  {
    "element": "Ruthenium",
    "symbol": "Ru",
    "nominalMass": 98,
    "exactMass": 97.9052868,
    "abundance": 1.87
  },
  {
    "element": "Ruthenium",
    "symbol": "Ru",
    "nominalMass": 99,
    "exactMass": 98.9059341,
    "abundance": 12.76
  },
  {
    "element": "Ruthenium",
    "symbol": "Ru",
    "nominalMass": 100,
    "exactMass": 99.9042143,
    "abundance": 12.6
  },
  {
    "element": "Ruthenium",
    "symbol": "Ru",
    "nominalMass": 101,
    "exactMass": 100.9055769,
    "abundance": 17.06
  },
  {
    "element": "Ruthenium",
    "symbol": "Ru",
    "nominalMass": 102,
    "exactMass": 101.9043441,
    "abundance": 31.55
  },
  {
    "element": "Ruthenium",
    "symbol": "Ru",
    "nominalMass": 104,
    "exactMass": 103.9054275,
    "abundance": 18.62
  },
  {
    "element": "Rhodium",
    "symbol": "Rh",
    "nominalMass": 103,
    "exactMass": 102.905498,
    "abundance": 100
  },
  {
    "element": "Palladium",
    "symbol": "Pd",
    "nominalMass": 102,
    "exactMass": 101.9056022,
    "abundance": 1.02
  },
  {
    "element": "Palladium",
    "symbol": "Pd",
    "nominalMass": 104,
    "exactMass": 103.9040305,
    "abundance": 11.14
  },
  {
    "element": "Palladium",
    "symbol": "Pd",
    "nominalMass": 105,
    "exactMass": 104.9050796,
    "abundance": 22.33
  },
  {
    "element": "Palladium",
    "symbol": "Pd",
    "nominalMass": 106,
    "exactMass": 105.9034804,
    "abundance": 27.33
  },
  {
    "element": "Palladium",
    "symbol": "Pd",
    "nominalMass": 108,
    "exactMass": 107.9038916,
    "abundance": 26.46
  },
  {
    "element": "Palladium",
    "symbol": "Pd",
    "nominalMass": 110,
    "exactMass": 109.9051722,
    "abundance": 11.72
  },
  {
    "element": "Silver",
    "symbol": "Ag",
    "nominalMass": 107,
    "exactMass": 106.9050916,
    "abundance": 51.839
  },
  {
    "element": "Silver",
    "symbol": "Ag",
    "nominalMass": 109,
    "exactMass": 108.9047553,
    "abundance": 48.161
  },
  {
    "element": "Cadmium",
    "symbol": "Cd",
    "nominalMass": 106,
    "exactMass": 105.9064599,
    "abundance": 1.25
  },
  {
    "element": "Cadmium",
    "symbol": "Cd",
    "nominalMass": 108,
    "exactMass": 107.9041834,
    "abundance": 0.89
  },
  {
    "element": "Cadmium",
    "symbol": "Cd",
    "nominalMass": 110,
    "exactMass": 109.90300661,
    "abundance": 12.49
  },
  {
    "element": "Cadmium",
    "symbol": "Cd",
    "nominalMass": 111,
    "exactMass": 110.90418287,
    "abundance": 12.8
  },
  {
    "element": "Cadmium",
    "symbol": "Cd",
    "nominalMass": 112,
    "exactMass": 111.90276287,
    "abundance": 24.13
  },
  {
    "element": "Cadmium",
    "symbol": "Cd",
    "nominalMass": 113,
    "exactMass": 112.90440813,
    "abundance": 12.22
  },
  {
    "element": "Cadmium",
    "symbol": "Cd",
    "nominalMass": 114,
    "exactMass": 113.90336509,
    "abundance": 28.73
  },
  {
    "element": "Cadmium",
    "symbol": "Cd",
    "nominalMass": 116,
    "exactMass": 115.90476315,
    "abundance": 7.489999999999999
  },
  {
    "element": "Indium",
    "symbol": "In",
    "nominalMass": 113,
    "exactMass": 112.90406184,
    "abundance": 4.29
  },
  {
    "element": "Indium",
    "symbol": "In",
    "nominalMass": 115,
    "exactMass": 114.903878776,
    "abundance": 95.71
  },
  {
    "element": "Tin",
    "symbol": "Sn",
    "nominalMass": 112,
    "exactMass": 111.90482387,
    "abundance": 0.97
  },
  {
    "element": "Tin",
    "symbol": "Sn",
    "nominalMass": 114,
    "exactMass": 113.9027827,
    "abundance": 0.66
  },
  {
    "element": "Tin",
    "symbol": "Sn",
    "nominalMass": 115,
    "exactMass": 114.903344699,
    "abundance": 0.33999999999999997
  },
  {
    "element": "Tin",
    "symbol": "Sn",
    "nominalMass": 116,
    "exactMass": 115.9017428,
    "abundance": 14.540000000000001
  },
  {
    "element": "Tin",
    "symbol": "Sn",
    "nominalMass": 117,
    "exactMass": 116.90295398,
    "abundance": 7.68
  },
  {
    "element": "Tin",
    "symbol": "Sn",
    "nominalMass": 118,
    "exactMass": 117.90160657,
    "abundance": 24.22
  },
  {
    "element": "Tin",
    "symbol": "Sn",
    "nominalMass": 119,
    "exactMass": 118.90331117,
    "abundance": 8.59
  },
  {
    "element": "Tin",
    "symbol": "Sn",
    "nominalMass": 120,
    "exactMass": 119.90220163,
    "abundance": 32.58
  },
  {
    "element": "Tin",
    "symbol": "Sn",
    "nominalMass": 122,
    "exactMass": 121.9034438,
    "abundance": 4.63
  },
  {
    "element": "Tin",
    "symbol": "Sn",
    "nominalMass": 124,
    "exactMass": 123.9052766,
    "abundance": 5.79
  },
  {
    "element": "Antimony",
    "symbol": "Sb",
    "nominalMass": 121,
    "exactMass": 120.903812,
    "abundance": 57.21000000000001
  },
  {
    "element": "Antimony",
    "symbol": "Sb",
    "nominalMass": 123,
    "exactMass": 122.9042132,
    "abundance": 42.79
  },
  {
    "element": "Tellurium",
    "symbol": "Te",
    "nominalMass": 120,
    "exactMass": 119.9040593,
    "abundance": 0.09
  },
  {
    "element": "Tellurium",
    "symbol": "Te",
    "nominalMass": 122,
    "exactMass": 121.9030435,
    "abundance": 2.55
  },
  {
    "element": "Tellurium",
    "symbol": "Te",
    "nominalMass": 123,
    "exactMass": 122.9042698,
    "abundance": 0.89
  },
  {
    "element": "Tellurium",
    "symbol": "Te",
    "nominalMass": 124,
    "exactMass": 123.9028171,
    "abundance": 4.74
  },
  {
    "element": "Tellurium",
    "symbol": "Te",
    "nominalMass": 125,
    "exactMass": 124.9044299,
    "abundance": 7.07
  },
  {
    "element": "Tellurium",
    "symbol": "Te",
    "nominalMass": 126,
    "exactMass": 125.9033109,
    "abundance": 18.84
  },
  {
    "element": "Tellurium",
    "symbol": "Te",
    "nominalMass": 128,
    "exactMass": 127.90446128,
    "abundance": 31.740000000000002
  },
  {
    "element": "Tellurium",
    "symbol": "Te",
    "nominalMass": 130,
    "exactMass": 129.906222748,
    "abundance": 34.08
  },
  {
    "element": "Iodine",
    "symbol": "I",
    "nominalMass": 127,
    "exactMass": 126.9044719,
    "abundance": 100
  },
  {
    "element": "Xenon",
    "symbol": "Xe",
    "nominalMass": 124,
    "exactMass": 123.905892,
    "abundance": 0.0952
  },
  {
    "element": "Xenon",
    "symbol": "Xe",
    "nominalMass": 126,
    "exactMass": 125.9042983,
    "abundance": 0.089
  },
  {
    "element": "Xenon",
    "symbol": "Xe",
    "nominalMass": 128,
    "exactMass": 127.903531,
    "abundance": 1.9102000000000001
  },
  {
    "element": "Xenon",
    "symbol": "Xe",
    "nominalMass": 129,
    "exactMass": 128.9047808611,
    "abundance": 26.4006
  },
  {
    "element": "Xenon",
    "symbol": "Xe",
    "nominalMass": 130,
    "exactMass": 129.903509349,
    "abundance": 4.071000000000001
  },
  {
    "element": "Xenon",
    "symbol": "Xe",
    "nominalMass": 131,
    "exactMass": 130.90508406,
    "abundance": 21.232400000000002
  },
  {
    "element": "Xenon",
    "symbol": "Xe",
    "nominalMass": 132,
    "exactMass": 131.9041550856,
    "abundance": 26.9086
  },
  {
    "element": "Xenon",
    "symbol": "Xe",
    "nominalMass": 134,
    "exactMass": 133.90539466,
    "abundance": 10.4357
  },
  {
    "element": "Xenon",
    "symbol": "Xe",
    "nominalMass": 136,
    "exactMass": 135.907214484,
    "abundance": 8.8573
  },
  {
    "element": "Cesium",
    "symbol": "Cs",
    "nominalMass": 133,
    "exactMass": 132.905451961,
    "abundance": 100
  },
  {
    "element": "Barium",
    "symbol": "Ba",
    "nominalMass": 130,
    "exactMass": 129.9063207,
    "abundance": 0.106
  },
  {
    "element": "Barium",
    "symbol": "Ba",
    "nominalMass": 132,
    "exactMass": 131.9050611,
    "abundance": 0.101
  },
  {
    "element": "Barium",
    "symbol": "Ba",
    "nominalMass": 134,
    "exactMass": 133.90450818,
    "abundance": 2.4170000000000003
  },
  {
    "element": "Barium",
    "symbol": "Ba",
    "nominalMass": 135,
    "exactMass": 134.90568838,
    "abundance": 6.5920000000000005
  },
  {
    "element": "Barium",
    "symbol": "Ba",
    "nominalMass": 136,
    "exactMass": 135.90457573,
    "abundance": 7.854
  },
  {
    "element": "Barium",
    "symbol": "Ba",
    "nominalMass": 137,
    "exactMass": 136.90582714,
    "abundance": 11.232000000000001
  },
  {
    "element": "Barium",
    "symbol": "Ba",
    "nominalMass": 138,
    "exactMass": 137.905247,
    "abundance": 71.698
  },
  {
    "element": "Lanthanum",
    "symbol": "La",
    "nominalMass": 138,
    "exactMass": 137.9071149,
    "abundance": 0.08881
  },
  {
    "element": "Lanthanum",
    "symbol": "La",
    "nominalMass": 139,
    "exactMass": 138.9063563,
    "abundance": 99.91119
  },
  {
    "element": "Cerium",
    "symbol": "Ce",
    "nominalMass": 136,
    "exactMass": 135.90712921,
    "abundance": 0.185
  },
  {
    "element": "Cerium",
    "symbol": "Ce",
    "nominalMass": 138,
    "exactMass": 137.905991,
    "abundance": 0.251
  },
  {
    "element": "Cerium",
    "symbol": "Ce",
    "nominalMass": 140,
    "exactMass": 139.9054431,
    "abundance": 88.44999999999999
  },
  {
    "element": "Cerium",
    "symbol": "Ce",
    "nominalMass": 142,
    "exactMass": 141.9092504,
    "abundance": 11.114
  },
  {
    "element": "Praseodymium",
    "symbol": "Pr",
    "nominalMass": 141,
    "exactMass": 140.9076576,
    "abundance": 100
  },
  {
    "element": "Neodymium",
    "symbol": "Nd",
    "nominalMass": 142,
    "exactMass": 141.907729,
    "abundance": 27.151999999999997
  },
  {
    "element": "Neodymium",
    "symbol": "Nd",
    "nominalMass": 143,
    "exactMass": 142.90982,
    "abundance": 12.174
  },
  {
    "element": "Neodymium",
    "symbol": "Nd",
    "nominalMass": 144,
    "exactMass": 143.910093,
    "abundance": 23.798
  },
  {
    "element": "Neodymium",
    "symbol": "Nd",
    "nominalMass": 145,
    "exactMass": 144.9125793,
    "abundance": 8.293000000000001
  },
  {
    "element": "Neodymium",
    "symbol": "Nd",
    "nominalMass": 146,
    "exactMass": 145.9131226,
    "abundance": 17.189
  },
  {
    "element": "Neodymium",
    "symbol": "Nd",
    "nominalMass": 148,
    "exactMass": 147.9168993,
    "abundance": 5.756
  },
  {
    "element": "Neodymium",
    "symbol": "Nd",
    "nominalMass": 150,
    "exactMass": 149.9209022,
    "abundance": 5.638
  },
  {
    "element": "Samarium",
    "symbol": "Sm",
    "nominalMass": 144,
    "exactMass": 143.9120065,
    "abundance": 3.0700000000000003
  },
  {
    "element": "Samarium",
    "symbol": "Sm",
    "nominalMass": 147,
    "exactMass": 146.9149044,
    "abundance": 14.99
  },
  {
    "element": "Samarium",
    "symbol": "Sm",
    "nominalMass": 148,
    "exactMass": 147.9148292,
    "abundance": 11.24
  },
  {
    "element": "Samarium",
    "symbol": "Sm",
    "nominalMass": 149,
    "exactMass": 148.9171921,
    "abundance": 13.819999999999999
  },
  {
    "element": "Samarium",
    "symbol": "Sm",
    "nominalMass": 150,
    "exactMass": 149.9172829,
    "abundance": 7.380000000000001
  },
  {
    "element": "Samarium",
    "symbol": "Sm",
    "nominalMass": 152,
    "exactMass": 151.9197397,
    "abundance": 26.75
  },
  {
    "element": "Samarium",
    "symbol": "Sm",
    "nominalMass": 154,
    "exactMass": 153.9222169,
    "abundance": 22.75
  },
  {
    "element": "Europium",
    "symbol": "Eu",
    "nominalMass": 151,
    "exactMass": 150.9198578,
    "abundance": 47.81
  },
  {
    "element": "Europium",
    "symbol": "Eu",
    "nominalMass": 153,
    "exactMass": 152.921238,
    "abundance": 52.190000000000005
  },
  {
    "element": "Gadolinium",
    "symbol": "Gd",
    "nominalMass": 152,
    "exactMass": 151.9197995,
    "abundance": 0.2
  },
  {
    "element": "Gadolinium",
    "symbol": "Gd",
    "nominalMass": 154,
    "exactMass": 153.9208741,
    "abundance": 2.18
  },
  {
    "element": "Gadolinium",
    "symbol": "Gd",
    "nominalMass": 155,
    "exactMass": 154.9226305,
    "abundance": 14.799999999999999
  },
  {
    "element": "Gadolinium",
    "symbol": "Gd",
    "nominalMass": 156,
    "exactMass": 155.9221312,
    "abundance": 20.47
  },
  {
    "element": "Gadolinium",
    "symbol": "Gd",
    "nominalMass": 157,
    "exactMass": 156.9239686,
    "abundance": 15.65
  },
  {
    "element": "Gadolinium",
    "symbol": "Gd",
    "nominalMass": 158,
    "exactMass": 157.9241123,
    "abundance": 24.84
  },
  {
    "element": "Gadolinium",
    "symbol": "Gd",
    "nominalMass": 160,
    "exactMass": 159.9270624,
    "abundance": 21.86
  },
  {
    "element": "Terbium",
    "symbol": "Tb",
    "nominalMass": 159,
    "exactMass": 158.9253547,
    "abundance": 100
  },
  {
    "element": "Dysprosium",
    "symbol": "Dy",
    "nominalMass": 156,
    "exactMass": 155.9242847,
    "abundance": 0.055999999999999994
  },
  {
    "element": "Dysprosium",
    "symbol": "Dy",
    "nominalMass": 158,
    "exactMass": 157.9244159,
    "abundance": 0.095
  },
  {
    "element": "Dysprosium",
    "symbol": "Dy",
    "nominalMass": 160,
    "exactMass": 159.9252046,
    "abundance": 2.329
  },
  {
    "element": "Dysprosium",
    "symbol": "Dy",
    "nominalMass": 161,
    "exactMass": 160.9269405,
    "abundance": 18.889
  },
  {
    "element": "Dysprosium",
    "symbol": "Dy",
    "nominalMass": 162,
    "exactMass": 161.9268056,
    "abundance": 25.474999999999998
  },
  {
    "element": "Dysprosium",
    "symbol": "Dy",
    "nominalMass": 163,
    "exactMass": 162.9287383,
    "abundance": 24.895999999999997
  },
  {
    "element": "Dysprosium",
    "symbol": "Dy",
    "nominalMass": 164,
    "exactMass": 163.9291819,
    "abundance": 28.26
  },
  {
    "element": "Holmium",
    "symbol": "Ho",
    "nominalMass": 165,
    "exactMass": 164.9303288,
    "abundance": 100
  },
  {
    "element": "Erbium",
    "symbol": "Er",
    "nominalMass": 162,
    "exactMass": 161.9287884,
    "abundance": 0.13899999999999998
  },
  {
    "element": "Erbium",
    "symbol": "Er",
    "nominalMass": 164,
    "exactMass": 163.9292088,
    "abundance": 1.601
  },
  {
    "element": "Erbium",
    "symbol": "Er",
    "nominalMass": 166,
    "exactMass": 165.9302995,
    "abundance": 33.503
  },
  {
    "element": "Erbium",
    "symbol": "Er",
    "nominalMass": 167,
    "exactMass": 166.9320546,
    "abundance": 22.869
  },
  {
    "element": "Erbium",
    "symbol": "Er",
    "nominalMass": 168,
    "exactMass": 167.9323767,
    "abundance": 26.978
  },
  {
    "element": "Erbium",
    "symbol": "Er",
    "nominalMass": 170,
    "exactMass": 169.9354702,
    "abundance": 14.91
  },
  {
    "element": "Thulium",
    "symbol": "Tm",
    "nominalMass": 169,
    "exactMass": 168.9342179,
    "abundance": 100
  },
  {
    "element": "Ytterbium",
    "symbol": "Yb",
    "nominalMass": 168,
    "exactMass": 167.9338896,
    "abundance": 0.123
  },
  {
    "element": "Ytterbium",
    "symbol": "Yb",
    "nominalMass": 170,
    "exactMass": 169.9347664,
    "abundance": 2.9819999999999998
  },
  {
    "element": "Ytterbium",
    "symbol": "Yb",
    "nominalMass": 171,
    "exactMass": 170.9363302,
    "abundance": 14.09
  },
  {
    "element": "Ytterbium",
    "symbol": "Yb",
    "nominalMass": 172,
    "exactMass": 171.9363859,
    "abundance": 21.68
  },
  {
    "element": "Ytterbium",
    "symbol": "Yb",
    "nominalMass": 173,
    "exactMass": 172.9382151,
    "abundance": 16.103
  },
  {
    "element": "Ytterbium",
    "symbol": "Yb",
    "nominalMass": 174,
    "exactMass": 173.9388664,
    "abundance": 32.025999999999996
  },
  {
    "element": "Ytterbium",
    "symbol": "Yb",
    "nominalMass": 176,
    "exactMass": 175.9425764,
    "abundance": 12.995999999999999
  },
  {
    "element": "Lutetium",
    "symbol": "Lu",
    "nominalMass": 175,
    "exactMass": 174.9407752,
    "abundance": 97.40100000000001
  },
  {
    "element": "Lutetium",
    "symbol": "Lu",
    "nominalMass": 176,
    "exactMass": 175.9426897,
    "abundance": 2.5989999999999998
  },
  {
    "element": "Hafnium",
    "symbol": "Hf",
    "nominalMass": 174,
    "exactMass": 173.9400461,
    "abundance": 0.16
  },
  {
    "element": "Hafnium",
    "symbol": "Hf",
    "nominalMass": 176,
    "exactMass": 175.9414076,
    "abundance": 5.26
  },
  {
    "element": "Hafnium",
    "symbol": "Hf",
    "nominalMass": 177,
    "exactMass": 176.9432277,
    "abundance": 18.6
  },
  {
    "element": "Hafnium",
    "symbol": "Hf",
    "nominalMass": 178,
    "exactMass": 177.9437058,
    "abundance": 27.279999999999998
  },
  {
    "element": "Hafnium",
    "symbol": "Hf",
    "nominalMass": 179,
    "exactMass": 178.9458232,
    "abundance": 13.62
  },
  {
    "element": "Hafnium",
    "symbol": "Hf",
    "nominalMass": 180,
    "exactMass": 179.946557,
    "abundance": 35.08
  },
  {
    "element": "Tantalum",
    "symbol": "Ta",
    "nominalMass": 180,
    "exactMass": 179.9474648,
    "abundance": 0.01201
  },
  {
    "element": "Tantalum",
    "symbol": "Ta",
    "nominalMass": 181,
    "exactMass": 180.9479958,
    "abundance": 99.98799000000001
  },
  {
    "element": "Tungsten",
    "symbol": "W",
    "nominalMass": 180,
    "exactMass": 179.9467108,
    "abundance": 0.12
  },
  {
    "element": "Tungsten",
    "symbol": "W",
    "nominalMass": 182,
    "exactMass": 181.94820394,
    "abundance": 26.5
  },
  {
    "element": "Tungsten",
    "symbol": "W",
    "nominalMass": 183,
    "exactMass": 182.95022275,
    "abundance": 14.31
  },
  {
    "element": "Tungsten",
    "symbol": "W",
    "nominalMass": 184,
    "exactMass": 183.95093092,
    "abundance": 30.64
  },
  {
    "element": "Tungsten",
    "symbol": "W",
    "nominalMass": 186,
    "exactMass": 185.9543628,
    "abundance": 28.43
  },
  {
    "element": "Rhenium",
    "symbol": "Re",
    "nominalMass": 185,
    "exactMass": 184.9529545,
    "abundance": 37.4
  },
  {
    "element": "Rhenium",
    "symbol": "Re",
    "nominalMass": 187,
    "exactMass": 186.9557501,
    "abundance": 62.6
  },
  {
    "element": "Osmium",
    "symbol": "Os",
    "nominalMass": 184,
    "exactMass": 183.9524885,
    "abundance": 0.02
  },
  {
    "element": "Osmium",
    "symbol": "Os",
    "nominalMass": 186,
    "exactMass": 185.953835,
    "abundance": 1.59
  },
  {
    "element": "Osmium",
    "symbol": "Os",
    "nominalMass": 187,
    "exactMass": 186.9557474,
    "abundance": 1.96
  },
  {
    "element": "Osmium",
    "symbol": "Os",
    "nominalMass": 188,
    "exactMass": 187.9558352,
    "abundance": 13.239999999999998
  },
  {
    "element": "Osmium",
    "symbol": "Os",
    "nominalMass": 189,
    "exactMass": 188.9581442,
    "abundance": 16.150000000000002
  },
  {
    "element": "Osmium",
    "symbol": "Os",
    "nominalMass": 190,
    "exactMass": 189.9584437,
    "abundance": 26.26
  },
  {
    "element": "Osmium",
    "symbol": "Os",
    "nominalMass": 192,
    "exactMass": 191.961477,
    "abundance": 40.78
  },
  {
    "element": "Iridium",
    "symbol": "Ir",
    "nominalMass": 191,
    "exactMass": 190.9605893,
    "abundance": 37.3
  },
  {
    "element": "Iridium",
    "symbol": "Ir",
    "nominalMass": 193,
    "exactMass": 192.9629216,
    "abundance": 62.7
  },
  {
    "element": "Platinum",
    "symbol": "Pt",
    "nominalMass": 190,
    "exactMass": 189.9599297,
    "abundance": 0.012
  },
  {
    "element": "Platinum",
    "symbol": "Pt",
    "nominalMass": 192,
    "exactMass": 191.9610387,
    "abundance": 0.782
  },
  {
    "element": "Platinum",
    "symbol": "Pt",
    "nominalMass": 194,
    "exactMass": 193.9626809,
    "abundance": 32.86
  },
  {
    "element": "Platinum",
    "symbol": "Pt",
    "nominalMass": 195,
    "exactMass": 194.9647917,
    "abundance": 33.78
  },
  {
    "element": "Platinum",
    "symbol": "Pt",
    "nominalMass": 196,
    "exactMass": 195.96495209,
    "abundance": 25.21
  },
  {
    "element": "Platinum",
    "symbol": "Pt",
    "nominalMass": 198,
    "exactMass": 197.9678949,
    "abundance": 7.356
  },
  {
    "element": "Gold",
    "symbol": "Au",
    "nominalMass": 197,
    "exactMass": 196.96656879,
    "abundance": 100
  },
  {
    "element": "Mercury",
    "symbol": "Hg",
    "nominalMass": 196,
    "exactMass": 195.9658326,
    "abundance": 0.15
  },
  {
    "element": "Mercury",
    "symbol": "Hg",
    "nominalMass": 198,
    "exactMass": 197.9667686,
    "abundance": 9.969999999999999
  },
  {
    "element": "Mercury",
    "symbol": "Hg",
    "nominalMass": 199,
    "exactMass": 198.96828064,
    "abundance": 16.869999999999997
  },
  {
    "element": "Mercury",
    "symbol": "Hg",
    "nominalMass": 200,
    "exactMass": 199.96832659,
    "abundance": 23.1
  },
  {
    "element": "Mercury",
    "symbol": "Hg",
    "nominalMass": 201,
    "exactMass": 200.97030284,
    "abundance": 13.18
  },
  {
    "element": "Mercury",
    "symbol": "Hg",
    "nominalMass": 202,
    "exactMass": 201.9706434,
    "abundance": 29.86
  },
  {
    "element": "Mercury",
    "symbol": "Hg",
    "nominalMass": 204,
    "exactMass": 203.97349398,
    "abundance": 6.87
  },
  {
    "element": "Thallium",
    "symbol": "Tl",
    "nominalMass": 203,
    "exactMass": 202.9723446,
    "abundance": 29.520000000000003
  },
  {
    "element": "Thallium",
    "symbol": "Tl",
    "nominalMass": 205,
    "exactMass": 204.9744278,
    "abundance": 70.48
  },
  {
    "element": "Lead",
    "symbol": "Pb",
    "nominalMass": 204,
    "exactMass": 203.973044,
    "abundance": 1.4000000000000001
  },
  {
    "element": "Lead",
    "symbol": "Pb",
    "nominalMass": 206,
    "exactMass": 205.9744657,
    "abundance": 24.099999999999998
  },
  {
    "element": "Lead",
    "symbol": "Pb",
    "nominalMass": 207,
    "exactMass": 206.9758973,
    "abundance": 22.1
  },
  {
    "element": "Lead",
    "symbol": "Pb",
    "nominalMass": 208,
    "exactMass": 207.9766525,
    "abundance": 52.400000000000006
  },
  {
    "element": "Bismuth",
    "symbol": "Bi",
    "nominalMass": 209,
    "exactMass": 208.9803991,
    "abundance": 100
  },
  {
    "element": "Thorium",
    "symbol": "Th",
    "nominalMass": 232,
    "exactMass": 232.0380558,
    "abundance": 100
  },
  {
    "element": "Protactinium",
    "symbol": "Pa",
    "nominalMass": 231,
    "exactMass": 231.0358842,
    "abundance": 100
  },
  {
    "element": "Uranium",
    "symbol": "U",
    "nominalMass": 234,
    "exactMass": 234.0409523,
    "abundance": 0.005399999999999999
  },
  {
    "element": "Uranium",
    "symbol": "U",
    "nominalMass": 235,
    "exactMass": 235.0439301,
    "abundance": 0.7204
  },
  {
    "element": "Uranium",
    "symbol": "U",
    "nominalMass": 238,
    "exactMass": 238.0507884,
    "abundance": 99.27420000000001
  }
];
