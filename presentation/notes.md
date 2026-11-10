# Notas do apresentador

O roteiro de fala soma **10 minutos** antes de uma demonstração de **5 minutos**. As notas não aparecem na interface projetada. Adapte o ritmo à banca e evite ler os textos da tela.

## 1. Conecta Social — 0:30

**Objetivo:** Identificar o produto e o contexto acadêmico.

**Pontos essenciais:** Projeto Integrador da Fatec Votorantim, curso de Desenvolvimento de Software Multiplataforma. Integrantes: Guilherme Pazetti de Oliveira, Caio Cesar Martins de Lima, Maicon Rodrigues dos Santos e Nicolas Katsuji Nagano.

**Fala sugerida:** “Este é o Conecta Social, nosso projeto para apoiar a gestão de iniciativas sociais. Vou mostrar o propósito, o trabalho de segurança, a infraestrutura e como a experiência foi levada para o mobile. No fim, abrimos o aplicativo real.”

**Transição:** Começar pelo problema que a plataforma procura resolver.

## 2. Gestão para iniciativas sociais — 1:00

**Objetivo:** Fazer o pitch sem enumerar telas.

**Pontos essenciais:** Organizações pequenas; doações, eventos e famílias; gestão web e operação mobile.

**Fala sugerida:** “Projetos sociais de pequeno porte precisam organizar recursos e atividades com equipes enxutas. O Conecta Social reúne esses dados e oferece uma área web de gestão. O aplicativo mobile leva consulta e operações para uma interface própria de uso em campo. O ganho esperado é clareza na rotina; não estamos apresentando um indicador de impacto medido.”

**Transição:** Apresentar a evolução da plataforma até o aplicativo mobile.

## 3. Evolução do projeto — 0:30

**Objetivo:** Situar a entrega mobile na trajetória do projeto.

**Pontos essenciais:** API e gestão web formavam a base anterior; o aplicativo mobile foi construído neste semestre.

**Fala sugerida:** “O Conecta Social já contava com uma API para as regras e os dados e com uma aplicação web para gestão. Neste semestre, construímos o aplicativo mobile, ampliando o acesso à plataforma e trazendo operações para o uso em campo.”

**Transição:** Apresentar os riscos identificados na plataforma.

## 4. Mapa de riscos — 1:00

**Objetivo:** Apresentar a matriz e destacar dois riscos mitigados.

**Pontos essenciais:** R01: impacto 8, probabilidade 7, pontuação 56, alto. R07: impacto 6, probabilidade 3, pontuação 18, médio.

**Fala sugerida:** “Mapeamos nove riscos e vamos destacar dois que já tiveram tratamento. O R01 trata da possível exposição de dados sensíveis nos logs. O R07 trata da validação de links externos do Instagram usados nas publicações.”

**Ação no slide:** Selecionar R01 e depois R07.

**Transição:** Mostrar as medidas aplicadas aos dois riscos.

## 5. Riscos mitigados: R01 e R07 — 1:00

**Objetivo:** Explicar dois tratamentos registrados e observados no código.

**Pontos essenciais:** No R01, o interceptor oculta chaves sensíveis no primeiro nível do payload e o envio dos logs é assíncrono. No R07, a API valida o link do Instagram e gera o embed localmente.

**Fala sugerida:** “No R01, o interceptor oculta campos sensíveis, como senha e token, no primeiro nível dos dados registrados. O envio dos logs também é assíncrono. No R07, a API valida o endereço do Instagram e gera localmente o conteúdo incorporado. Os dois tratamentos estão registrados como mitigados na matriz.”

**Transição:** Explicar onde os componentes da aplicação se encontram.

## 6. Arquitetura do Conecta Social — 1:30

**Objetivo:** Explicar como os componentes do projeto se relacionam no deploy documentado.

**Pontos essenciais:** Web e mobile usam endpoint configurável. O relatório descreve VCN, Security List, VM Ubuntu e Docker Compose; no fluxo da API, Caddy recebe HTTPS, NestJS autentica com JWT e acessa PostgreSQL sem porta pública. S3 e Better Stack são integrações presentes no código da API.

**Fala sugerida:** “O fluxograma acompanha uma chamada do usuário. A web, feita em Next.js, e o aplicativo mobile, em Expo, acessam a API por um endereço configurável. Na arquitetura descrita no relatório, a entrada HTTPS chega ao Caddy. Ele encaminha a requisição para a API NestJS, que aplica a autenticação por JWT e consulta o PostgreSQL. O banco fica na rede interna do Docker, sem porta pública. Por trás desse fluxo estão a VCN, a Security List e uma máquina virtual Ubuntu na Oracle Cloud. O Docker Compose organiza os contêineres da aplicação. A API também contém integração com S3 para imagens e Better Stack para logs. Assim, separamos a interface usada pela equipe, a lógica de negócio e a persistência, com controle de acesso na entrada e na API.”

