import { useState, useEffect } from "react";

const heroNews = {
  tag: "ALERTA",
  title: "Previsões aumentam o risco de chuvas fortes em 70% em Caraguatatuba",
  image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=900&q=80",
};

const ITEMS_PER_PAGE = 4;

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("recentes");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function fetchNoticias() {
      try {
        const res = await fetch("http://localhost:3000/noticias");
        if (!res.ok) throw new Error("Erro ao buscar notícias");
        const data = await res.json();
        setNoticias(data);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    }

    fetchNoticias();
  }, []);

  const noticiasFiltradas = noticias
    .filter(n =>
      search.trim() === "" || n.resumo?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      activeTab === "popular"
        ? b.acessos - a.acessos
        : new Date(b.data_publicacao) - new Date(a.data_publicacao)
    );

  const totalPages = Math.ceil(noticiasFiltradas.length / ITEMS_PER_PAGE);

  const noticiasPaginadas = noticiasFiltradas.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function handleTabChange(tab) {
    setActiveTab(tab);
    setCurrentPage(1);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
    setCurrentPage(1);
  }

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
            onChange={handleSearch}
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
          onClick={() => handleTabChange("recentes")}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
            activeTab === "recentes"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-white text-gray-500 border border-gray-200"
          }`}
        >
          Notícias recentes
        </button>
        <button
          onClick={() => handleTabChange("popular")}
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
        {carregando && (
          <p className="text-center text-gray-400 text-sm py-10">Carregando notícias...</p>
        )}

        {erro && (
          <p className="text-center text-red-500 text-sm py-10">{erro}</p>
        )}

        {!carregando && !erro && noticiasPaginadas.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-10">Nenhuma notícia encontrada.</p>
        )}

        {!carregando && !erro && noticiasPaginadas.map(noticia => (
          <div
            key={noticia.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="flex gap-3 p-3">
              <img
                src={noticia.foto_capa}
                alt="noticia"
                className="w-24 h-24 object-cover rounded-xl shrink-0"
              />
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-5 flex-1">
                {noticia.resumo}
              </p>
            </div>
            <div className="px-3 pb-3 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {new Date(noticia.data_publicacao).toLocaleDateString("pt-BR")}
                {noticia.usuario?.nome && ` · ${noticia.usuario.nome}`}
              </span>
              <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm">
                Ver matéria completa
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {!carregando && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pb-10">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
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
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}