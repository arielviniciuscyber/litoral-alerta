import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import notificações from '../assets/notificações.png'
import perfil from '../assets/perfil.png'

// Animação de linha inferior sofisticada para os links Desktop
function linkClass({ isActive }) {
  return `relative text-sm font-semibold tracking-wide transition-colors ${
    isActive ? "text-blue-400" : "text-slate-300 hover:text-white"
  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-400 after:transition-transform after:duration-300 ${
    isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
  }`
}

function linkClassMobile({ isActive }) {
  return `block px-4 py-3 rounded-xl transition-all font-semibold ${
    isActive 
      ? "bg-blue-600/20 text-blue-400 border border-blue-500/30" 
      : "text-slate-300 hover:bg-slate-800 hover:text-white"
  }`
}

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === "/"

  const [menuAberto, setMenuAberto] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const positionClass = isHome ? "fixed top-0 left-0 w-full" : "sticky top-0 w-full"
  const bgClass = isScrolled 
    ? "bg-slate-900/85 backdrop-blur-xl shadow-lg border-b border-slate-800/50" 
    : (isHome ? "bg-transparent" : "bg-[#0F172A]")

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
            {/* BOTÃO NOTIFICAÇÕES */}
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
              {/* Pontinho vermelho indicando notificação (fake) */}
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-slate-900"></span>
            </button>

            {/* BOTÃO PERFIL */}
            <button
              onClick={() => navigate("/login")}
              className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] active:scale-95 transition-all"
              title="Meu Perfil"
            >
              <img
                src={perfil}
                alt="Perfil"
                className="w-full h-full object-cover"
              />
            </button>
          </nav>

          {/* BOTÃO HAMBURGER MOBILE */}
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
          
          {/* PERFIL E NOTIFICAÇÕES MOBILE */}
          <div className="flex items-center gap-4 border-b border-slate-800 pb-6 mb-6">
            <button
              onClick={() => {
                navigate("/login")
                setMenuAberto(false)
              }}
              className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate-700"
            >
              <img
                src={perfil}
                alt="Perfil"
                className="w-full h-full object-cover"
              />
            </button>
            <div className="flex flex-col">
              <span className="text-white font-bold">Meu Perfil</span>
              <span className="text-xs text-slate-400">Ver configurações</span>
            </div>

            <button
              onClick={() => {
                navigate("/notificacoes")
                setMenuAberto(false)
              }}
              className="ml-auto p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors relative"
            >
              <img src={notificações} alt="Notificações" className="w-5 h-5" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* LINKS MOBILE */}
          <div className="flex flex-col gap-2">
            <NavLink to="/" className={linkClassMobile} onClick={() => setMenuAberto(false)}>Home</NavLink>
            <NavLink to="/noticias" className={linkClassMobile} onClick={() => setMenuAberto(false)}>Notícias</NavLink>
            <NavLink to="/sobrenos" className={linkClassMobile} onClick={() => setMenuAberto(false)}>Sobre Nós</NavLink>
            <NavLink to="/prevencao" className={linkClassMobile} onClick={() => setMenuAberto(false)}>Prevenção</NavLink>
            <NavLink to="/comunidade" className={linkClassMobile} onClick={() => setMenuAberto(false)}>Comunidade</NavLink>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header