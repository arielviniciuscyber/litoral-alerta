import { Routes, Route, useLocation } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Noticias from "./pages/Noticias"
import NoticiaDetalhe from "./pages/NoticiaDetalhe"
import Prevencao from "./pages/Prevencao"
import Comunidade from "./pages/Comunidade"
import SobreNos from './pages/SobreNos'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Error404 from "./pages/Error404";
import Notificacoes from './pages/Notificacoes'
import { Toaster } from 'react-hot-toast'

export default function App() {
  const location = useLocation();

  // páginas sem layout
  const hideLayout = ["/login", "/cadastro"].includes(
    location.pathname.toLowerCase()
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="bottom-right" toastOptions={{ duration: 4000, style: { background: '#1e293b', color: '#fff' } }} />
      {!hideLayout && <Header />}

      <main className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<NoticiaDetalhe />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/prevencao" element={<Prevencao />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}

    </div>
  )
}