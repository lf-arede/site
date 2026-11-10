# site

Site pessoal em [arede.cloud](https://arede.cloud). Astro estático, em PT (`/`) e EN (`/en/`).

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm check    # tipos e build
```

- Todo o texto, nos dois idiomas, está em `src/content.ts`.
- A página é `src/components/Home.astro`, e `src/pages/` só escolhe o idioma.
- Estilos e animações ficam em `src/styles/global.css`. As animações desligam com `prefers-reduced-motion`.
