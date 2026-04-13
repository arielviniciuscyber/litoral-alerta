import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Noticias from "./pages/Noticias"
import Prevencao from "./pages/Prevencao"
import Comunidade from "./pages/Comunidade"
import SobreNos from './pages/SobreNos'

export default function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/prevencao" element={<Prevencao />} />
        <Route path="/comunidade" element={<Comunidade />} />
      </Routes>

      <Footer />
    </>
  )
}