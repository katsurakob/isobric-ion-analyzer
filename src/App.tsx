import { useState } from 'react';
import { findNuclide, calculateIsobars, type IsobarResult, calculateIsotopicDistribution, type IsotopeDistribution } from './utils/isobarCalculator';
import type { Isotope } from './data/isotopes';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './index.css';

function App() {
  const [query, setQuery] = useState('157Gd');
  const [target, setTarget] = useState<Isotope | null>(null);
  const [results, setResults] = useState<IsobarResult[]>([]);
  const [error, setError] = useState('');
  const [selectedDistribution, setSelectedDistribution] = useState<IsotopeDistribution[] | null>(null);
  const [selectedFormula, setSelectedFormula] = useState('');

  const handleSearch = () => {
    setError('');
    const found = findNuclide(query);
    if (found) {
      setTarget(found);
      const calculatedResults = calculateIsobars(found.nominalMass, found.exactMass);
      setResults(calculatedResults);
    } else {
      setTarget(null);
      setResults([]);
      setError(`Nuclide "${query}" not found. Try "157Gd" or "157".`);
    }
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

        {target && (
          <div className="target-summary glow-panel">
            <div className="target-element">
              <span className="mass-number">{target.nominalMass}</span>
              {target.symbol}
            </div>
            <div className="target-details">
              <p>Exact Mass: <strong>{target.exactMass.toFixed(6)} u</strong></p>
              <p>Natural Abundance: <strong>{target.abundance.toFixed(4)}%</strong></p>
            </div>
          </div>
        )}

        {results.length > 0 && (
          <div className="results-container">
            <h2 className="results-title">Isobaric Interferences ({results.length})</h2>

            <div className="results-grid">
              {results.map((res, index) => (
                <div
                  key={index}
                  className="result-card glow-panel fade-in clickable"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => handleCardClick(res)}
                >
                  <div className="result-header">
                    <span className={`badge ${res.type === 'Atomic' ? 'badge-primary' : 'badge-secondary'}`}>
                      {res.type}
                    </span>
                    <span className="result-formula">{res.formula}</span>
                  </div>
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
                </div>
              ))}
            </div>
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
                      {selectedDistribution.map((entry, index) => (
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

export default App;
