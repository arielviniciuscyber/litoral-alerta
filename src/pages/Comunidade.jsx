import { useState } from "react";
import buraco from "../assets/buraco.png";
import alagamento from "../assets/alagamento.png";
import ventania from "../assets/ventania.png";

const postsIniciais = [
  {
    id: 1,
    user: "Marcos Teixeira",
    avatarImg: "https://i.pravatar.cc/150?img=12",
    time: "2h atrás",
    text: "@prefeitura iae quando vcs vão vir cobrir esse buraco? na chuva de ontem vi dois ciclistas se acidentando por conta do buraco escondido de tanta água...",
    image: buraco,
    likes: 41,
    comments: 12,
    shares: 3,
    liked: false,
    saved: false,
    likeAvatars: [
      "https://i.pravatar.cc/150?img=5",
      "https://i.pravatar.cc/150?img=9",
    ],
    likeLabel: "Você e outras 41 pessoas curtiram",
  },
  {
    id: 2,
    user: "Bruno Goes",
    avatarImg: "https://i.pravatar.cc/150?img=33",
    time: "5h atrás",
    text: "Como se encontrava as casas do rio do ouro a alguns anos atrás. Fico feliz que nunca mais tenha alagado dessa forma.",
    image: alagamento,
    likes: 58,
    comments: 7,
    shares: 14,
    liked: false,
    saved: false,
    likeAvatars: [
      "https://i.pravatar.cc/150?img=20",
      "https://i.pravatar.cc/150?img=47",
    ],
    likeLabel: "Fulano das Neves e outras 58 pessoas curtiram",
  },
  {
    id: 3,
    user: "Jair Messias",
    avatarImg: "https://i.pravatar.cc/150?img=52",
    time: "8h atrás",
    text: "Vento e chuvas fortes ontem, achei até que o vento iria levar minha casa junto.",
    image: ventania,
    likes: 29,
    comments: 5,
    shares: 2,
    liked: false,
    saved: false,
    likeAvatars: [
      "https://i.pravatar.cc/150?img=60",
    ],
    likeLabel: "Maria da Silva e outras 29 pessoas curtiram",
  },
];

