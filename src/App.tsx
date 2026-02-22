import { useState } from 'react';
import { findNuclide, calculateIsobars, type IsobarResult, calculateIsotopicDistribution, type IsotopeDistribution, findNuclidesByMass } from './utils/isobarCalculator';
import type { Isotope } from './data/isotopes';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './index.css';

function App() {
  const [query, setQuery] = useState('157Gd');
  const [target, setTarget] = useState<Isotope | null>(null);
  const [massNuclides, setMassNuclides] = useState<Isotope[]>([]);
  const [results, setResults] = useState<IsobarResult[]>([]);
  const [error, setError] = useState('');
  const [selectedDistribution, setSelectedDistribution] = useState<IsotopeDistribution[] | null>(null);
  const [selectedFormula, setSelectedFormula] = useState('');

  const handleSearch = () => {
    setError('');
    setMassNuclides([]);

    // Check if it's just a number
    if (/^\d+$/.test(query)) {
      const mass = parseInt(query);
      const nuclides = findNuclidesByMass(mass);
      if (nuclides.length > 0) {
        setMassNuclides(nuclides);
        // Default to most abundant
        const mostAbundant = [...nuclides].sort((a, b) => b.abundance - a.abundance)[0];
        performAnalysis(mostAbundant);
      } else {
        setError(`No stable isotopes found for mass ${mass}.`);
      }
      return;
    }

    const found = findNuclide(query);
    if (found) {
      const nuclides = findNuclidesByMass(found.nominalMass);
      setMassNuclides(nuclides);
      performAnalysis(found);
    } else {
      setTarget(null);
      setResults([]);
      setError(`Nuclide "${query}" not found. Try "157Gd" or "157".`);
    }
  };

  const performAnalysis = (nuclide: Isotope) => {
    setTarget(nuclide);
    const calculatedResults = calculateIsobars(nuclide.nominalMass, nuclide.exactMass);
    setResults(calculatedResults);
  };

  const handleCardClick = (res: IsobarResult) => {
    const symbols = res.composition.map(iso => iso.symbol);
    const dist = calculateIsotopicDistribution(symbols);
    setSelectedDistribution(dist);
    // Extract base symbols for formula title (e.g., "Pr + O")
    const formulaTitle = symbols.join(' + ');
    setSelectedFormula(formulaTitle);
  };

  const closeChart = () => setSelectedDistribution(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="container">
      <div className="glow-circle top-right"></div>
      <div className="glow-circle bottom-left"></div>

      <header className="header">
        <h1 className="title">Isobaric Ion Analyzer</h1>
        <p className="subtitle">Discover atomic and polyatomic interferences with precision.</p>
      </header>

      <main className="main">
        <div className="search-card glow-panel">
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter nuclide (e.g. 157Gd)"
          />
          <button className="search-button" onClick={handleSearch}>Analyze</button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {massNuclides.length > 1 && (
          <div className="nuclide-selector glow-panel fade-in">
            <p className="selector-title">Stable isotopes at mass {massNuclides[0].nominalMass}:</p>
            <div className="nuclide-chips">
              {massNuclides.map((iso) => (
                <button
                  key={`${iso.symbol}-${iso.nominalMass}`}
                  className={`nuclide-chip ${target?.symbol === iso.symbol ? 'active' : ''}`}
                  onClick={() => performAnalysis(iso)}
                >
                  {iso.nominalMass}{iso.symbol} ({iso.abundance.toFixed(2)}%)
                </button>
              ))}
            </div>
          </div>
        )}

        {target && (
          <div className="target-summary glow-panel">
            <div className="target-element">
              <span className="mass-number">{target.nominalMass}</span>
              {target.symbol}
            </div>
            <div className="target-details">
              <p>Exact Mass: <strong>{target.exactMass.toFixed(6)} u</strong></p>
              <p>Natural Abundance: <strong>{target.abundance.toFixed(4)}%</strong></p>
              <span className="badge badge-primary">Target Nuclide</span>
            </div>
          </div>
        )}

        {results.length > 0 && (
          <div className="results-container">
            {results.some(r => r.type === 'Atomic') && (
              <section className="results-section">
                <h2 className="results-title">Atomic Isobars (Stable / Long-lived)</h2>
                <div className="results-grid">
                  {results.filter(res => res.type === 'Atomic').map((res, index) => (
                    <div
                      key={`atomic-${index}`}
                      className="result-card glow-panel fade-in clickable"
                      onClick={() => handleCardClick(res)}
                    >
                      <div className="result-header">
                        <span className="badge badge-primary">Atomic</span>
                        <span className="result-formula">{res.formula}</span>
                      </div>
                      <ResultBody res={res} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="results-section">
              <h2 className="results-title">Polyatomic Interferences</h2>
              <div className="results-grid">
                {results.filter(res => res.type === 'Polyatomic').map((res, index) => (
                  <div
                    key={`poly-${index}`}
                    className="result-card glow-panel fade-in clickable"
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onClick={() => handleCardClick(res)}
                  >
                    <div className="result-header">
                      <span className="badge badge-secondary">Polyatomic</span>
                      <span className="result-formula">{res.formula}</span>
                    </div>
                    <ResultBody res={res} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {selectedDistribution && (
          <div className="modal-overlay" onClick={closeChart}>
            <div className="modal-content glow-panel" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Isotopic Distribution: {selectedFormula}</h3>
                <button className="close-button" onClick={closeChart}>&times;</button>
              </div>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={selectedDistribution}>
                    <XAxis
                      dataKey="mass"
                      stroke="#8b949e"
                      fontSize={12}
                      label={{ value: 'Mass Number', position: 'insideBottom', offset: -5, fill: '#8b949e' }}
                    />
                    <YAxis
                      stroke="#8b949e"
                      fontSize={12}
                      label={{ value: 'Abundance %', angle: -90, position: 'insideLeft', fill: '#8b949e' }}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0d1117', border: '1px solid #30363d', borderRadius: '8px' }}
                      itemStyle={{ color: '#58a6ff' }}
                    />
                    <Bar dataKey="abundance">
                      {selectedDistribution.map((entry: IsotopeDistribution, index: number) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.mass === (selectedDistribution.find(d => d.abundance === Math.max(...selectedDistribution.map(x => x.abundance)))?.mass) ? '#58a6ff' : '#a371f7'}
                          fillOpacity={0.8}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="chart-hint">Showing relative abundance for all isotopic combinations of this element set.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function ResultBody({ res }: { res: IsobarResult }) {
  return (
    <div className="result-details">
      <div className="detail-item">
        <span className="label">Exact Mass</span>
        <span className="value">{res.exactMass.toFixed(6)} u</span>
      </div>
      <div className="detail-item">
        <span className="label">ΔM</span>
        <span className="value highlight">{(res.deltaM * 1000).toFixed(3)} mDa</span>
      </div>
      <div className="detail-item">
        <span className="label">Req. Res (m/Δm)</span>
        <span className="value">{Math.round(res.requiredResolution).toLocaleString()}</span>
      </div>
      <div className="detail-item">
        <span className="label">Likelihood (Abundance %)</span>
        <span className="value indicator" style={{ width: `${Math.min(100, res.abundance * 10)}%` }}>
          {res.abundance.toExponential(2)}%
        </span>
      </div>
    </div>
  );
}

export default App;
