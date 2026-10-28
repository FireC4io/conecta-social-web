export type SlideId = 'abertura' | 'pitch' | 'matriz' | 'tratamento' | 'arquitetura' | 'eventos' | 'dashboard' | 'operacao' | 'resumo' | 'demo'
export interface SlideMeta { id: SlideId; title: string; section: string; seconds: number }
export const teamMembers = [
  'Guilherme Pazetti de Oliveira',
  'Caio Cesar Martins de Lima',
  'Maicon Rodrigues dos Santos',
  'Nicolas Katsuji Nagano',
] as const
export const slides: SlideMeta[] = [
  { id: 'abertura', title: 'Conecta Social', section: 'Projeto', seconds: 30 },
  { id: 'pitch', title: 'Gestão para iniciativas sociais', section: 'Projeto', seconds: 60 },
  { id: 'matriz', title: 'Mapa de riscos', section: 'Segurança', seconds: 60 },
  { id: 'tratamento', title: 'R01 e R02: tratamento e próximo passo', section: 'Segurança', seconds: 60 },
  { id: 'arquitetura', title: 'Arquitetura do Conecta Social', section: 'Nuvem', seconds: 120 },
  { id: 'eventos', title: 'Eventos: web e mobile', section: 'Experiência', seconds: 70 },
  { id: 'dashboard', title: 'Dashboard em duas telas', section: 'Experiência', seconds: 70 },
  { id: 'operacao', title: 'Operação de doações no mobile', section: 'Experiência', seconds: 70 },
  { id: 'resumo', title: 'Resumo expandido', section: 'Pesquisa', seconds: 60 },
  { id: 'demo', title: 'Demonstração ao vivo', section: 'Aplicativo', seconds: 300 },
]

export interface Risk { id: string; title: string; impact: number; probability: number; score: number; severity: 'Alto' | 'Médio' | 'Baixo'; treatment: 'Mitigado' | 'Em mitigação' | 'Aceito'; action: string; evidence: string }
export const risks: Risk[] = [
  { id: 'R01', title: 'Dados sensíveis em logs', impact: 8, probability: 7, score: 56, severity: 'Alto', treatment: 'Mitigado', action: 'Sanitização do payload e envio assíncrono', evidence: 'Interceptor oculta chaves sensíveis no primeiro nível; logger envia sem bloquear a resposta.' },
  { id: 'R02', title: 'Tentativas de login sem limite', impact: 6, probability: 5, score: 30, severity: 'Médio', treatment: 'Em mitigação', action: 'Rate limiting, MFA ou lockout', evidence: 'Pendente de confirmação na implementação atual.' },
  { id: 'R03', title: 'Conversão de DTOs numéricos', impact: 3, probability: 3, score: 9, severity: 'Baixo', treatment: 'Em mitigação', action: 'Conversão explícita ou implícita', evidence: 'Pendente de validação por DTO e endpoint.' },
  { id: 'R04', title: 'Migrations e seed no boot', impact: 8, probability: 3, score: 24, severity: 'Médio', treatment: 'Aceito', action: 'Condicionar execução em produção', evidence: 'Entrypoint atual usa RUN_MIGRATIONS e RUN_SEED; a matriz ainda registra “Aceito”.' },
  { id: 'R05', title: 'Endereço completo em eventos públicos', impact: 6, probability: 3, score: 18, severity: 'Médio', treatment: 'Em mitigação', action: 'Revisar resposta pública', evidence: 'Pendente de validação da resposta publicada.' },
  { id: 'R07', title: 'URLs externas do Instagram', impact: 6, probability: 3, score: 18, severity: 'Médio', treatment: 'Mitigado', action: 'Validar URL e gerar embed localmente', evidence: 'InstagramContentService valida e gera o bloco de embed na API.' },
  { id: 'R08', title: 'Configuração duplicada do embed', impact: 5, probability: 2, score: 10, severity: 'Médio', treatment: 'Mitigado', action: 'Remover serviço HTTP separado', evidence: 'Geração local na API; matriz registra a remoção da dependência.' },
  { id: 'R09', title: 'E-mail sem normalização no login', impact: 2, probability: 3, score: 6, severity: 'Baixo', treatment: 'Em mitigação', action: 'Normalizar antes da busca', evidence: 'AuthService passa o e-mail recebido para findByEmail.' },
  { id: 'R10', title: 'Soft-delete sem retenção', impact: 4, probability: 3, score: 12, severity: 'Médio', treatment: 'Aceito', action: 'Definir retenção ou purga', evidence: 'A matriz mantém o risco aceito.' },
]

