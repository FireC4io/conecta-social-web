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

**Transição:** Mostrar como os riscos foram mapeados.

## 3. Mapa de riscos — 1:00

**Objetivo:** Explicar o método visual da matriz.

**Pontos essenciais:** Nove entradas na fonte; impacto × probabilidade documentados; severidade original; R01 é o maior escore.

**Fala sugerida:** “A matriz da API registra nove riscos. Cada ponto usa os valores de impacto e probabilidade do documento, e a cor reproduz a criticidade que ele atribui. Podemos selecionar um ponto para ver tratamento e evidência. Esses valores são da identificação original; não calculamos risco residual nem chamamos cada risco de vulnerabilidade comprovada.”

**Transição:** Selecionar R01 e avançar para as medidas aplicadas.

## 4. Tratamento dos riscos — 1:00

**Objetivo:** Distinguir o status da matriz da evidência no código.

**Pontos essenciais:** R01 sanitiza apenas o primeiro nível e envia log sem bloquear; R07/R08 geram embed local; R04 ainda consta aceito, embora o boot hoje tenha flags; quatro entradas em mitigação.

**Fala sugerida:** “Em R01 há uma proteção concreta: o interceptor substitui chaves como senha e token no primeiro nível do payload, e o envio externo não bloqueia a requisição. Em R07 e R08, o backend passou a validar URL e gerar o embed localmente. Há divergência em R04: a matriz o mantém como aceito, mas o entrypoint atual já condiciona migrations e seed. Os outros itens seguem com validação ou ação pendente.”

**Transição:** Explicar onde os componentes da aplicação se encontram.

## 5. Arquitetura do Conecta Social — 2:00

**Objetivo:** Explicar como os componentes do projeto se relacionam no deploy documentado.

**Pontos essenciais:** Web e mobile usam endpoint configurável. O relatório descreve VCN, Security List, VM Ubuntu e Docker Compose; no fluxo da API, Caddy recebe HTTPS, NestJS autentica com JWT e acessa PostgreSQL sem porta pública. A seta dos clientes é tracejada porque o endpoint Oracle não foi confirmado. S3 e Better Stack aparecem no código, mas sua ativação nesse deploy exige validação.

**Fala sugerida:** “Aqui está a arquitetura do Conecta Social, seguindo o caminho de uma requisição. A web e o aplicativo mobile se comunicam com a API por um endereço configurável. No deploy documentado na Oracle, o HTTPS chega ao Caddy, que encaminha a chamada para a API NestJS. A API aplica autenticação JWT e acessa o PostgreSQL pela rede interna do Docker; o banco não fica exposto publicamente. A VCN, a lista de segurança e a VM formam a camada de infraestrutura. O tracejado lembra que precisamos confirmar se os clientes da demonstração apontam para esta instância. Embaixo estão S3 e Better Stack: há integração no código, mas não confirmamos a ativação desses serviços nesse deploy. O relatório descreve uma implantação e testes em outubro; não é uma afirmação de disponibilidade neste instante.”

**Transição:** Passar da infraestrutura para a experiência nas duas plataformas.

## 6. Eventos: web e mobile — 1:10

**Objetivo:** Comparar a mesma área em dois dispositivos.

**Pontos essenciais:** Web em tabela com pesquisa e ações; mobile com aba Eventos e lista. Captura web histórica, mobile pendente.

**Fala sugerida:** “Na web, a captura histórica mostra uma tabela de eventos com pesquisa e ações por linha, adequada ao espaço do navegador. No mobile, o código traz Eventos como aba e uma tela própria de listagem. A captura mobile ainda será inserida, então hoje não vou atribuir detalhes visuais que não estejam documentados.”

**Transição:** Usar o dashboard para discutir densidade de informação.

## 7. Dashboard em duas telas — 1:10

**Objetivo:** Explicar a adaptação de indicadores.

**Pontos essenciais:** Web distribui gráficos em área grande; mobile tem Painel, seleção de período e rolagem. Números da captura histórica não são métricas atuais.

**Fala sugerida:** “O painel web aproveita a largura para distribuir gráficos. No mobile, o código organiza uma tela de Painel com seleção de período e componentes ajustados à largura disponível. O interesse aqui é a diferença de composição, não comparar os valores da imagem web antiga com dados atuais.”

**Transição:** Mostrar um fluxo de trabalho que ganha destaque no aplicativo.

## 8. Operação de doações no mobile — 1:10

**Objetivo:** Preparar a demonstração do fluxo operacional.

**Pontos essenciais:** Filtros por tamanho e gênero; ajuste de estoque; distribuição; logs da API. Não afirmar uso offline.

**Fala sugerida:** “O código mobile contém filtros de doações por tamanho e gênero, ajuste de estoque e distribuição a famílias. A aba de logs consulta registros de auditoria da API. Esse é um fluxo interessante para mostrar ao vivo. A documentação menciona sincronização offline como requisito, mas não a tratamos como entrega confirmada.”

**Transição:** Registrar o espaço reservado ao material acadêmico final.

## 9. Resumo expandido — 1:00

**Objetivo:** Sinalizar a peça acadêmica pendente sem criar conteúdo.

**Pontos essenciais:** Objetivo, metodologia, resultados e conclusões serão incluídos a partir do material final.

**Fala sugerida:** “Esta parte reserva o lugar do resumo expandido. Vamos inserir objetivo, metodologia, resultados e conclusões a partir do texto acadêmico final, preservando a mesma identidade visual. Deixamos os campos explícitos para não substituir evidência por texto genérico.”

**Transição:** Abrir o aplicativo real.

## 10. Demonstração ao vivo — 5:00

**Objetivo:** Deixar uma transição clara e uma tela estável durante o preparo.

**Roteiro sugerido:** Abrir o app mobile; mostrar a navegação por abas; consultar eventos; abrir Painel; filtrar doações; apresentar um detalhe e, se o ambiente permitir, executar uma operação segura de estoque ou distribuição; consultar logs. Ajustar a sequência às contas e aos dados disponíveis. Evitar exibir senhas, tokens ou dados pessoais na projeção.

**Fechamento oral:** “Esse percurso mostra como a proposta de gestão aparece na operação do aplicativo.”
