export type Lang = "pt" | "en";

const phone = "5521969342597";

export const contact = {
  email: "lf.arede@gmail.com",
  linkedin: "https://www.linkedin.com/in/lf-arede/",
  github: "https://github.com/lf-arede",
  whatsapp: (text: string) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
};

/**
 * Assets that do not exist yet. Each one is null until there is a real file;
 * the page shows a placeholder only in `pnpm dev` and hides the slot in production.
 */
export const assets = {
  photo: null as string | null, // e.g. "/felipe.jpg"
  sampleReport: null as string | null, // e.g. "/diagnostico-exemplo.png"
};

type Item = { title: string; text: string; tag?: string };
type Faq = { q: string; a: string };

type Copy = {
  meta: { title: string; description: string };
  nav: { how: string; cases: string; faq: string; language: string; main: string };
  cta: { label: string; message: string; mobile: string };
  hero: { eyebrow: string; title: string; titleAccent: string; lead: string; secondary: string };
  term: { cmd: string; rows: [string, string][] };
  segments: {
    title: string;
    have: string;
    find: string;
    go: string;
    items: { id: string; title: string; data: string; result: string; message: string }[];
  };
  /** A real store case, anonymized. Leave undefined until the client agrees to it. */
  storeCase?: { label: string; title: string; text: string };
  offer: {
    kicker: string;
    title: string;
    lead: string;
    sendTitle: string;
    send: string;
    getTitle: string;
    get: Item[];
    facts: [string, string][];
    proof: string;
    samplePending: string;
  };
  steps: { title: string; items: Item[] };
  about: { title: string; text: string; photoPending: string; numbers: { value: string; text: string }[] };
  cases: { title: string; lead: string; items: Item[]; more: string };
  services: { title: string; items: Item[] };
  faq: { title: string; items: Faq[] };
  final: { title: string; text: string; alt: string };
  footer: { place: string; lab: string };
  notFound: { metaTitle: string; title: string; text: string; back: string };
  lab: {
    metaTitle: string;
    title: string;
    lead: string;
    back: string;
    items: Item[];
  };
};