**Transição:** Passar da infraestrutura para a experiência nas duas plataformas.

## 7. Eventos: web e mobile — 1:10

**Objetivo:** Comparar a mesma área em dois dispositivos.

**Pontos essenciais:** A captura web histórica mostra a gestão em tabela. A captura do simulador mostra a aba Eventos com publicações ilustradas e acesso ao Instagram. Os exemplos nas imagens não devem ser tratados como resultados do projeto.

**Fala sugerida:** “Aqui podemos comparar duas formas de ver eventos. A web mostra a visão de gestão: tabela, pesquisa e ações por linha. No aplicativo, a aba Eventos apresenta publicações com imagem e um acesso ao Instagram. A diferença não é apenas o tamanho da tela; muda também a forma de navegar e de consumir a informação. As imagens servem para mostrar a interface, não para medir atividade atual.”

**Transição:** Usar o dashboard para discutir densidade de informação.

## 8. Dashboard em duas telas — 1:10

**Objetivo:** Explicar a adaptação de indicadores.

**Pontos essenciais:** A web distribui gráficos em área grande. A captura mobile mostra indicadores em cards, gráfico, escolha de período e rolagem. Os números exibidos não são métricas do projeto.

**Fala sugerida:** “O painel web aproveita o espaço horizontal para distribuir gráficos. No mobile, o Painel começa por indicadores em cards e segue com o gráfico e a seleção do período. A rolagem organiza a leitura em uma coluna mais estreita. O que queremos comparar é a composição da informação nas duas telas; os números vistos nas capturas são apenas dados do ambiente usado.”

**Transição:** Mostrar um fluxo de trabalho que ganha destaque no aplicativo.

## 9. Operação de doações no mobile — 1:10

**Objetivo:** Preparar a demonstração do fluxo operacional.

**Pontos essenciais:** As capturas mostram a lista de doações com filtros por tamanho e gênero e o formulário de ajuste de estoque, incluindo quantidade, motivo e observação. Distribuição e logs podem ser mostrados na demonstração, sem simular telas nos slides.

**Fala sugerida:** “Essas duas telas mostram um percurso operacional. Primeiro, a lista permite filtrar as doações por tamanho e gênero e consultar os itens disponíveis. Depois, no detalhe, o ajuste de estoque registra uma quantidade, um motivo e uma observação. Isso permite representar perda, vencimento ou correção de inventário sem trocar manualmente um número no cadastro. Na demonstração, podemos percorrer esse fluxo no aplicativo e depois abrir os logs de auditoria.”

**Transição:** Registrar o espaço reservado ao material acadêmico final.

## 10. Resumo expandido — 1:00

**Objetivo:** Apresentar a síntese do resumo expandido sem reproduzir seus parágrafos na tela.

**Pontos essenciais:** O texto define a centralização da gestão de organizações sociais como objetivo; descreve desenvolvimento incremental em sprints; relata três aplicações integradas e destaca rastreabilidade e prestação de contas. Registra sincronização offline completa e limite de tentativas no login como pendências.

**Fala sugerida:** “No resumo expandido, organizamos o projeto em quatro partes. O objetivo é reunir doações, famílias, voluntários e eventos num mesmo sistema. A construção foi incremental, em sprints, com aplicações web, API e mobile. O texto apresenta como resultados a área pública, a gestão administrativa, os indicadores e a auditoria. A conclusão é que essa centralização melhora a rastreabilidade e pode apoiar a prestação de contas. Também registramos duas próximas etapas: completar o uso offline e limitar as tentativas de login.”

**Transição:** Abrir o aplicativo real.

## 11. Demonstração ao vivo — 5:00

**Objetivo:** Deixar uma transição clara e uma tela estável durante o preparo.

**Roteiro sugerido:** Abrir o app mobile; mostrar a navegação por abas; consultar eventos; abrir Painel; filtrar doações; apresentar um detalhe e, se o ambiente permitir, executar uma operação segura de estoque ou distribuição; consultar logs. Ajustar a sequência às contas e aos dados disponíveis. Evitar exibir senhas, tokens ou dados pessoais na projeção.

**Fechamento oral:** “Esse percurso mostra como a proposta de gestão aparece na operação do aplicativo.”
