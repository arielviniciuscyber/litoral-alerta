import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:3000";

export default function NoticiaDetalhe() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCarregando(true);
    setErro(null);

    async function fetchNoticia() {
      try {
        const res = await fetch(`${API_BASE}/noticias/${slug}`);
        if (res.status === 404) throw new Error("404");
        if (!res.ok) throw new Error("Erro ao carregar a notícia.");
        const data = await res.json();
        setNoticia(data);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    }

    fetchNoticia();
  }, [slug]);

  /* ── Loading ── */
  if (carregando) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <p className="text-slate-400 text-sm font-medium">Carregando matéria...</p>
        </div>
      </div>
    );
  }

  /* ── 404 ── */
  if (erro === "404") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">📰</div>
          <h1 className="font-display text-2xl font-extrabold text-slate-900 mb-2">Notícia não encontrada</h1>
          <p className="text-slate-500 text-sm mb-8">O link pode estar desatualizado ou a notícia foi removida.</p>
          <Link to="/noticias" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors">
            ← Voltar para notícias
          </Link>
        </div>
      </div>
    );
  }

  /* ── Erro genérico ── */
  if (erro) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">⚠️</div>
          <h1 className="font-display text-2xl font-extrabold text-slate-900 mb-2">Erro ao carregar</h1>
          <p className="text-slate-500 text-sm mb-8">{erro}</p>
          <button onClick={() => navigate(-1)} className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors">
            ← Voltar
          </button>
        </div>
      </div>
    );
  }

  const dataFormatada = new Date(noticia.dataPublicacao).toLocaleDateString("pt-BR", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero com foto de capa ── */}
      <div className="relative w-full h-72 md:h-[460px] overflow-hidden bg-slate-900">
        <img
          src={`${API_BASE}/${noticia.fotoCapa}`}
          alt={noticia.resumo}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        {/* Breadcrumb sobre a imagem */}
        <div className="absolute top-6 left-0 right-0 max-w-3xl mx-auto px-6">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Notícias
          </Link>
        </div>
      </div>

      {/* ── Conteúdo ── */}
      <div className="max-w-3xl mx-auto px-6 -mt-24 relative z-10 pb-20">

        {/* Card principal */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">

          {/* Meta + título */}
          <div className="px-8 pt-8 pb-6 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Notícia
              </span>
              <span className="text-slate-400 text-xs">{dataFormatada}</span>
              {noticia.acessos > 0 && (
                <>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    👁️ {noticia.acessos} visualizações
                  </span>
                </>
              )}
            </div>

            <h1 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
              {noticia.resumo}
            </h1>
          </div>

          {/* Corpo da matéria */}
          <div
            className="px-8 py-8 prose prose-slate prose-lg max-w-none
              prose-p:text-slate-700 prose-p:leading-relaxed
              prose-strong:text-slate-900
              prose-headings:font-display prose-headings:font-bold"
            dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
          />

          {/* Rodapé — autor */}
          {noticia.usuario && (
            <div className="px-8 py-6 border-t border-slate-100 bg-slate-50/60">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 overflow-hidden">
                  {noticia.usuario.fotoPerfil ? (
                    <img
                      src={`${API_BASE}/${noticia.usuario.fotoPerfil}`}
                      alt={noticia.usuario.nome}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-blue-600 font-bold text-lg">
                      {(noticia.usuario.nome || noticia.usuario.username).charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-0.5">Publicado por</p>
                  <p className="text-slate-900 font-bold text-sm">{noticia.usuario.nome || noticia.usuario.username}</p>
                  {noticia.usuario.bio && (
                    <p className="text-slate-500 text-xs mt-0.5">{noticia.usuario.bio}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Botão voltar */}
        <div className="mt-8 text-center">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-semibold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Ver todas as notícias
          </Link>
        </div>
      </div>
    </div>
  );
}