export const copy: Record<Lang, Copy> = {
  pt: {
    meta: {
      title: "Diagnóstico de vendas em 7 dias · Felipe Arede",
      description:
        "Análise de vendas, clientes e concorrência para quem não tem área de dados. Diagnóstico em 7 dias, com 5 ações priorizadas, feito com as suas notas fiscais.",
    },
    nav: { how: "Como funciona", cases: "Cases", faq: "Dúvidas", language: "Idioma", main: "Principal" },
    cta: {
      label: "Quero o diagnóstico",
      message: "Olá, Felipe! Quero o diagnóstico de vendas.",
      mobile: "Quero o diagnóstico de vendas",
    },
    hero: {
      eyebrow: "Inteligência de mercado sob demanda",
      title: "Descubra o que as suas vendas estão ",
      titleAccent: "escondendo",
      lead: "Análise de vendas, clientes e concorrência para quem não tem uma área de dados.",
      secondary: "Como funciona",
    },
    term: {
      cmd: "diagnostico --7d",
      rows: [
        ["cesta", "o que sai junto ✓"],
        ["cross", "o que oferecer a quem ✓"],
        ["rfv", "quem compra, quem sumiu ✓"],
        ["acoes", "5 priorizadas ✓"],
      ],
    },
    segments: {
      title: "Qual é o seu caso?",
      have: "Você tem:",
      find: "Descobre:",
      go: "Falar sobre isso",
      items: [
        {
          id: "varejo",
          title: "Varejo e redes de lojas",
          data: "notas fiscais e ERP.",
          result: "cesta de compras, cross-selling e clientes que sumiram.",
          message: "Olá, Felipe! Tenho uma loja (ou rede) e quero o diagnóstico de vendas.",
        },
        {
          id: "provedor",
          title: "Provedores de internet",
          data: "base de assinantes.",
          result: "churn, regiões com potencial e upgrade de plano.",
          message: "Olá, Felipe! Tenho um provedor de internet e quero entender a minha base de assinantes.",
        },
        {
          id: "comercial",
          title: "Times comerciais e de marketing",
          data: "CRM e campanhas.",
          result: "o que vendeu, quem comprou e onde investir.",
          message: "Olá, Felipe! Quero analisar os dados de CRM e campanhas do meu time.",
        },
      ],
    },
    offer: {
      kicker: "A oferta",
      title: "Diagnóstico de vendas em 7 dias",
      lead: "Você manda os dados que já tem. Eu devolvo o que eles dizem sobre os seus clientes e o que fazer com isso.",
      sendTitle: "Você envia",
      send: "Os XMLs das notas fiscais (NF-e ou NFC-e) ou o relatório de vendas do seu ERP. Planilha também serve.",
      getTitle: "Você recebe",
      get: [
        { title: "Cesta de compras", text: "Quais produtos saem juntos e quais combos fazem sentido." },
        { title: "Cross-selling", text: "O que oferecer para cada tipo de cliente no balcão e no pós-venda." },
        { title: "RFV", text: "Quem compra muito, quem está esfriando e quem sumiu, para agir em cada grupo." },
        { title: "5 ações priorizadas", text: "O que fazer primeiro, com o tamanho da oportunidade de cada uma." },
      ],
      facts: [
        ["Prazo", "7 dias depois de receber os dados"],
        ["Formato", "Relatório e uma conversa para explicar"],
        ["Preço", "Sob consulta, fechado antes de começar"],
      ],
      proof: "Uso um importador próprio que transforma os XMLs das notas numa base por loja. Por isso, nota fiscal bagunçada não é problema.",
      samplePending: "[RELATÓRIO DE EXEMPLO ANONIMIZADO]",
    },
    steps: {
      title: "Como funciona",
      items: [
        { title: "Conversa de 20 minutos", text: "Você conta o que quer entender das suas vendas. A conversa é grátis e termina com um orçamento fechado." },
        { title: "Você envia os dados", text: "XMLs, exportação do ERP ou planilhas, do jeito que estiverem. Eu organizo." },
        { title: "Recebe o relatório", text: "Em até 7 dias, com as análises e as 5 ações. A gente revisa tudo juntos." },
      ],
    },
    about: {
      title: "Quem faz",
      text: "Sou Felipe Arede. Passei 8 anos em inteligência de mercado e estratégia na TIM e na Vivo, cuidando de vendas de centenas de lojas e de uma base de dezenas de milhões de clientes. Hoje levo o mesmo método para empresas que não têm uma área de dados.",
      photoPending: "[SUA FOTO]",
      numbers: [
        { value: "8+", text: "anos em analytics e estratégia" },
        { value: "~200 h", text: "de trabalho manual eliminadas por semana" },
        { value: "−60%", text: "no tempo de entrega de análises" },
      ],
    },
    cases: {
      title: "Cases",
      lead: "Resultados de quando eu estava na Vivo e na TIM.",
      items: [
        {
          title: "Apuração de 200 lojas, 8 vezes por dia",
          tag: "Vivo",
          text: "Automatizei a apuração de resultados de cerca de 200 lojas e revendas com Power BI, Power Apps e SharePoint. Saiu de uma atualização por dia para 8, e ~200 horas semanais de trabalho manual deixaram de existir.",
        },
        {
          title: "Estoque sem ruptura",
          tag: "Vivo",
          text: "Monitorei mais de 250 SKUs direto do ERP. Giro, risco de ruptura e necessidade de compra passaram a orientar a redistribuição de aparelhos entre as lojas.",
        },
        {
          title: "Oferta certa para cada região",
          tag: "TIM",
          text: "Agrupei os 67 DDDs do Brasil por market share, potencial, renda, concorrência e qualidade de rede. O modelo foi implantado no país inteiro para decidir qual oferta vai para cada região e canal.",
        },
      ],
      more: "Ver mais 4 cases",
    },
    services: {
      title: "Além do diagnóstico",
      items: [
        { title: "Monitor de concorrência", tag: "TIM", text: "Um scraper em Python captura sob demanda preços, franquias, benefícios e promoções de Vivo e Claro, no lugar do levantamento manual." },
        { title: "Piloto FWA", tag: "TIM", text: "Usei o consumo nas torres 5G para achar as regiões com mais potencial. O MVP lançado no Rio vendeu 100% dos CPEs do teste." },
        { title: "Estratégia Triplo A", tag: "TIM", text: "Ratings de Rede, Comercial e Mídia, com análise incremental e grupos de controle, para priorizar dezenas de milhões de reais em investimentos." },
        { title: "Apresentações com IA", tag: "TIM", text: "Python e SQL alimentam um JSON único, e a IA monta o dashboard e a apresentação. Uma análise de cerca de dois dias passou a sair em meio dia." },
      ],
    },
    faq: {
      title: "Dúvidas",
      items: [
        {
          q: "Meus dados estão bagunçados. Serve?",
          a: "Serve. Quase todo mundo tem dados espalhados entre notas, ERP e planilhas, e organizar isso faz parte do trabalho. Se faltar algo importante, eu aviso na conversa inicial, antes de você pagar.",
        },
        {
          q: "Meu negócio não é varejo. Serve?",
          a: "Serve. Se você tem vendas, clientes ou concorrentes registrados em algum lugar, dá para analisar. Na conversa de 20 minutos a gente vê qual análise faz sentido para o seu caso.",
        },
        {
          q: "E a LGPD?",
          a: "Uso só o necessário para a análise e trabalho com identificadores de cliente anonimizados. Assino um acordo de confidencialidade se você quiser e apago os arquivos no fim do projeto.",
        },
        {
          q: "Quanto custa?",
          a: "Depende do volume de dados e de quantas lojas entram. A conversa de 20 minutos é grátis e termina com um orçamento fechado, sem surpresa depois.",
        },
        {
          q: "Quanto tempo leva?",
          a: "7 dias a partir do momento em que eu recebo os dados. Se a sua base for muito grande, combinamos o prazo antes de começar.",
        },
        {
          q: "Preciso ter um sistema específico?",
          a: "Não. Os XMLs das notas fiscais saem de qualquer emissor, e a maioria dos ERPs exporta relatório de vendas em planilha.",
        },
      ],
    },
    final: {
      title: "Vamos olhar as suas vendas?",
      text: "Me chama no WhatsApp e marcamos a conversa de 20 minutos.",
      alt: "Prefere e-mail?",
    },
    footer: { place: "Rio de Janeiro", lab: "Projetos pessoais" },
    notFound: {
      metaTitle: "Página não encontrada · Felipe Arede",
      title: "Essa página não existe",
      text: "O endereço pode ter mudado ou estar com erro de digitação.",
      back: "Voltar para o início",
    },
    lab: {
      metaTitle: "Projetos pessoais · Felipe Arede",
      title: "Projetos pessoais",
      lead: "O que eu construo fora do trabalho com clientes. Tudo roda na minha própria infraestrutura.",
      back: "Voltar para o início",
      items: [
        { title: "Importador de NF-e por loja", tag: "varejo", text: "XMLs de notas fiscais viram uma base por loja, pronta para exportar para Excel. É a base técnica do diagnóstico de vendas." },
        { title: "Painel financeiro pessoal", tag: "finanças", text: "Fluxo de caixa, patrimônio, metas e projeção de parcelamentos num painel só." },
        { title: "Gerador paramétrico 3D", tag: "3d", text: "Ajuste as medidas, veja o modelo em 3D e exporte para impressão." },
        { title: "Infra própria", tag: "infra", text: "VPS com Coolify, Traefik e Tailscale, apps privados e backup criptografado." },
      ],
    },
  },

  en: {
    meta: {
      title: "7-day sales diagnosis · Felipe Arede",
      description:
        "Sales, customer and competitor analysis for companies without a data team. A 7-day diagnosis with 5 prioritized actions, built from your invoices.",
    },
    nav: { how: "How it works", cases: "Cases", faq: "FAQ", language: "Language", main: "Main" },
    cta: {
      label: "Get the diagnosis",
      message: "Hi Felipe! I'd like the sales diagnosis.",
      mobile: "Get the sales diagnosis",
    },
    hero: {
      eyebrow: "Market intelligence on demand",
      title: "Find out what your sales are ",
      titleAccent: "hiding",
      lead: "Sales, customer and competitor analysis for companies without a data team.",
      secondary: "How it works",
    },
    term: {
      cmd: "diagnosis --7d",
      rows: [
        ["basket", "what sells together ✓"],
        ["cross", "what to offer whom ✓"],
        ["rfm", "who buys, who left ✓"],
        ["actions", "5 prioritized ✓"],
      ],
    },
    segments: {
      title: "Which one is you?",
      have: "You have:",
      find: "You find:",
      go: "Talk about this",
      items: [
        {
          id: "varejo",
          title: "Retail and store chains",
          data: "invoices and ERP data.",
          result: "market basket, cross-selling and customers who left.",
          message: "Hi Felipe! I run a store (or chain) and I'd like the sales diagnosis.",
        },
        {
          id: "provedor",
          title: "Internet providers",
          data: "a subscriber base.",
          result: "churn, high-potential regions and plan upgrades.",
          message: "Hi Felipe! I run an internet provider and want to understand my subscriber base.",
        },
        {
          id: "comercial",
          title: "Sales and marketing teams",
          data: "CRM and campaign data.",
          result: "what sold, who bought and where to invest.",
          message: "Hi Felipe! I'd like to analyze my team's CRM and campaign data.",
        },
      ],
    },
    offer: {
      kicker: "The offer",
      title: "7-day sales diagnosis",
      lead: "You send the data you already have. I give back what it says about your customers and what to do about it.",
      sendTitle: "You send",
      send: "Your invoice XMLs (Brazilian NF-e or NFC-e) or the sales report from your ERP. A spreadsheet works too.",
      getTitle: "You get",
      get: [
        { title: "Market basket", text: "Which products sell together and which bundles make sense." },
        { title: "Cross-selling", text: "What to offer each kind of customer at the counter and after the sale." },
        { title: "RFM", text: "Who buys a lot, who is cooling off and who is gone, so you can act on each group." },
        { title: "5 prioritized actions", text: "What to do first, with the size of each opportunity." },
      ],
      facts: [
        ["Timeline", "7 days after I get the data"],
        ["Format", "A report plus a call to walk you through it"],
        ["Price", "On request, fixed before we start"],
      ],
      proof: "I use my own importer that turns invoice XMLs into a per-store database, so messy invoices are not a problem.",
      samplePending: "[ANONYMIZED SAMPLE REPORT]",
    },
    steps: {
      title: "How it works",
      items: [
        { title: "A 20-minute call", text: "You tell me what you want to understand about your sales. The call is free and ends with a fixed quote." },
        { title: "You send the data", text: "XMLs, ERP exports or spreadsheets, however they are. I'll sort them out." },
        { title: "You get the report", text: "Within 7 days, with the analysis and the 5 actions. We go through it together." },
      ],
    },
    about: {
      title: "Who does it",
      text: "I'm Felipe Arede. I spent 8 years in market intelligence and strategy at TIM and Vivo, two of Brazil's largest telcos, working on sales for hundreds of stores and a base of tens of millions of customers. Now I bring the same method to companies without a data team.",
      photoPending: "[YOUR PHOTO]",
      numbers: [
        { value: "8+", text: "years in analytics and strategy" },
        { value: "~200 h", text: "of manual work removed every week" },
        { value: "−60%", text: "in analysis turnaround time" },
      ],
    },
    cases: {
      title: "Cases",
      lead: "Results from my time at Vivo and TIM.",
      items: [
        {
          title: "Reporting for 200 stores, 8 times a day",
          tag: "Vivo",
          text: "I automated results reporting for about 200 stores and resellers with Power BI, Power Apps and SharePoint. It went from one update a day to 8, and ~200 hours of manual work per week went away.",
        },
        {
          title: "Stock without stockouts",
          tag: "Vivo",
          text: "I tracked 250+ SKUs straight from the ERP. Turnover, stockout risk and purchase needs started guiding how devices moved between stores.",
        },
        {
          title: "The right offer for each region",
          tag: "TIM",
          text: "I grouped Brazil's 67 area codes by market share, potential, income, competition and network quality. The model was rolled out nationally to decide which offer goes to each region and channel.",
        },
      ],
      more: "See 4 more cases",
    },
    services: {
      title: "Beyond the diagnosis",
      items: [
        { title: "Competitor monitor", tag: "TIM", text: "A Python scraper collects Vivo and Claro prices, data allowances, perks and promotions on demand, replacing manual surveys." },
        { title: "FWA pilot", tag: "TIM", text: "I used 5G tower usage to find the regions with the most potential. The MVP launched in Rio sold 100% of the test CPEs." },
        { title: "Triple A strategy", tag: "TIM", text: "Network, Sales and Media ratings, with incremental analysis and control groups, to prioritize tens of millions of reais in investments." },
        { title: "AI-built presentations", tag: "TIM", text: "Python and SQL feed a single JSON source, and AI builds the dashboard and the presentation. An analysis that took about two days now takes half a day." },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "My data is a mess. Will it work?",
          a: "Yes. Almost everyone has data spread across invoices, ERP and spreadsheets, and sorting it out is part of the job. If something important is missing, I'll tell you on the first call, before you pay.",
        },
        {
          q: "My business isn't retail. Will it work?",
          a: "Yes. If you have sales, customers or competitors recorded somewhere, it can be analyzed. On the 20-minute call we figure out which analysis fits your case.",
        },
        {
          q: "What about privacy (LGPD)?",
          a: "I only use what the analysis needs and work with anonymized customer identifiers. I'll sign an NDA if you want and delete the files when the project ends.",
        },
        {
          q: "How much does it cost?",
          a: "It depends on the data volume and how many stores are included. The 20-minute call is free and ends with a fixed quote, with no surprises later.",
        },
        {
          q: "How long does it take?",
          a: "7 days from when I get the data. If your base is very large, we agree on the timeline before starting.",
        },
        {
          q: "Do I need a specific system?",
          a: "No. Invoice XMLs come out of any issuing system, and most ERPs export sales reports as spreadsheets.",
        },
      ],
    },
    final: {
      title: "Shall we look at your sales?",
      text: "Message me on WhatsApp and we'll book the 20-minute call.",
      alt: "Prefer email?",
    },
    footer: { place: "Rio de Janeiro, Brazil", lab: "Side projects" },
    notFound: {
      metaTitle: "Page not found · Felipe Arede",
      title: "This page does not exist",
      text: "The address may have changed or have a typo.",
      back: "Back to the home page",
    },
    lab: {
      metaTitle: "Side projects · Felipe Arede",
      title: "Side projects",
      lead: "What I build outside client work. Everything runs on my own infrastructure.",
      back: "Back to home",
      items: [
        { title: "Per-store invoice importer", tag: "retail", text: "Brazilian e-invoice XMLs become a per-store database, ready to export to Excel. It is the technical base of the sales diagnosis." },
        { title: "Personal finance cockpit", tag: "finance", text: "Cash flow, net worth, goals and installment projections in one dashboard." },
        { title: "Parametric 3D generator", tag: "3d", text: "Set the measurements, see the model in 3D and export it for printing." },
        { title: "Self-hosted infra", tag: "infra", text: "A VPS with Coolify, Traefik and Tailscale, private apps and encrypted backups." },
      ],
    },
  },
};
