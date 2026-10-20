# Fontes dos slides

| Slides | Afirmações principais | Fontes |
|---|---|---|
| 1–2 | Nome, propósito, público, Fatec e curso | `conecta-social-resources/README.md`; `conecta-social-web/README.md`; `conecta-social-mobile/README.md`; `conecta-social-resources/Conecta-Social-PI.pdf` (documento histórico de 2025) |
| 1 | Integrantes da apresentação | Nomes fornecidos diretamente pelo usuário em 20/10/2026 |
| 3–4 | R01–R10, exceto R06, valores, severidade e tratamento | `conecta-social-api/RISK_MATRIX.md` |
| 4 | Logs redigidos no primeiro nível; envio assíncrono; validação/geração de embed; migrations e seed condicionados | `conecta-social-api/src/common/interceptor/logging.interceptor.ts`; `src/common/logger/logger.service.ts`; `src/modules/event/services/instagram-content.service.ts`; `conecta-social-api/entrypoint.sh` |
| 5 | Oracle Cloud, Caddy, NestJS, PostgreSQL, HTTPS, rede interna, testes em 06/10/2026 | `conecta-social-resources/Relatorio-Conecta-Social-na-Nuvem.pdf`, seções “Backend do Conecta Social na Oracle Cloud” e “Testes de produção” |
| 5 | S3, Better Stack e opção MongoDB | `conecta-social-api/src/modules/donation/services/donation-image.service.ts`; `src/common/logger/logger.service.ts`; `src/infra/database/database.module.ts` |
| 6 | Web: tabela de eventos; mobile: aba de eventos | `conecta-social-resources/capturas de tela/print6.png`; `conecta-social-web/src/app/(pages)/(manager)/dashboard/events/page.tsx`; `conecta-social-mobile/src/navigation/MainTabs.tsx`; `src/screens/EventsListScreen.tsx` |
| 7 | Web: dashboard amplo; mobile: Painel por período | `conecta-social-resources/capturas de tela/print8.png`; `conecta-social-web/src/app/(pages)/(manager)/dashboard/page.tsx`; `conecta-social-mobile/src/screens/ChartsScreen.tsx` |
| 8 | Filtros, ajuste, distribuição e auditoria no mobile | `conecta-social-mobile/src/screens/DonationsListScreen.tsx`; `DonationDetailScreen.tsx`; `OperationLogScreen.tsx` |
| 9 | Espaço reservado, sem conteúdo inferido | Solicitação do usuário |
| 10 | Transição para demo real | Solicitação do usuário |

As capturas web são históricas. Textos e números contidos nelas não foram usados como métricas da apresentação. O relatório Oracle é uma evidência de uma data específica, não uma verificação de disponibilidade no momento da banca. O documento `conecta-social-resources/riscos-operacionais-evolucoes-imediatas-2026-05-28.md` foi consultado como contexto histórico e pode divergir do código atual.

O fluxograma de arquitetura foi construído em SVG editável a partir do deploy Oracle descrito no relatório e das integrações observadas no código. O tracejado até Caddy indica que o endpoint Oracle dos clientes não foi confirmado. A POC CloudStack (`presentation/references/POC-Apache-CloudStack-2026.pdf`) e o laboratório relatado em outubro servem como contexto técnico, sem serem apresentados como hospedagem do Conecta Social.

O ícone exibido nos slides foi copiado de `conecta-social-mobile/assets/icon.png`; o SVG original de `conecta-social-web/public/images/logo.svg` também foi preservado em `presentation/public/images/` para reutilização.