/* ─── Ícones SVG ────────────────────────────────────────────── */
const IconHeart = ({ filled }) => (
  <svg className="w-[18px] h-[18px]" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const IconComment = () => (
  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
  </svg>
);
const IconShare = () => (
  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
  </svg>
);
const IconBookmark = ({ filled }) => (
  <svg className="w-[18px] h-[18px]" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z" />
  </svg>
);

/* ─── Post Card ─────────────────────────────────────────────── */
function PostCard({ post, onLike, onSave }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className="flex items-center gap-3">
          <img
            src={post.avatarImg}
            alt={post.user}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 shrink-0"
          />
          <div>
            <p className="font-display text-sm font-bold text-slate-900">{post.user}</p>
            <p className="text-xs text-slate-400">{post.time}</p>
          </div>
        </div>
        <button className="text-slate-300 hover:text-slate-500 transition-colors p-1.5 rounded-lg hover:bg-slate-50">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" />
          </svg>
        </button>
      </div>

      {/* Texto */}
      <p className="px-5 pb-4 text-sm text-slate-700 leading-relaxed">{post.text}</p>

      {/* Imagem */}
      {post.image && (
        <div className="mx-5 mb-4 rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt="Imagem da publicação"
            className="w-full h-52 object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      )}

      {/* Avatares de curtidas */}
      <div className="px-5 pb-2.5 flex items-center gap-2">
        <div className="flex -space-x-1.5">
          {post.likeAvatars.map((src, i) => (
            <img key={i} src={src} alt="" className="w-5 h-5 rounded-full border-2 border-white object-cover" />
          ))}
        </div>
        <span className="text-xs text-slate-400 truncate">{post.likeLabel}</span>
      </div>

      {/* Divisor */}
      <div className="mx-5 border-t border-slate-100" />

      {/* Ações */}
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-5">
          <button
            onClick={() => onLike(post.id)}
            className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
              post.liked ? "text-red-500" : "text-slate-400 hover:text-red-400"
            }`}
          >
            <IconHeart filled={post.liked} />
            <span>{post.likes + (post.liked ? 1 : 0)}</span>
          </button>

          <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-blue-500 transition-colors">
            <IconComment />
            <span>{post.comments}</span>
          </button>

          <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-500 transition-colors">
            <IconShare />
            <span>{post.shares}</span>
          </button>
        </div>

        <button
          onClick={() => onSave(post.id)}
          className={`transition-colors ${post.saved ? "text-blue-600" : "text-slate-300 hover:text-blue-500"}`}
        >
          <IconBookmark filled={post.saved} />
        </button>
      </div>
    </div>
  );
}

/* ─── Página Principal ──────────────────────────────────────── */
export default function CommunityPage() {
  const [postsList, setPostsList] = useState(postsIniciais);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newText, setNewText] = useState("");

  const handleLike = (id) => {
    setPostsList(prev =>
      prev.map(p => p.id === id ? { ...p, liked: !p.liked } : p)
    );
  };

  const handleSave = (id) => {
    setPostsList(prev =>
      prev.map(p => p.id === id ? { ...p, saved: !p.saved } : p)
    );
  };

  const handlePublish = () => {
    if (!newText.trim()) return;
    setPostsList(prev => [{
      id: Date.now(),
      user: "Você",
      avatarImg: "https://i.pravatar.cc/150?img=1",
      time: "agora",
      text: newText,
      image: null,
      likes: 0,
      comments: 0,
      shares: 0,
      liked: false,
      saved: false,
      likeAvatars: [],
      likeLabel: "Seja o primeiro a curtir",
    }, ...prev]);
    setNewText("");
    setShowModal(false);
  };

  const filtered = postsList.filter(p =>
    search.trim() === "" ||
    p.text.toLowerCase().includes(search.toLowerCase()) ||
    p.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ═══════════════════════════════════════════════════════════
          HEADER DA PÁGINA
      ═══════════════════════════════════════════════════════════ */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto px-6 pt-28 pb-8">
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Comunidade
          </h1>
          <p className="text-slate-500 mt-2 text-base">
            Compartilhe relatos, fotos e informações sobre o que acontece na sua região.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          BARRA DE BUSCA + PUBLICAR (STICKY)
      ═══════════════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-6 py-3 flex items-center gap-3">
          {/* Busca */}
          <div className="flex items-center gap-2.5 bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-200 flex-1 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
              placeholder="Pesquisar publicações..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* Botão Publicar */}
          <button
            onClick={() => setShowModal(true)}
            className="font-display flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm shadow-blue-600/20 transition-all shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Publicar
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FEED DE PUBLICAÇÕES
      ═══════════════════════════════════════════════════════════ */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">🔍</div>
              <h3 className="font-display text-lg font-bold text-slate-400">Nenhuma publicação encontrada</h3>
              <p className="text-slate-400 text-sm mt-1">Tente ajustar sua busca.</p>
            </div>
          ) : (
            filtered.map(post => (
              <PostCard key={post.id} post={post} onLike={handleLike} onSave={handleSave} />
            ))
          )}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          MODAL — NOVA PUBLICAÇÃO
      ═══════════════════════════════════════════════════════════ */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl border border-slate-100"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-lg font-bold text-slate-900">Nova publicação</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex items-start gap-3">
              <img src="https://i.pravatar.cc/150?img=1" alt="Você" className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 shrink-0" />
              <textarea
                className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none resize-none bg-slate-50 rounded-xl p-4 border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all min-h-[120px]"
                placeholder="O que está acontecendo na sua região?"
                value={newText}
                onChange={e => setNewText(e.target.value)}
                autoFocus
              />
            </div>

            <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
              <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-600 transition-colors font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Adicionar foto
              </button>
              <button
                onClick={handlePublish}
                disabled={!newText.trim()}
                className="font-display bg-blue-600 disabled:opacity-40 hover:bg-blue-500 text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-sm shadow-blue-600/20 transition-all"
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
