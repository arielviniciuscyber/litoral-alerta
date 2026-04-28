import { useState } from "react";

const posts = [
  {
    id: 1,
    user: "Marcos teixeira",
    avatar: null,
    avatarImg: "https://i.pravatar.cc/150?img=12",
    time: "2h atrás",
    text: "@prefeitura iae quando vcs vão vir cobrir esse buraco? na chuva de ontem vi dois ciclistas se acidentando por conta do buraco escondido de tanta água...",
    image: "https://images.unsplash.com/photo-1515162305285-0293e4f4b8a3?w=600&q=80",
    likes: 41,
    comments: 12,
    shares: 3,
    saves: 2,
    liked: false,
    likeAvatars: [
      "https://i.pravatar.cc/150?img=5",
      "https://i.pravatar.cc/150?img=9",
    ],
    likeLabel: "Você e outras 41 pessoas curtiram isso",
  },
  {
    id: 2,
    user: "Bruno goes",
    avatar: null,
    avatarImg: "https://i.pravatar.cc/150?img=33",
    time: "5h atrás",
    text: "Como se encontrava as casas do rio do ouro a alguns anos atrás. Fico feliz que nunca mais tenha alagado dessa forma.",
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&q=80",
    likes: 58,
    comments: 7,
    shares: 14,
    saves: 5,
    liked: false,
    likeAvatars: [
      "https://i.pravatar.cc/150?img=20",
      "https://i.pravatar.cc/150?img=47",
    ],
    likeLabel: "fulano das neves e outras 58 pessoas curtiram",
  },
  {
    id: 3,
    user: "Jair messias",
    avatar: null,
    avatarImg: "https://i.pravatar.cc/150?img=52",
    time: "8h atrás",
    text: "Vento e chuvas fortes ontem, achei até que o vento iria levar minha casa junto.",
    image: "https://images.unsplash.com/photo-1527482937786-6608f6e14c15?w=600&q=80",
    likes: 29,
    comments: 5,
    shares: 2,
    saves: 1,
    liked: false,
    likeAvatars: [
      "https://i.pravatar.cc/150?img=60",
    ],
    likeLabel: "maria da silva e outras 29 pessoas curtiram",
  },
];

// Icons
const IconPerson = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const IconGroup = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconHome = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const IconBookmark = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z" />
  </svg>
);
const IconDots = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" />
  </svg>
);
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
const IconSave = ({ filled }) => (
  <svg className="w-[18px] h-[18px]" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z" />
  </svg>
);

function PostCard({ post, onLike, onSave }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-2.5">
          <img
            src={post.avatarImg}
            alt={post.user}
            className="w-9 h-9 rounded-full object-cover shrink-0 border border-gray-100"
          />
          <p className="text-sm font-semibold text-gray-900 leading-tight">{post.user}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
          <IconDots />
        </button>
      </div>

      {/* Text */}
      <p className="px-4 pb-3 text-sm text-gray-700 leading-relaxed">{post.text}</p>

      {/* Image */}
      {post.image && (
        <img
          src={post.image}
          alt="post"
          className="w-full object-cover"
          style={{ maxHeight: 220 }}
        />
      )}

      {/* Like row with avatars */}
      <div className="px-4 pt-2.5 pb-1 flex items-center gap-2">
        <div className="flex -space-x-1.5">
          {post.likeAvatars.map((src, i) => (
            <img key={i} src={src} alt="" className="w-5 h-5 rounded-full border-2 border-white object-cover" />
          ))}
        </div>
        <span className="text-xs text-gray-400 truncate">{post.likeLabel}</span>
      </div>

      {/* Divider */}
      <div className="mx-4 border-t border-gray-100 mt-1" />

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-5">
          {/* Like */}
          <button
            onClick={() => onLike(post.id)}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              post.liked ? "text-red-500" : "text-gray-400 hover:text-red-400"
            }`}
          >
            <IconHeart filled={post.liked} />
            <span>{post.likes + (post.liked ? 1 : 0)}</span>
          </button>

          {/* Comment */}
          <button className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-blue-500 transition-colors">
            <IconComment />
            <span>{post.comments}</span>
          </button>

          {/* Share */}
          <button className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-green-500 transition-colors">
            <IconShare />
            <span>{post.shares}</span>
          </button>
        </div>

        {/* Save */}
        <button
          onClick={() => onSave(post.id)}
          className={`transition-colors ${post.saved ? "text-blue-600" : "text-gray-400 hover:text-blue-500"}`}
        >
          <IconSave filled={post.saved} />
        </button>
      </div>
    </div>
  );
}

export default function CommunityPage() {
  const [postsList, setPostsList] = useState(posts);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newText, setNewText] = useState("");
  const [activeNav, setActiveNav] = useState("home");

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
      saves: 0,
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

  const navItems = [
    { id: "person", icon: <IconPerson /> },
    { id: "group", icon: <IconGroup /> },
    { id: "home", icon: <IconHome /> },
    { id: "bookmark", icon: <IconBookmark /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Nav */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="max-w-lg mx-auto flex items-center gap-3 px-4 py-2.5">
          {/* Nav icons */}
          <div className="flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`p-2 rounded-lg transition-colors ${
                  activeNav === item.id
                    ? "text-blue-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="flex-1 flex items-center bg-gray-100 rounded-full px-3 py-1.5 gap-2">
            <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
            <input
              className="bg-transparent text-xs text-gray-600 placeholder-gray-400 outline-none w-full"
              placeholder="Buscar por..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* Filter */}
          <button className="flex items-center gap-1 text-xs text-gray-500 font-medium shrink-0 whitespace-nowrap">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M11 20h2" />
            </svg>
            Filtrar
          </button>
        </div>
      </div>

      {/* Content wrapper — centered */}
      <div className="max-w-lg mx-auto px-4 pt-4 pb-10">
        {/* Publish button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white text-xs font-semibold px-4 py-2 rounded-lg shadow"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Fazer publicação
          </button>
        </div>

        {/* Feed */}
        <div className="flex flex-col gap-4">
          {filtered.length === 0 ? (
            <div className="text-center text-gray-400 text-sm py-12">Nenhuma publicação encontrada.</div>
          ) : (
            filtered.map(post => (
              <PostCard key={post.id} post={post} onLike={handleLike} onSave={handleSave} />
            ))
          )}
        </div>
      </div>

      {/* Modal Nova Publicação */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-t-3xl p-5 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Handle bar */}
            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4" />
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-gray-800">Nova publicação</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-start gap-3">
              <img src="https://i.pravatar.cc/150?img=1" alt="você" className="w-9 h-9 rounded-full object-cover shrink-0" />
              <textarea
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none resize-none bg-gray-50 rounded-xl p-3 border border-gray-200 focus:border-blue-400 transition-colors"
                rows={4}
                placeholder="O que está acontecendo na sua região?"
                value={newText}
                onChange={e => setNewText(e.target.value)}
                autoFocus
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 transition-colors font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Adicionar foto
              </button>
              <button
                onClick={handlePublish}
                disabled={!newText.trim()}
                className="bg-blue-600 disabled:opacity-40 hover:bg-blue-700 active:scale-95 transition-all text-white text-xs font-semibold px-5 py-2 rounded-lg"
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
