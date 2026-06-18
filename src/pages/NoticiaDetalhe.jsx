import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { X, ImagePlus, Pencil } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const API_BASE = "";

export default function NoticiaDetalhe() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const podePublicar = user && ["admin", "editor"].includes(user.tipo);

  const [noticia, setNoticia] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // ── Estado do modal de edição ──
  const [mostrarEdicao, setMostrarEdicao] = useState(false);
  const [salvando, setSalvando] = useState(false);
  const [form, setForm] = useState({ titulo: "", resumo: "", conteudo: "" });
  const [novaFoto, setNovaFoto] = useState(null);
  const [previewFoto, setPreviewFoto] = useState(null);
  const fileInputRef = useRef(null);

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

  // Abre o modal já preenchido com os dados atuais
  function abrirEdicao() {
    setForm({
      titulo: noticia.resumo || "",   // resumo é usado como título no projeto
      resumo: noticia.resumo || "",
      conteudo: noticia.conteudo || "",
    });
    setNovaFoto(null);
    setPreviewFoto(null);
    setMostrarEdicao(true);
  }

  function fecharEdicao() {
    setMostrarEdicao(false);
    setNovaFoto(null);
    setPreviewFoto(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleSelecionarFoto(e) {
    const arquivo = e.target.files?.[0];
    if (!arquivo) return;

    const TIPOS_PERMITIDOS = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!TIPOS_PERMITIDOS.includes(arquivo.type)) {
      toast.error("Formato inválido. Use JPG, PNG, WEBP ou GIF.");
      return;
    }
    if (arquivo.size > 5 * 1024 * 1024) {
      toast.error("A imagem deve ter no máximo 5MB.");
      return;
    }

    setNovaFoto(arquivo);
    setPreviewFoto(URL.createObjectURL(arquivo));
  }

  async function salvarEdicao(e) {
    e.preventDefault();

    if (!form.titulo.trim()) {
      return toast.error("O título é obrigatório.");
    }

    try {
      setSalvando(true);

      const formData = new FormData();
      formData.append("titulo", form.titulo);
      formData.append("resumo", form.resumo || form.titulo);
      formData.append("conteudo", form.conteudo);
      if (novaFoto) formData.append("fotoCapa", novaFoto);

      const res = await fetch(`${API_BASE}/noticias/${noticia.id}`, {
        method: "PUT",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Erro ao atualizar notícia.");

      // Atualiza os dados locais e redireciona se o slug mudou
      setNoticia(prev => ({ ...prev, ...data }));
      fecharEdicao();
      toast.success("Notícia atualizada com sucesso!");

      // Se o slug mudou (título alterado), navega para o novo slug
      if (data.slug && data.slug !== slug) {
        navigate(`/noticias/${data.slug}`, { replace: true });
      }
    } catch (err) {
      toast.error(err.message || "Erro ao atualizar notícia.");
    } finally {
      setSalvando(false);
    }
  }

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

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 max-w-3xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Notícias
          </Link>

          {/* ── BOTÃO EDITAR ── só aparece para admin/editor */}
          {podePublicar && (
            <button
              onClick={abrirEdicao}
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-xl border border-white/30 transition-all"
            >
              <Pencil size={14} />
              Editar notícia
            </button>
          )}
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

      {/* ── Modal de edição ── */}
      {mostrarEdicao && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900">Editar notícia</h2>
              <button
                type="button"
                onClick={fecharEdicao}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={salvarEdicao} className="space-y-3">

              {/* Upload de nova imagem de capa */}
              <div>
                <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">
                  Imagem de capa
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={handleSelecionarFoto}
                  className="hidden"
                  id="foto-capa-edicao"
                />

                {previewFoto ? (
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 group">
                    <img src={previewFoto} alt="Pré-visualização" className="w-full h-48 object-cover" />
                    <button
                      type="button"
                      onClick={() => { setNovaFoto(null); setPreviewFoto(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                      className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-lg p-1.5 transition-colors"
                    >
                      <X size={16} />
                    </button>
                    <label
                      htmlFor="foto-capa-edicao"
                      className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 opacity-0 group-hover:opacity-100 transition-all cursor-pointer text-white text-sm font-semibold"
                    >
                      Trocar imagem
                    </label>
                  </div>
                ) : (
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 group">
                    {/* Mostra a foto atual com opção de trocar */}
                    <img
                      src={`${API_BASE}/${noticia.fotoCapa}`}
                      alt="Capa atual"
                      className="w-full h-48 object-cover"
                    />
                    <label
                      htmlFor="foto-capa-edicao"
                      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/0 group-hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-all cursor-pointer text-white"
                    >
                      <ImagePlus size={24} />
                      <span className="text-sm font-semibold">Trocar imagem</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Título */}
              <input
                className="w-full border border-slate-200 p-2.5 rounded-lg outline-none focus:border-blue-400 text-sm"
                placeholder="Título da notícia"
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
              />

              {/* Resumo */}
              <textarea
                className="w-full border border-slate-200 p-2.5 rounded-lg outline-none focus:border-blue-400 text-sm"
                rows={2}
                placeholder="Resumo (aparece nos cards de listagem)"
                value={form.resumo}
                onChange={(e) => setForm({ ...form, resumo: e.target.value })}
              />

              {/* Conteúdo */}
              <textarea
                className="w-full border border-slate-200 p-2.5 rounded-lg outline-none focus:border-blue-400 text-sm"
                rows={8}
                placeholder="Conteúdo completo da notícia"
                value={form.conteudo}
                onChange={(e) => setForm({ ...form, conteudo: e.target.value })}
              />

              <div className="flex gap-2 justify-end pt-1">
                <button
                  type="button"
                  onClick={fecharEdicao}
                  disabled={salvando}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={salvando}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors disabled:opacity-70 flex items-center gap-2"
                >
                  {salvando ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Salvando...
                    </>
                  ) : "Salvar alterações"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}