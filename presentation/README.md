# Apresentação — Conecta Social

Aplicação web local, independente da API e dos aplicativos do projeto. São 10 slides: 10 minutos de fala e 5 minutos reservados à demonstração mobile.

## Executar

Requer Node.js 18+ e npm.

```bash
cd presentation
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite. Para testar a versão de produção:

```bash
npm run build
npm run preview
```

`npm run typecheck` executa somente a verificação TypeScript. Tudo que os slides exibem é local; nenhum backend é necessário.

## Apresentar

Use **←/↑/PageUp** e **→/↓/PageDown** para navegar. Espaço também avança. **F** alterna tela cheia, **O** abre a visão geral e **Esc** fecha sobreposições. Os controles no rodapé fazem as mesmas ações. Clique no ícone de ampliação de uma captura para vê-la em tela cheia.

Abra em janela horizontal, de preferência em 16:9. O canvas é redimensionado sem distorção para caber na tela. O fragmento da URL identifica o slide atual, permitindo abrir um slide diretamente. A preferência do sistema por movimento reduzido é respeitada.

## Editar

- Ordem, título e duração: `src/data/content.ts`, lista `slides`.
- Integrantes no slide de abertura: `teamMembers` em `src/data/content.ts`.
- Textos e composição: `src/main.tsx`.
- Riscos: `src/data/content.ts`, lista `risks`. Mantenha os valores e classificações da fonte ao atualizar.
- Resumo expandido: `abstractContent` em `src/data/content.ts`; os campos vazios exibem “Conteúdo pendente”.
- Capturas: substitua os arquivos em `public/screenshots/` ou altere o manifesto `screenshots` em `src/data/content.ts`. Os caminhos são relativos à raiz `public`. Se o arquivo estiver ausente, aparece um placeholder com plataforma, tela e caminho esperado.
- Arquitetura: o fluxograma SVG editável está em `src/components/Architecture.tsx`; cores e medidas estão nas classes `.flow-*` de `src/style.css`. Para usar uma imagem no lugar, coloque-a em `public/images/` e ajuste `architecture.replacementImage` em `src/data/content.ts`. Deixe o valor vazio para exibir o fluxograma. Veja [ARCHITECTURE.md](ARCHITECTURE.md).
- Paleta e layout: `src/style.css`.

As capturas web incluídas são históricas; os números nelas não representam dados atuais. As capturas mobile devem ser feitas com o aplicativo real. Consulte [pendências](CONTENT_TODO.md), [fontes](SOURCES.md), [arquitetura](ARCHITECTURE.md) e [notas](notes.md).
