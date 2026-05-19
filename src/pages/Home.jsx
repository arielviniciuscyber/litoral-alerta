import { useState } from "react"
import toast from "react-hot-toast"
import bannerVideo from "../assets/tempestade.mp4"
import prevencao from "../assets/cadastro.png"
import comunidade from "../assets/comunidade.png"

import hidrata from "../assets/use.png"
import alerta from "../assets/monitore.png"
import alagamento from "../assets/alagamento.png"

export default function Home() {
  const [form, setForm] = useState({ username: "", email: "", senha: "" })
  const [carregando, setCarregando] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleCadastro() {
    setCarregando(true)

    try {
      const res = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.erro || "Erro ao cadastrar")
        return
      }

      toast.success(`Usuário @${data.username} cadastrado com sucesso!`)
      setForm({ username: "", email: "", senha: "" })
    } catch {
      toast.error("Não foi possível conectar ao servidor.")
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div>
      {/* HERO */}
      <section className="h-screen relative overflow-hidden">
        <video 
          src={bannerVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay com gradiente cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"></div>

        {/* Conteúdo Central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-6 text-center">
          
          {/* Badge de Alerta */}
          <div className="font-display flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-5 py-2 rounded-full mb-8 animate-pulse">
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            <span className="text-sm font-bold tracking-wider uppercase">Alerta Ativo — Litoral Norte</span>
          </div>

          {/* Título Principal */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-4xl leading-tight tracking-tight">
            Protegendo vidas no
            <span className="block text-blue-400">Litoral Paulista</span>
          </h1>

          {/* Subtítulo */}
          <p className="font-display mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            Sistema de monitoramento em tempo real com alertas inteligentes para enchentes, deslizamentos e tempestades severas.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button 
              onClick={() => toast("Ação de emergência ativada!", { icon: "🚨" })}
              className="font-display bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all flex items-center justify-center gap-3 text-lg"
            >
              <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
              Acionar SOS
            </button>
            <a 
              href="/prevencao"
              className="font-display bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all text-lg text-center"
            >
              Dicas de Prevenção
            </a>
          </div>

          {/* Métricas Rápidas */}
          <div className="font-display flex flex-wrap justify-center gap-6 md:gap-12 mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-red-400">Alto</span>
              <span className="text-xs md:text-sm text-slate-400 mt-1 uppercase tracking-wider font-semibold">Nível de Risco</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-blue-400">80mm</span>
              <span className="text-xs md:text-sm text-slate-400 mt-1 uppercase tracking-wider font-semibold">Precipitação</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-amber-400">70%</span>
              <span className="text-xs md:text-sm text-slate-400 mt-1 uppercase tracking-wider font-semibold">Probabilidade</span>
            </div>
          </div>
        </div>

        {/* Indicador de Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="font-display text-xs uppercase tracking-widest font-semibold">Role para baixo</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      {/* RESUMO */}
      <section className="max-w-7xl mx-4 md:mx-auto mt-20 md:mt-25 bg-white rounded-xl shadow border border-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center bg-blue-200 rounded-t-xl py-3 px-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 w-full text-center">
            Resumo da semana
          </h2>
        </div>

        <div className="p-6">
          <ul className="space-y-3 text-bg text-xl">
            <li>📍 Temporal no litoral norte de SP causa alagamentos</li>
            <li className="mt-8">📍 Resgates em Ubatuba após enchentes</li>
            <li className="mt-8">📍 Deslizamentos deixam cidades em alerta</li>
            <li className="mt-8">📍 Queda de árvores registrada</li>
          </ul>

          <button className="mt-8 bg-blue-700 text-white px-6 py-2 rounded-lg flex">
            Saber mais
          </button>
        </div>
      </section>

      {/* PREVENÇÃO */}
      <section className="mt-10 px-6">
        <h2 className="text-center text-2xl font-semibold text-blue-900 mb-6 mt-25">
          Como você pode se prevenir?
        </h2>


        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <img src={hidrata} className="w-full h-auto object-cover rounded-xl shadow" />
        </div>

      </section>

      {/* ALERTAS */}
      <section className="mt-10 bg-blue-50 py-10">

        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <img src={alerta} className="w-full h-auto object-cover rounded-xl shadow" />
        </div>
      </section>

      {/* ALAGAMENTOS */}

      <section className="mt-10 py-10">

        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <img src={alagamento} className="w-full h-auto object-cover rounded-xl shadow" />
        </div>
      </section>



      {/* COMUNIDADE */}
      <section className="min-h-[20rem] py-10 md:py-0 md:h-80 bg-radial from-white from-10% to-sky-600 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative h-full flex flex-col md:flex-row items-center md:items-start gap-10 justify-center px-6 text-blue-900">
          <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 w-full md:w-1/2 md:mt-20">
            <h2 className="text-3xl md:text-4xl font-bold max-w-md">Faça parte da nossa comunidade e fique ligado em tudo que acontece no nosso litoral!</h2>
            <button className="mt-6 bg-white/50 text-blue-800 px-6 py-2 rounded-full font-bold hover:bg-white/80 transition-colors">
              <a href="http://localhost:5173/comunidade">Clique para entrar</a>
            </button>
          </div>
          <img src={comunidade} className="relative md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 w-full max-w-[300px] md:max-w-none md:w-[500px] md:h-80 object-contain z-0" />
        </div>

      </section>


      {/* SEÇÃO DE CADASTRO PREMIUM */}
      <section className="max-w-6xl mx-auto mt-20 mb-20 px-6">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* LADO ESQUERDO: COPY E BENEFÍCIOS */}
          <div className="bg-slate-900 text-white p-10 lg:p-14 lg:w-5/12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-600/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-[80px]"></div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 relative z-10 leading-tight">
              Nunca seja pego de surpresa.
            </h3>
            <p className="text-slate-300 mb-8 relative z-10 text-lg">
              Cadastre-se na nossa rede de proteção civil e receba informações vitais antes que a emergência aconteça.
            </p>
            
            <ul className="space-y-5 relative z-10">
              <li className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-2 rounded-full text-blue-400 text-sm">✅</div>
                <span className="font-medium text-slate-200">Alertas em tempo real via SMS e E-mail</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-2 rounded-full text-blue-400 text-sm">✅</div>
                <span className="font-medium text-slate-200">Acesso a rotas de fuga e abrigos seguros</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-2 rounded-full text-blue-400 text-sm">✅</div>
                <span className="font-medium text-slate-200">Previsões meteorológicas da Defesa Civil</span>
              </li>
            </ul>
          </div>

          {/* LADO DIREITO: FORMULÁRIO */}
          <div className="p-10 lg:p-14 lg:w-7/12 flex flex-col justify-center bg-slate-50">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Criar seu alerta pessoal</h3>
            
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-600 ml-1">Nome Completo</label>
                <input
                  className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm placeholder:text-slate-400"
                  placeholder="Ex: João da Silva"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-600 ml-1">Email Principal</label>
                <input
                  className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm placeholder:text-slate-400"
                  placeholder="joao@email.com"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-600 ml-1">Senha de Segurança</label>
                <input
                  className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm placeholder:text-slate-400"
                  type="password"
                  placeholder="••••••••"
                  name="senha"
                  value={form.senha}
                  onChange={handleChange}
                />
              </div>

              <button
                onClick={handleCadastro}
                disabled={carregando}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
              >
                {carregando ? (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processando...
                  </>
                ) : (
                  "Ativar Meus Alertas"
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}