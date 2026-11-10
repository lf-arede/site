// Renders the link-preview images (public/og.png and public/og-en.png).
// Run with `pnpm og` after changing the headline; the PNGs are committed.
import sharp from "sharp";

const variants = [
  { file: "public/og.png", lines: ["Descubra o que as suas", "vendas estão escondendo"], sub: "Análise de vendas, clientes e concorrência · diagnóstico em 7 dias" },
  { file: "public/og-en.png", lines: ["Find out what your", "sales are hiding"], sub: "Sales, customer and competitor analysis · 7-day diagnosis" },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

for (const v of variants) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f7f6f3"/>
  <circle cx="1080" cy="120" r="260" fill="none" stroke="#dddbd3" stroke-dasharray="3 10"/>
  <text x="80" y="110" font-family="Consolas, 'JetBrains Mono', monospace" font-size="30" fill="#16161a"><tspan fill="#2b4acb">~/</tspan>felipe-arede</text>
  <text font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="78" font-weight="600" fill="#16161a" letter-spacing="-2">
    <tspan x="80" y="300">${esc(v.lines[0])}</tspan>
    <tspan x="80" y="392">${esc(v.lines[1])}<tspan fill="#2b4acb">▍</tspan></tspan>
  </text>
  <text x="80" y="500" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="32" fill="#3d3d46">${esc(v.sub)}</text>
  <text x="80" y="560" font-family="Consolas, 'JetBrains Mono', monospace" font-size="24" fill="#5b5b66">arede.cloud</text>
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(v.file);
  console.log(`wrote ${v.file}`);
}
