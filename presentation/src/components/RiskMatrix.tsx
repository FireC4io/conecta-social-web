import { risks } from '../data/content'

export function RiskMatrix({ selectedId, onSelect }: { selectedId: string; onSelect: (id: string) => void }) {
  const selected = risks.find(r => r.id === selectedId) ?? risks[0]
  return <div className="risk-layout">
    <div className="risk-chart" role="group" aria-label="Matriz de impacto e probabilidade dos riscos documentados">
      <div className="chart-axis y-axis">Probabilidade</div>
      <div className="chart-axis x-axis">Impacto</div>
      <div className="grid-lines" />
      {[2,3,4,5,6,7,8].map(v => <span className="tick x-tick" style={{left: `${(v-1)/8*100}%`}} key={`x${v}`}>{v}</span>)}
      {[2,3,4,5,6,7].map(v => <span className="tick y-tick" style={{bottom: `${(v-1)/7*100}%`}} key={`y${v}`}>{v}</span>)}
      {risks.map((risk, i) => {
        const coincident = risks.slice(0, i).filter(r => r.impact === risk.impact && r.probability === risk.probability).length
        const total = risks.filter(r => r.impact === risk.impact && r.probability === risk.probability).length
        const offset = (coincident - (total - 1) / 2) * 54
        return <button key={risk.id} type="button" className={`risk-dot severity-${risk.severity.toLowerCase()} ${selected.id === risk.id ? 'selected' : ''}`} style={{left: `calc(${(risk.impact-1)/8*100}% + ${offset}px)`, bottom: `${(risk.probability-1)/7*100}%`}} onClick={() => onSelect(risk.id)} aria-label={`${risk.id}: ${risk.title}, impacto ${risk.impact}, probabilidade ${risk.probability}, ${risk.severity}`} aria-pressed={selected.id === risk.id}>{risk.id}</button>
      })}
    </div>
    <div className="risk-detail" aria-live="polite">
      <div className="eyebrow">RISCO SELECIONADO <span className={`status severity-${selected.severity.toLowerCase()}`}>{selected.severity}</span></div>
      <div className="risk-id">{selected.id}</div>
      <h3>{selected.title}</h3>
      <div className="risk-metrics"><span>Impacto <strong>{selected.impact}</strong></span><span>Probabilidade <strong>{selected.probability}</strong></span><span>Pontuação <strong>{selected.score}</strong></span></div>
      <p><b>Tratamento registrado:</b> {selected.treatment}</p>
      <p><b>Ação:</b> {selected.action}</p>
      <p className="muted"><b>Evidência atual:</b> {selected.evidence}</p>
    </div>
  </div>
}
