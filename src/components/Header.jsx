import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import notificações from '../assets/notificações.png'
import perfil from '../assets/perfil.png'
import { useAuth } from '../context/AuthContext'

function linkClass({ isActive }) {
  return `relative text-sm font-medium tracking-wide uppercase transition-colors ${
    isActive ? "text-blue-400" : "text-slate-300 hover:text-white"
  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-400 after:transition-transform after:duration-300 ${
    isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
  }`
}

function linkClassMobile({ isActive }) {
  return `block px-4 py-3 rounded-xl transition-all uppercase font-medium text-sm ${
    isActive
      ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
      : "text-slate-300 hover:bg-slate-800 hover:text-white"
  }`
}

// Gera uma cor de fundo determinística baseada no username
function avatarColor(username = "") {
  const colors = [
    "#2563eb", // blue-600
    "#7c3aed", // violet-600
    "#db2777", // pink-600
    "#059669", // emerald-600
    "#d97706", // amber-600
    "#dc2626", // red-600
    "#0891b2", // cyan-600
    "#65a30d", // lime-600
    "#9333ea", // purple-600
    "#0284c7", // sky-600
  ]
  let hash = 0
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}

function UserAvatar({ user, size = "sm" }) {
  const inicial = (user.nome || user.username).charAt(0).toUpperCase()
  const bg = avatarColor(user.username)
  const dim = size === "sm" ? "w-8 h-8 text-sm" : "w-12 h-12 text-lg"
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center text-white font-bold shrink-0`}
      style={{ backgroundColor: bg }}
    >
      {inicial}
    </div>
  )
}

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout } = useAuth()
  const isHome = location.pathname === "/"

  const [menuAberto, setMenuAberto] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const positionClass = isHome ? "fixed top-0 left-0 w-full" : "sticky top-0 w-full"
  const bgClass = isScrolled
    ? "bg-slate-900/85 backdrop-blur-xl shadow-lg border-b border-slate-800/50"
    : (isHome ? "bg-transparent" : "bg-[#0F172A]")

  async function handleLogout() {
    await logout()
    navigate("/")
    setMenuAberto(false)
  }

  return (
    <>
      <header className={`${positionClass} z-50 h-20 flex items-center px-6 md:px-10 transition-all duration-300 ${bgClass}`}>
        <div className="flex items-center w-full max-w-7xl mx-auto justify-between">

          {/* LOGO */}
          <img
            src={logo}
            alt="Logo Litoral Alerta"
            className="w-36 md:w-40 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          />

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/noticias" className={linkClass}>Notícias</NavLink>
            <NavLink to="/sobrenos" className={linkClass}>Sobre Nós</NavLink>
            <NavLink to="/prevencao" className={linkClass}>Prevenção</NavLink>
            <NavLink to="/comunidade" className={linkClass}>Comunidade</NavLink>
          </nav>

          {/* ÍCONES DESKTOP */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* NOTIFICAÇÕES */}
            <button
              onClick={() => navigate("/notificacoes")}
              className="relative p-2 rounded-full hover:bg-slate-800 active:scale-95 transition-all group"
              title="Notificações"
            >
              <img
                src={notificações}
                alt="Notificações"
                className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-slate-900"></span>
            </button>

            {/* PERFIL / LOGIN */}
            {user ? (
              // Usuário logado: mostra nome + avatar + dropdown
              <div className="relative group">
                <button className="flex items-center gap-2.5 rounded-full pl-1 pr-3 py-1 hover:bg-slate-800 transition-all active:scale-95">
                  {/* Avatar */}
                  <div className="ring-2 ring-blue-500/60 rounded-full">
                    <UserAvatar user={user} size="sm" />
                  </div>
                  {/* Nome */}
                  <span className="text-sm font-semibold text-white max-w-[120px] truncate">
                    {user.nome || user.username}
                  </span>
                  {/* Chevron */}
                  <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  <button
                    onClick={() => navigate("/perfil")}
                    className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    Meu Perfil
                  </button>
                  <div className="h-px bg-slate-800" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-slate-800 hover:text-red-300 transition-colors"
                  >
                    Sair
                  </button>
                </div>
              </div>
            ) : (
              // Não logado: botão de perfil padrão → vai para /login
              <button
                onClick={() => navigate("/login")}
                className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] active:scale-95 transition-all"
                title="Entrar"
              >
                <img src={perfil} alt="Perfil" className="w-full h-full object-cover" />
              </button>
            )}
          </nav>

          {/* HAMBURGER MOBILE */}
          <button
            className="lg:hidden ml-auto flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
          >
            <span className={`block w-6 h-0.5 bg-slate-200 transition-all duration-300 ${menuAberto ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-200 transition-all duration-300 ${menuAberto ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-200 transition-all duration-300 ${menuAberto ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* MENU MOBILE EXPANDIDO */}
        <div className={`absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 overflow-hidden lg:hidden ${menuAberto ? "max-h-[500px] opacity-100 py-6 px-6" : "max-h-0 opacity-0 py-0 px-6"}`}>

          {/* PERFIL MOBILE */}
          <div className="flex items-center gap-4 border-b border-slate-800 pb-6 mb-6">
            <button
              onClick={() => {
                navigate(user ? "/perfil" : "/login")
                setMenuAberto(false)
              }}
              className="ring-2 ring-slate-700 rounded-full shrink-0"
            >
              {user ? (
                <UserAvatar user={user} size="lg" />
              ) : (
                <img src={perfil} alt="Perfil" className="w-12 h-12 rounded-full object-cover" />
              )}
            </button>

            <div className="flex flex-col min-w-0">
              {user ? (
                <>
                  <span className="text-white font-bold truncate">{user.nome || user.username}</span>
                  <span className="text-xs text-slate-400 truncate">{user.email}</span>
                </>
              ) : (
                <>
                  <span className="text-white font-bold">Meu Perfil</span>
                  <span className="text-xs text-slate-400">Entrar / Criar conta</span>
                </>
              )}
            </div>

            <button
              onClick={() => {
                navigate("/notificacoes")
                setMenuAberto(false)
              }}
              className="ml-auto p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors relative shrink-0"
            >
              <img src={notificações} alt="Notificações" className="w-5 h-5" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* LINKS MOBILE */}
          <div className="flex flex-col gap-2">
            <NavLink to="/" className={linkClassMobile} onClick={() => setMenuAberto(false)}>HOME</NavLink>
            <NavLink to="/noticias" className={linkClassMobile} onClick={() => setMenuAberto(false)}>NOTÍCIAS</NavLink>
            <NavLink to="/sobrenos" className={linkClassMobile} onClick={() => setMenuAberto(false)}>SOBRE NÓS</NavLink>
            <NavLink to="/prevencao" className={linkClassMobile} onClick={() => setMenuAberto(false)}>PREVENÇÃO</NavLink>
            <NavLink to="/comunidade" className={linkClassMobile} onClick={() => setMenuAberto(false)}>COMUNIDADE</NavLink>
            {user && (
              <button
                onClick={handleLogout}
                className="block px-4 py-3 rounded-xl text-left uppercase font-medium text-sm text-red-400 hover:bg-slate-800 hover:text-red-300 transition-all"
              >
                SAIR
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header