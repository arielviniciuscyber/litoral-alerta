import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import notificações from '../assets/notificações.png'
import perfil from '../assets/perfil.png'

function linkClass({ isActive }) {
  return isActive ? "border-b-2 border-b" : "text-white hover:text-blue-500"
}

function Header() {
  const navigate = useNavigate()

  return (
    <header className="h-20  bg-[#0F172A] text-blue-500 flex items-center p-4">
      <img src={logo} alt="Logo" className="w-40" />

      <nav className="flex items-center gap-32 flex-1 justify-center font-bold">
        <NavLink to="/noticias" className={linkClass}>Notícias</NavLink>
        <NavLink to="/sobrenos" className={linkClass}>Sobre Nós</NavLink>
        <NavLink to="/prevencao" className={linkClass}>Prevenção</NavLink>
        <NavLink to="/comunidade" className={linkClass}>Comunidade</NavLink>
      </nav>

      {/* NOTIFICAÇÕES */}
      <nav className="flex items-center gap-10">
        <a href="#">
          <img src={notificações} alt="Notificações" className="w-6 h-6" />
        </a>

        {/* PERFIL DO USUÁRIO */}
        <button
          onClick={() => navigate("/login")}
          className="w-10 h-10 rounded-full mr-4 overflow-hidden hover:ring-2 hover:ring-blue-500 transition"
        >
          <img src={perfil} alt="Perfil" className="w-full h-full object-cover" />
        </button>
      </nav>
    </header>
  )
}

export default Header 
