# Casa da Mãe Joana — App React

Projeto React + Vite com o site e a app de encomenda de bolo.

## Como correr

```bash
npm install
npm run dev
```

Abre automaticamente em http://localhost:5173

## Estrutura

- `src/main.jsx` — entry point, alterna entre site e app
- `src/desktop-landing.jsx` — landing page completa
- `src/cake-app.jsx` — fluxo de encomenda de bolo (5 passos)
- `src/ios-frame.jsx` — moldura de iPhone
- `src/brand.jsx` — logo, ícones, ornamentos da marca
- `src/artboards-static.jsx` — cartões, etiquetas, posts (não usado no main, disponível)
- `src/styles.css` — variáveis CSS da marca

## Build para produção

```bash
npm run build
```

Gera pasta `dist/` com ficheiros estáticos prontos para alojar.
