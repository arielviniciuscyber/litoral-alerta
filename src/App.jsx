import { Routes, Route, useLocation } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Noticias from "./pages/Noticias"
import Prevencao from "./pages/Prevencao"
import Comunidade from "./pages/Comunidade"
import SobreNos from './pages/SobreNos'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Error404 from "./pages/Error404";

export default function App() {
  const location = useLocation();

  // páginas sem layout
  const hideLayout = ["/login", "/cadastro"].includes(
    location.pathname.toLowerCase()
  );

  return (
    <div className="min-h-screen flex flex-col">
      
      {!hideLayout && <Header />}

      <main className="flex-1">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/prevencao" element={<Prevencao />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}

    </div>
  )
}