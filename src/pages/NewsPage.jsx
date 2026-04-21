import { useState } from "react";

const heroNews = {
  tag: "ALERTA",
  title: "Previsões aumentam o risco de chuvas fortes em 70% em Caraguatatuba",
  image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=900&q=80",
};

const articles = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=300&q=80",
    text: "As chuvas intensas que atingem o Estado de São Paulo desde sábado (7) provocaram alagamentos, deslizamentos de terra e transtornos no trânsito em diferentes regiões, com destaque para o litoral norte. Em São Sebastião, o temporal prejudicou a mobilidade na Rodovia Rio-Santos (BR-101), especialmente na região de Juquehy, onde houve queda de barreira.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&q=80",
    text: "A chuva forte que atingiu o Litoral Norte de São Paulo na noite deste sábado (11) provocou alagamentos e mobilizou equipes de emergência em Caraguatatuba e Ubatuba. Dois jovens chegaram a ficar ilhados em uma cachoeira após uma cabeça d'água.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&q=80",
    text: "A cidade de Ubatuba, no litoral norte de São Paulo, enfrenta os impactos de forte temporal nesta quinta-feira (8). Segundo a Defesa Civil, o município registrou cerca de 201 milímetros de chuva nas últimas 12 horas, volume elevado que levou à emissão de alerta extremo para risco de alagamentos e deslizamentos de terra.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1527482937786-6608f6e14c15?w=300&q=80",
    text: "Uma chuva intensa, acompanhada de ventos fortes, provocou transtornos em Ubatuba, no Litoral Norte de São Paulo, entre quarta-feira (11) e quinta-feira (12). Segundo a Defesa Civil de SP, houve registro de quedas de árvores, queda de postes de energia elétrica e pontos de alagamento na cidade. Uma família esta desalojada.",
  },
];

const ITEMS_PER_PAGE = 4;
const TOTAL_PAGES = 4;

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("recentes");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={heroNews.image}
          alt="hero"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <span className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded mb-2 w-fit">
            {heroNews.tag}
          </span>
          <h1 className="text-white text-xl font-bold leading-snug drop-shadow-lg max-w-xs">
            {heroNews.title}
          </h1>
          <button className="mt-3 bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm text-white text-xs font-semibold border border-white/40 rounded px-4 py-1.5 w-fit">
            Clique para saber mais
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pt-5 pb-2">
        <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-2.5">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            placeholder="Pesquise uma notícia"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="flex items-center gap-1 text-xs text-gray-500 font-medium shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M11 20h2" />
            </svg>
            Filtrar
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 py-3 flex gap-3">
        <button
          onClick={() => setActiveTab("recentes")}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
            activeTab === "recentes"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-white text-gray-500 border border-gray-200"
          }`}
        >
          Notícias recentes
        </button>
        <button
          onClick={() => setActiveTab("popular")}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 transition-all ${
            activeTab === "popular"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-white text-gray-500 border border-gray-200"
          }`}
        >
          Notícias Popular <span>🔥</span>
        </button>
      </div>

      {/* Article list */}
      <div className="px-4 flex flex-col gap-4 pb-6">
        {articles
          .filter(a =>
            search.trim() === "" || a.text.toLowerCase().includes(search.toLowerCase())
          )
          .map(article => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="flex gap-3 p-3">
                <img
                  src={article.image}
                  alt="noticia"
                  className="w-24 h-24 object-cover rounded-xl shrink-0"
                />
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-5 flex-1">
                  {article.text}
                </p>
              </div>
              <div className="px-3 pb-3 flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm">
                  Ver matéria completa
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pb-10">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-9 h-9 rounded-full text-sm font-semibold transition-all ${
              currentPage === page
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(p => Math.min(TOTAL_PAGES, p + 1))}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
