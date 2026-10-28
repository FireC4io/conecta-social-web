# Fontes dos slides

| Slides | Afirmações principais | Fontes |
|---|---|---|
| 1–2 | Nome, propósito, público, Fatec e curso | `conecta-social-resources/README.md`; `conecta-social-web/README.md`; `conecta-social-mobile/README.md`; `conecta-social-resources/Conecta-Social-PI.pdf` (documento histórico de 2025) |
| 1 | Integrantes da apresentação | Nomes fornecidos diretamente pelo usuário em 20/10/2026 |
| 3–4 | R01–R10, exceto R06, valores, severidade e tratamento | `conecta-social-api/RISK_MATRIX.md` |
| 4 | R01: ocultação de chaves sensíveis no primeiro nível e envio assíncrono; R02: tentativas de login sem controle e tratamento proposto | `conecta-social-api/RISK_MATRIX.md`; `conecta-social-api/src/common/interceptor/logging.interceptor.ts`; `src/common/logger/logger.service.ts` |
| 5 | Oracle Cloud, Caddy, NestJS, PostgreSQL, HTTPS, rede interna, testes em 06/10/2026 | `conecta-social-resources/Relatorio-Conecta-Social-na-Nuvem.pdf`, seções “Backend do Conecta Social na Oracle Cloud” e “Testes de produção” |
| 5 | S3, Better Stack e opção MongoDB | `conecta-social-api/src/modules/donation/services/donation-image.service.ts`; `src/common/logger/logger.service.ts`; `src/infra/database/database.module.ts` |
| 6 | Web: tabela de eventos; mobile: aba Eventos com publicações ilustradas | `conecta-social-resources/capturas de tela/print6.png`; `conecta-social-web/src/app/(pages)/(manager)/dashboard/events/page.tsx`; `presentation/public/screenshots/mobile/eventos.png` (simulador, 20/10/2026) |
| 7 | Web: dashboard amplo; mobile: cards e gráfico por período | `conecta-social-resources/capturas de tela/print8.png`; `conecta-social-web/src/app/(pages)/(manager)/dashboard/page.tsx`; `presentation/public/screenshots/mobile/dashboard.png` (simulador, 20/10/2026) |
| 8 | Lista de doações com filtros; formulário de ajuste de estoque | `presentation/public/screenshots/mobile/doacoes-lista.png`; `presentation/public/screenshots/mobile/ajuste-estoque.png` (simulador, 20/10/2026); `conecta-social-mobile/src/screens/DonationsListScreen.tsx`; `DonationDetailScreen.tsx` |
| 9 | Objetivo, metodologia, resultados, conclusões e limitações sintetizados | `Conecta Social - Resumo Expandido.docx`, fornecido pelo usuário em 20/10/2026 (seções 1–4) |
| 10 | Transição para demo real | Solicitação do usuário |

As capturas web são históricas. As quatro capturas mobile foram fornecidas pelo usuário em 20/10/2026 e feitas no simulador iPhone 16 Plus. Textos e números visíveis nas imagens não foram usados como métricas da apresentação. O relatório Oracle é uma evidência de uma data específica, não uma verificação de disponibilidade no momento da banca. O documento `conecta-social-resources/riscos-operacionais-evolucoes-imediatas-2026-05-28.md` foi consultado como contexto histórico e pode divergir do código atual.

O fluxograma de arquitetura foi construído em SVG editável a partir do deploy Oracle descrito no relatório e das integrações observadas no código. O tracejado até Caddy indica que o endpoint Oracle dos clientes não foi confirmado. A POC CloudStack (`presentation/references/POC-Apache-CloudStack-2026.pdf`) e o laboratório relatado em outubro servem como contexto técnico, sem serem apresentados como hospedagem do Conecta Social.

O ícone exibido nos slides foi copiado de `conecta-social-mobile/assets/icon.png`; o SVG original de `conecta-social-web/public/images/logo.svg` também foi preservado em `presentation/public/images/` para reutilização.
