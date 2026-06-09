import { useState } from "react"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import bannerVideo from "../assets/tempestade.mp4"

export default function Home() {
  const [form, setForm] = useState({ username: "", email: "", senha: "" })
  const [carregando, setCarregando] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleCadastro() {
    setCarregando(true)

    try {
      const res = await fetch("http://localhost:3000/auth/cadastrar", {
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
            <Link
              to="/prevencao"
              className="font-display bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all text-lg text-center"
            >
              Dicas de Prevenção
            </Link>
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

      {/* RESUMO DA SEMANA (DESIGN BENTO GRID PREMIUM) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto mt-20 md:mt-32 px-6"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-display inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 border border-blue-100">Panorama Geral</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Resumo da Semana</h2>
          </div>
          <Link to="/noticias"className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group 
          ">
            Ver todas as notícias
            <span className="bg-blue-100 p-2 rounded-full group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Destaque (Span 2) */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden group cursor-pointer shadow-2xl shadow-blue-900/20">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-400/30 transition-all duration-700"></div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">Alerta Urgente</span>
              <h3 className="font-display font-extrabold text-3xl lg:text-4xl text-white mb-4 max-w-lg leading-tight">Temporal histórico atinge o litoral norte de SP</h3>
              <p className="text-blue-100/80 text-lg max-w-lg leading-relaxed mb-8">Índices pluviométricos batem recorde e causam alagamentos extremos. Vias principais seguem interditadas na região metropolitana da baixada.</p>
              <Link to="/noticias" className="inline-flex items-center gap-3 text-white font-bold bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl backdrop-blur-md transition-colors border border-white/10">
                Acompanhar Cobertura <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Card Secundário 1 */}
          <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 relative overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">🚁</div>
              <h3 className="font-display font-bold text-slate-800 text-2xl mb-3 leading-snug">Resgates em Ubatuba</h3>
              <p className="text-slate-500 leading-relaxed text-lg">Ação rápida e ostensiva do Corpo de Bombeiros salva 40 famílias após enchentes no fim de semana.</p>
            </div>
          </motion.div>

          {/* Card Secundário 2 */}
          <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 relative overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">⚠️</div>
              <h3 className="font-display font-bold text-slate-800 text-2xl mb-3 leading-snug">Risco de Deslizamentos</h3>
              <p className="text-slate-500 leading-relaxed text-lg">Defesa Civil decreta Estado de Atenção na serra e recomenda evacuação de áreas de risco nas próximas 48h.</p>
            </div>
          </motion.div>

          {/* Card Horizontal (Span 2) */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 bg-gradient-to-r from-slate-50 to-white rounded-3xl p-8 relative overflow-hidden group cursor-pointer border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.06)] transition-all duration-500">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex-1">
                <span className="inline-block px-4 py-1.5 bg-slate-200/70 text-slate-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4">Trânsito & Vias</span>
                <h3 className="font-display font-bold text-slate-800 text-2xl md:text-3xl mb-3">Queda de árvores nas rodovias</h3>
                <p className="text-slate-500 text-lg max-w-xl">Múltiplas quedas registradas na Rodovia Rio-Santos devido aos ventos de 80km/h. Trânsito operando no sistema pare-e-siga.</p>
              </div>
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 border border-slate-50 shrink-0">
                🌲
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* INFORMAÇÕES VITAIS (CARDS EXPANSIVOS SOFISTICADOS) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto mt-24 md:mt-32 px-6"
      >
        <div className="text-center mb-16">
          <span className="font-display text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">Educação e Prevenção</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mt-6 tracking-tight">O conhecimento que salva vidas.</h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mt-6">Manuais interativos e diretrizes oficiais da Defesa Civil para você proteger sua família antes, durante e depois da tempestade.</p>
        </div>

        <Link to="/prevencao" className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: "Guia de Prevenção", desc: "Aprenda a criar um kit de emergência, proteger documentos importantes e fortificar sua residência antes da chegada de ciclones e tempestades severas.", color: "from-emerald-700 via-teal-900 to-slate-900", icon: "🛡️" },
            { title: "Sistema de Alertas", desc: "Entenda a diferença entre Alerta Amarelo, Laranja e Vermelho. Saiba como receber notificações prioritárias diretamente via SMS ou Push.", color: "from-blue-700 via-indigo-900 to-slate-900", icon: "🚨" },
            { title: "Rotas Seguras", desc: "Mapeamento em tempo real de áreas de alto risco, ruas com histórico de alagamento e rotas de evacuação em direção aos abrigos municipais.", color: "from-amber-700 via-orange-900 to-slate-900", icon: "🗺️" },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative h-[380px] lg:h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-all duration-700 bg-gradient-to-br ${card.color}`}
            >
              {/* Efeito de Brilho Dinâmico simulando vidro iluminado */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-all duration-700 group-hover:scale-150"></div>

              {/* Vignette escura na base para garantir leitura */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent pointer-events-none"></div>

              {/* Ícone no topo */}
              <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center text-2xl shadow-lg opacity-80 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">
                {card.icon}
              </div>

              {/* Conteúdo Inferior com Efeito Parallax/Reveal */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-out z-10">
                <div className="w-12 h-1 bg-white/30 rounded-full mb-6 group-hover:w-24 group-hover:bg-white/80 transition-all duration-700"></div>
                <h3 className="font-display font-extrabold text-3xl lg:text-4xl text-white mb-4 drop-shadow-md">{card.title}</h3>
                <p className="text-slate-200/90 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  {card.desc}
                </p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                  <span className="inline-flex items-center gap-3 text-white font-bold bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                    Ler Material Completo <span className="text-xl">↗</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </Link>
      </motion.section>



      {/* COMUNIDADE */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-32 py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-blue-950 mb-6 leading-tight">
              Junte-se à nossa comunidade
            </h2>
            <p className="text-slate-600 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Compartilhe informações em tempo real, receba atualizações dos seus vizinhos e construa uma rede de proteção civil junto conosco.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Link
    to="/comunidade"
    className="inline-block font-display bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-lg"
  >
    Entrar na Comunidade
  </Link>
</motion.div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[500px] lg:max-w-[600px]">
              {/* Efeito de brilho sutil atrás da foto */}
              <div className="absolute inset-0 bg-blue-400 rounded-3xl blur-[40px] opacity-20 -z-10"></div>

              <motion.img
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-[400px] lg:h-[450px] object-cover rounded-3xl shadow-2xl border border-white/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-500"
                alt="Comunidade Unida"
              />

              {/* Badge Flutuante */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop" alt="User 1" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop" alt="User 2" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop" alt="User 3" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Membros Ativos</p>
                  <p className="font-display font-bold text-slate-900">+1.240</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* SEÇÃO DE CADASTRO PREMIUM */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mt-20 mb-20 px-6"
      >
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
      </motion.section>
    </div>
  )
}