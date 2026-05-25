import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminButton from "../components/AdminButton";

const ITEMS_PER_PAGE = 6;
const API_BASE = "http://localhost:3000";

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
        const res = await fetch(`${API_BASE}/noticias`);
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
        : new Date(b.dataPublicacao) - new Date(a.dataPublicacao)
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

  const destaque = noticiasFiltradas[0];
  const restantes = noticiasPaginadas.filter(n => n.id !== destaque?.id);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Header ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-display text-sm font-bold text-blue-600 uppercase tracking-wider">Portal de Notícias</span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Últimas Notícias
              </h1>
              <p className="text-slate-500 mt-3 text-lg max-w-lg">
                Fique por dentro de tudo que acontece no litoral. Clima, alertas e comunidade.
              </p>
            </div>
            <AdminButton onClick={() => alert("Abrir modal de nova publicação...")}>
              + Nova publicação
            </AdminButton>
          </div>
        </div>
      </div>

      {/* ── Busca + Filtros ── */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div className="flex items-center gap-2.5 bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-200 flex-1 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
              placeholder="Pesquisar notícias..."
              value={search}
              onChange={handleSearch}
            />
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => handleTabChange("recentes")}
              className={`font-display px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "recentes" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Recentes
            </button>
            <button
              onClick={() => handleTabChange("popular")}
              className={`font-display px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1 ${
                activeTab === "popular" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Popular 🔥
            </button>
          </div>
        </div>
      </div>

      {/* ── Conteúdo ── */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Loading */}
        {carregando && (
          <div className="flex flex-col items-center justify-center py-32">
            <svg className="animate-spin h-8 w-8 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <p className="text-slate-400 font-medium text-sm">Carregando notícias...</p>
          </div>
        )}

        {/* Erro */}
        {erro && (
          <div className="text-center py-32">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">⚠️</div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Erro ao carregar</h3>
            <p className="text-slate-500 text-sm">{erro}</p>
          </div>
        )}

        {/* Vazio */}
        {!carregando && !erro && noticiasFiltradas.length === 0 && (
          <div className="text-center py-32">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">🔍</div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Nenhuma notícia encontrada</h3>
            <p className="text-slate-500 text-sm">Tente ajustar sua pesquisa ou volte mais tarde.</p>
          </div>
        )}

        {/* ── Destaque ── */}
        {!carregando && !erro && destaque && currentPage === 1 && (
          <Link to={`/noticias/${destaque.slug}`} className="block mb-10">
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group cursor-pointer">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden relative">
                  <img
                    src={`${API_BASE}/${destaque.fotoCapa}`}
                    alt="Destaque"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:bg-gradient-to-l" />
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg">
                    Destaque
                  </span>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-slate-400 font-medium">
                      {new Date(destaque.dataPublicacao).toLocaleDateString("pt-BR", {
                        day: "numeric", month: "long", year: "numeric",
                      })}
                    </span>
                    {destaque.usuario?.nome && (
                      <>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span className="text-xs text-blue-600 font-semibold">{destaque.usuario.nome}</span>
                      </>
                    )}
                  </div>
                  <p className="font-display text-xl lg:text-2xl font-extrabold text-slate-900 leading-snug mb-4">
                    {destaque.resumo}
                  </p>
                  {destaque.acessos !== undefined && (
                    <span className="text-xs text-slate-400 mb-6 flex items-center gap-1">
                      👁️ {destaque.acessos} visualizações
                    </span>
                  )}
                  <span className="font-display bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-sm shadow-blue-600/20 transition-all w-fit">
                    Ler matéria completa →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* ── Grid ── */}
        {!carregando && !erro && (currentPage === 1 ? restantes : noticiasPaginadas).length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(currentPage === 1 ? restantes : noticiasPaginadas).map(noticia => (
              <Link key={noticia.id} to={`/noticias/${noticia.slug}`} className="block">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer flex flex-col h-full">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={`${API_BASE}/${noticia.fotoCapa}`}
                      alt="Capa"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-slate-400 font-medium">
                        {new Date(noticia.dataPublicacao).toLocaleDateString("pt-BR")}
                      </span>
                      {noticia.usuario?.nome && (
                        <>
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                          <span className="text-xs text-blue-600 font-semibold">{noticia.usuario.nome}</span>
                        </>
                      )}
                    </div>
                    <p className="text-slate-800 text-sm leading-relaxed line-clamp-3 flex-1 font-medium">
                      {noticia.resumo}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                      {noticia.acessos !== undefined && (
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          👁️ {noticia.acessos}
                        </span>
                      )}
                      <span className="text-blue-600 text-sm font-bold group-hover:underline">
                        Ler mais →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* ── Paginação ── */}
        {!carregando && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-14">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all disabled:opacity-30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                  currentPage === page
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all disabled:opacity-30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}