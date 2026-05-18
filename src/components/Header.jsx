import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import notificações from '../assets/notificações.png'
import perfil from '../assets/perfil.png'

function linkClass({ isActive }) {
  return isActive
    ? "border-b-2 border-b border-blue-500 text-blue-500"
    : "text-white hover:text-blue-500"
}

function linkClassMobile({ isActive }) {
  return isActive
    ? "text-blue-400 font-bold border-b border-blue-400 pb-1"
    : "text-white hover:text-blue-400 font-bold"
}

function Header() {
  const navigate = useNavigate()
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <>
      <header className="h-20 bg-[#0F172A] text-blue-500 flex items-center p-4 relative z-50">
        <img src={logo} alt="Logo" className="w-40" cursor={"pointer"} onClick={() => navigate("/")} />

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-32 flex-1 justify-center font-bold">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/noticias" className={linkClass}>Notícias</NavLink>
          <NavLink to="/sobrenos" className={linkClass}>Sobre Nós</NavLink>
          <NavLink to="/prevencao" className={linkClass}>Prevenção</NavLink>
          <NavLink to="/comunidade" className={linkClass}>Comunidade</NavLink>
        </nav>

        {/* ÍCONES DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">

          {/* BOTÃO NOTIFICAÇÕES */}
          <button
            onClick={() => navigate("/notificacoes")}
            className="hover:scale-110 transition"
          >
            <img
              src={notificações}
              alt="Notificações"
              className="w-6 h-6"
            />
          </button>

          {/* BOTÃO PERFIL */}
          <button
            onClick={() => navigate("/login")}
            className="w-10 h-10 rounded-full mr-4 overflow-hidden hover:ring-2 hover:ring-blue-500 transition"
          >
            <img
              src={perfil}
              alt="Perfil"
              className="w-full h-full object-cover"
            />
          </button>
        </nav>

        {/* BOTÃO HAMBURGER */}
        <button
          className="md:hidden ml-auto flex flex-col gap-1.5 p-2"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuAberto ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuAberto ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuAberto ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* MENU MOBILE */}
        {menuAberto && (
          <div className="absolute top-20 left-0 w-full bg-[#0F172A] z-50 flex flex-col px-6 py-6 gap-6 shadow-xl border-t border-blue-900 md:hidden">

            {/* PERFIL E NOTIFICAÇÕES */}
            <div className="flex items-center gap-4 border-b border-blue-900 pb-4">

              {/* PERFIL */}
              <button
                onClick={() => {
                  navigate("/login")
                  setMenuAberto(false)
                }}
                className="w-12 h-12 rounded-full overflow-hidden hover:ring-2 hover:ring-blue-500 transition"
              >
                <img
                  src={perfil}
                  alt="Perfil"
                  className="w-full h-full object-cover"
                />
              </button>

              <span className="text-white font-bold">Meu Perfil</span>

              {/* NOTIFICAÇÕES */}
              <button
                onClick={() => {
                  navigate("/notificacoes")
                  setMenuAberto(false)
                }}
                className="ml-auto hover:scale-110 transition"
              >
                <img
                  src={notificações}
                  alt="Notificações"
                  className="w-6 h-6"
                />
              </button>
            </div>

            {/* LINKS */}
            <NavLink
              to="/"
              className={linkClassMobile}
              onClick={() => setMenuAberto(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/noticias"
              className={linkClassMobile}
              onClick={() => setMenuAberto(false)}
            >
              Notícias
            </NavLink>

            <NavLink
              to="/sobrenos"
              className={linkClassMobile}
              onClick={() => setMenuAberto(false)}
            >
              Sobre Nós
            </NavLink>

            <NavLink
              to="/prevencao"
              className={linkClassMobile}
              onClick={() => setMenuAberto(false)}
            >
              Prevenção
            </NavLink>

            <NavLink
              to="/comunidade"
              className={linkClassMobile}
              onClick={() => setMenuAberto(false)}
            >
              Comunidade
            </NavLink>

          </div>
        )}
      </header>
    </>
  )
}

export default Header