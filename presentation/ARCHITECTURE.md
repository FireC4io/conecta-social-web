# Arquitetura do Conecta Social

## Escopo do slide

O slide 5 explica o caminho da aplicação no **deploy da API documentado em 06/10/2026**. A POC CloudStack foi parte do trabalho acadêmico de infraestrutura e permanece nas fontes, mas seus nós e testes não aparecem na apresentação principal. O laboratório e o deploy Oracle são ambientes distintos.

## Componentes e evidência

| Componente | Papel no fluxograma | Evidência |
|---|---|---|
| Web (Next.js) e mobile (React Native/Expo) | Clientes com endpoint configurável | Código e manifestos das aplicações |
| Oracle VCN, Security List e VM Ubuntu | Ambiente do deploy documentado | Relatório de nuvem de 06/10/2026 |
| Docker Compose | Organização dos serviços na VM | Relatório de nuvem |
| Caddy | Entrada HTTPS e proxy reverso | Relatório de nuvem |
| NestJS + JWT | API e autenticação | Código da API e relatório |
| PostgreSQL 15 | Banco em rede Docker interna, sem porta pública | Relatório de nuvem |
| S3 | Imagens e URLs assinadas | Código da API; ativação nesse deploy a confirmar |
| Better Stack | Destino opcional de logs | Código da API; ativação nesse deploy a confirmar |

MongoDB permanece alternativa selecionável no código, mas não é o banco descrito no deploy Oracle. O endpoint efetivo dos clientes também precisa ser confirmado antes de afirmar que a demonstração usa essa instância.

## Relações e leitura visual

1. A seta **tracejada** de web/mobile para Caddy representa uma ligação configurável cujo destino Oracle ainda exige validação.
2. No deploy documentado, Caddy recebe HTTPS e encaminha chamadas à API NestJS.
3. A API aplica autenticação JWT e consulta PostgreSQL pela rede interna Docker. O banco não expõe porta pública.
4. S3 e Better Stack são exibidos em uma faixa própria, com bordas tracejadas e sem ligação de rede afirmada no deploy. A implementação contém integrações para esses serviços, mas sua ativação nesse ambiente não foi confirmada.

O fluxograma é SVG editável em `src/components/Architecture.tsx`; estilos estão nas classes `.flow-*` de `src/style.css`. Para substituí-lo por uma imagem local, coloque-a em `public/images/` e configure `architecture.replacementImage` em `src/data/content.ts`. O valor vazio mantém o SVG.

## POC como referência técnica

A POC original está em `references/POC-Apache-CloudStack-2026.pdf`. Ela especifica um laboratório CloudStack com `cs-mgmt` e `cs-kvm01`; o relatório de outubro registra sua execução e testes. Essa documentação sustenta o histórico do trabalho de nuvem, mas não deve ser apresentada como se o Conecta Social estivesse hospedado no laboratório. A imagem isométrica anterior permanece em `public/images/arquitetura-poc-oracle.png` como referência não utilizada.

## Prompt para futura imagem do fluxograma

> Crie uma imagem de arquitetura em formato horizontal 16:9 para uma apresentação de engenharia de software, com fundo azul-marinho e fluxograma de alto contraste. O foco é o Conecta Social. Mostre, da esquerda para a direita: aplicações web Next.js e mobile Expo; seta tracejada rotulada “endpoint Oracle a confirmar”; ambiente Oracle Cloud com VCN e Security List; VM Ubuntu com Docker Compose; Caddy recebendo HTTPS e atuando como proxy reverso; API NestJS com autenticação JWT; PostgreSQL 15 na rede Docker interna, sem porta pública. Mostre a relação Caddy → NestJS → PostgreSQL com setas sólidas. Em uma faixa separada, represente S3 para imagens e Better Stack para logs como “integrações no código — ativação no deploy a confirmar”, sem desenhar tráfego ativo não documentado. Não inclua CloudStack, nós de laboratório, endereços IP, números de desempenho, provedores extras ou funcionalidades presumidas. Tipografia grande e legível para projeção, caixas alinhadas e conexões sem cruzamentos.

Compare qualquer substituição visual com o relatório e o código antes de usar na banca.
