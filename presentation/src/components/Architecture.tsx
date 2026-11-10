import { architecture } from '../data/content'

interface FlowNodeProps {
  x: number
  y: number
  width: number
  number: string
  title: string
  detail: string
  variant?: 'pending' | 'conditional'
}

function FlowNode({ x, y, width, number, title, detail, variant }: FlowNodeProps) {
  return <g className={variant ? `flow-node flow-node-${variant}` : 'flow-node'}>
    <rect x={x} y={y} width={width} height="88" rx="14" />
    <text x={x + 18} y={y + 24} className="flow-node-number">{number}</text>
    <text x={x + 18} y={y + 53} className="flow-node-title">{title}</text>
    <text x={x + 18} y={y + 75} className="flow-node-detail">{detail}</text>
  </g>
}

/** The editable SVG prioritizes the application's documented deploy. */
export function Architecture() {
  if (architecture.replacementImage) return <img className="architecture-image" src={architecture.replacementImage} alt="Diagrama de arquitetura configurado para substituir o fluxograma editável" />

  return <svg className="architecture-flow" viewBox="0 0 1390 430" role="img" aria-labelledby="architecture-title architecture-description">
    <title id="architecture-title">Fluxograma da arquitetura do Conecta Social</title>
    <desc id="architecture-description">Clientes web e mobile usam um endpoint configurável; a ligação à instância Oracle precisa ser confirmada. No deploy Oracle documentado, o Caddy recebe HTTPS e encaminha à API NestJS com autenticação JWT, que acessa PostgreSQL 15 na rede Docker interna. S3 e Better Stack estão presentes no código, mas a ativação nesse deploy não foi confirmada.</desc>
    <defs>
      <marker id="flow-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#74c7f3" /></marker>
      <marker id="flow-arrow-pending" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#90a9bb" /></marker>
    </defs>

    <g className="flow-lane">
      <rect x="1" y="1" width="1388" height="255" rx="18" />
      <text x="31" y="34" className="flow-lane-title">FLUXO DA APLICAÇÃO</text>
      <text x="1357" y="34" textAnchor="end" className="flow-lane-meta">ORACLE CLOUD</text>
      <rect x="308" y="53" width="1048" height="171" rx="16" className="flow-oracle-boundary" />
      <text x="334" y="79" className="flow-boundary-label">VCN · SECURITY LIST · VM UBUNTU · DOCKER COMPOSE</text>
      <path className="flow-connector flow-connector-pending" d="M261 156 H332" />
      <path className="flow-connector" d="M585 156 H647" />
      <path className="flow-connector" d="M922 156 H991" />
      <FlowNode x={30} y={112} width={231} number="01 · CLIENTES" title="Web + mobile" detail="Next.js · Expo" variant="pending" />
      <FlowNode x={332} y={112} width={253} number="02 · ENTRADA" title="Caddy" detail="HTTPS · proxy reverso" />
      <FlowNode x={647} y={112} width={275} number="03 · APLICAÇÃO" title="NestJS" detail="API · autenticação JWT" />
      <FlowNode x={991} y={112} width={331} number="04 · DADOS" title="PostgreSQL 15" detail="rede Docker interna" />
      <text x="31" y="243" className="flow-lane-caption">Seta tracejada: confirmar se os clientes usam este endpoint Oracle. O banco não expõe porta pública.</text>
    </g>

    <g className="flow-lane flow-lane-code">
      <rect x="1" y="269" width="1388" height="160" rx="18" />
      <text x="31" y="301" className="flow-lane-title">INTEGRAÇÕES PRESENTES NA API</text>
      <FlowNode x={250} y={322} width={365} number="CÓDIGO · IMAGENS" title="S3" detail="upload e URL assinada" variant="conditional" />
      <FlowNode x={775} y={322} width={365} number="CÓDIGO · OBSERVABILIDADE" title="Better Stack" detail="destino opcional de logs" variant="conditional" />
    </g>
  </svg>
}
