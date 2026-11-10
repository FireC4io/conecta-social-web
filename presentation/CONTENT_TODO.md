# Conteúdo pendente e validações

## Para preencher

- Confirmar se os orientadores e disciplinas do documento acadêmico de 2025 ainda são os da banca atual antes de exibi-los.
- Se a banca exigir uma tela de auditoria nos slides, capturar a aba Logs e decidir se ela merece substituir uma das quatro capturas mobile já incluídas. A consulta de logs continua prevista para a demonstração ao vivo.
- Se desejado, substituir as capturas web históricas por versões atuais em `public/screenshots/web/` e atualizar o manifesto. As imagens existentes têm dados demonstrativos/antigos.
- Revisar o roteiro oral com o aplicativo e o equipamento de projeção disponíveis no dia.

## Para validar antes da banca

- Confirmar o endpoint efetivo configurado nos clientes web e mobile. O relatório Oracle registra o frontend apontado para esse backend como próximo passo.
- Confirmar se S3 e Better Stack estão configurados no ambiente que será demonstrado. As integrações estão no código.
- Confirmar estado atual do deploy Oracle; o relatório documenta testes em 06/10/2026, não disponibilidade em tempo real.
- Rever status documental de R04: a matriz o marca como aceito, enquanto o entrypoint atual condiciona migrations e seed a flags.
- Validar o tratamento de R02, R03, R05 e R09 por endpoint e ambiente antes de atualizar as classificações.
- Não declarar sincronização offline como entregue: aparece como requisito no README mobile, sem implementação confirmada na inspeção.
- Confirmar se o trecho de URLs Instagram cobre todos os formatos aceitos pela aplicação antes de descrevê-lo como validação completa.
- Rever se os logs exigem sanitização profunda: a implementação observada redige apenas chaves no primeiro nível do payload.
- Confirmar a versão final, a autoria e os agradecimentos do resumo expandido antes da banca: o arquivo recebido traz nomes diferentes dos quatro integrantes informados para esta apresentação.

## Divergências de fonte

- O documento acadêmico de 2025 e os READMEs listam integrantes diferentes; para esta apresentação, usar os quatro nomes fornecidos diretamente pelo usuário em 20/10/2026.
- O resumo expandido recebido em 20/10/2026 também traz autoria e agradecimentos divergentes; o slide usa somente seu conteúdo temático, sem reproduzir esses créditos.
- O README mobile descreve requisitos e diretrizes que não devem ser confundidos com funcionalidades comprovadas.
- O relatório de nuvem descreve PostgreSQL na Oracle; o código atual permite selecionar MongoDB.
- A POC de setembro planejou faixas de rede pública e storage diferentes das descritas na execução de outubro. Usar o relatório de execução para qualquer valor numérico apresentado como implementado.
- Um documento de riscos operacionais de maio de 2026 é anterior a componentes de auditoria hoje encontrados no código. Ele serve como contexto histórico, não como retrato automático do estado atual.