export interface Screenshot { id: string; platform: 'WEB' | 'MOBILE'; label: string; src: string; historical?: boolean; previewPosition?: string }
export const screenshots: Record<string, Screenshot> = {
  webEvents: { id: 'webEvents', platform: 'WEB', label: 'Lista de eventos', src: '/screenshots/web/eventos-historico.png', historical: true },
  mobileEvents: { id: 'mobileEvents', platform: 'MOBILE', label: 'Aba Eventos', src: '/screenshots/mobile/eventos.png', previewPosition: 'center 50%' },
  webDashboard: { id: 'webDashboard', platform: 'WEB', label: 'Dashboard', src: '/screenshots/web/dashboard-historico.png', historical: true },
  mobileDashboard: { id: 'mobileDashboard', platform: 'MOBILE', label: 'Painel', src: '/screenshots/mobile/dashboard.png', previewPosition: 'center 35%' },
  mobileDonations: { id: 'mobileDonations', platform: 'MOBILE', label: 'Lista de doações', src: '/screenshots/mobile/doacoes-lista.png', previewPosition: 'center top' },
  mobileStock: { id: 'mobileStock', platform: 'MOBILE', label: 'Ajuste de estoque', src: '/screenshots/mobile/ajuste-estoque.png', previewPosition: 'center 40%' },
}

export interface ArchitectureNode { id: string; label: string; detail: string; status: 'codigo' | 'relatorio' | 'validar' }
export interface ArchitectureEdge { from: string; to: string; label: string }
export const architecture = {
  replacementImage: '' as string,
  nodes: [
    { id: 'clients', label: 'Web + mobile', detail: 'Clientes do produto', status: 'codigo' },
    { id: 'caddy', label: 'Caddy', detail: 'HTTPS · Oracle', status: 'relatorio' },
    { id: 'api', label: 'NestJS', detail: 'API + JWT', status: 'codigo' },
    { id: 'db', label: 'PostgreSQL', detail: 'Rede Docker interna', status: 'relatorio' },
    { id: 's3', label: 'S3', detail: 'Imagens de doações', status: 'validar' },
    { id: 'logs', label: 'Better Stack', detail: 'Envio de logs', status: 'validar' },
  ] as ArchitectureNode[],
  edges: [
    { from: 'clients', to: 'caddy', label: 'endpoint configurado' },
    { from: 'caddy', to: 'api', label: 'proxy' },
    { from: 'api', to: 'db', label: 'rede privada' },
    { from: 'api', to: 's3', label: 'integração no código' },
    { from: 'api', to: 'logs', label: 'integração no código' },
  ] as ArchitectureEdge[],
}

export const abstractContent = {
  objective: 'Centralizar doações, famílias, voluntários e eventos para apoiar a gestão de organizações sociais.',
  methodology: 'Desenvolvimento incremental em sprints, com aplicações web, API e mobile, código versionado e testes automatizados.',
  results: 'Três aplicações integradas: área pública, gestão administrativa, indicadores, estoque e registros de auditoria.',
  conclusions: 'A centralização favorece a rastreabilidade e a prestação de contas. Offline completo e limite de tentativas no login seguem pendentes.',
}
