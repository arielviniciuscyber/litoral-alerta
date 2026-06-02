import nuvensVideo from "../assets/nuvens.mp4";
import luan from "../assets/luan.png"
import ariel from "../assets/ariel.png"
import perfil2 from "../assets/perfil2.png"
import { Link } from "react-router-dom"

export default function SobreNos() {
  const equipe = [
    { nome: "Luan Martins", cargo: "UX/UI Designer", foto: luan, desc: "Responsável por toda a experiência visual e interação do usuário na plataforma." },
    { nome: "Ariel Teixeira", cargo: "Dev Frontend", foto: ariel, desc: "Desenvolvedor da interface web, garantindo performance e responsividade." },
    { nome: "Vanessa Gomes", cargo: "Dev Backend", foto: perfil2, desc: "Arquiteta do servidor e banco de dados, mantendo a infraestrutura do sistema." },
    { nome: "Marcelo", cargo: "Dev Mobile", foto: perfil2, desc: "Criador do aplicativo móvel para alertas em tempo real no seu bolso." },
  ];

  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION — VÍDEO FULLSCREEN
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vídeo de fundo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={nuvensVideo}
        />

        {/* Overlay cinematográfico em camadas */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-transparent to-blue-950/40"></div>

        {/* Conteúdo do Hero */}
        <div className="relative text-white max-w-4xl px-6 flex flex-col items-center text-center z-10">
          <div className="font-display flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider uppercase">Quem Somos</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            Tecnologia que
            <span className="block text-blue-400 drop-shadow-lg">salva vidas</span>
          </h1>

          <p className="font-display mt-8 text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed font-medium drop-shadow-md">
            Somos uma equipe do litoral comprometida com a segurança e o
            bem-estar da população. Atuamos levando informação clara e
            acessível para ajudar as pessoas a se prevenirem em situações de emergência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a href="#equipe" className="font-display bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-lg">
              Conhecer Equipe
            </a>
            <a href="#missao" className="font-display bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all text-lg">
              Nossa Missão
            </a>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="font-display text-xs uppercase tracking-widest font-semibold">Role para baixo</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          NOSSA MISSÃO
      ═══════════════════════════════════════════════════════════ */}
      <section id="missao" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-sm font-bold text-blue-600 uppercase tracking-wider">🎯 Propósito</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 mt-3">Nossa Missão</h2>
            <p className="font-display mt-4 text-xl text-slate-500 italic max-w-xl mx-auto">
              Informar e salvar vidas através da tecnologia
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 border border-blue-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                <span className="group-hover:grayscale-0">⚠️</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-slate-900">Alertas em tempo real</h3>
              <p className="text-slate-600 leading-relaxed">
                Notificações rápidas e precisas sobre tempestades, enchentes e deslizamentos diretamente no seu dispositivo.
              </p>
            </div>

            <div className="bg-gradient-to-b from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-emerald-600 group-hover:scale-110 transition-all">
                <span className="group-hover:grayscale-0">🛡️</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-slate-900">Dicas de prevenção</h3>
              <p className="text-slate-600 leading-relaxed">
                Orientações práticas e comprovadas para garantir a segurança da sua família antes, durante e após emergências.
              </p>
            </div>

            <div className="bg-gradient-to-b from-rose-50 to-white rounded-2xl p-8 border border-rose-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-rose-600 group-hover:scale-110 transition-all">
                <span className="group-hover:grayscale-0">❤️</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-slate-900">Apoio à comunidade</h3>
              <p className="text-slate-600 leading-relaxed">
                Auxílio direto em momentos de crise, conectando pessoas a recursos e informações que fazem a diferença.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NOSSOS VALORES (NOVO)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-sm font-bold text-blue-400 uppercase tracking-wider">💡 Valores</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-3">No que acreditamos</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-display font-bold text-lg mb-2">Solidariedade</h3>
              <p className="text-sm text-slate-400">Ninguém enfrenta uma crise sozinho. Comunidade é tudo.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-display font-bold text-lg mb-2">Agilidade</h3>
              <p className="text-sm text-slate-400">Cada segundo conta. Informação rápida pode salvar vidas.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-display font-bold text-lg mb-2">Inovação</h3>
              <p className="text-sm text-slate-400">Usamos tecnologia de ponta para monitorar e prevenir desastres.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-display font-bold text-lg mb-2">Educação</h3>
              <p className="text-sm text-slate-400">Informação acessível é a base para uma comunidade preparada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          IMPACTO EM NÚMEROS (NOVO)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white">Nosso Impacto</h2>
            <p className="text-blue-200 mt-3 text-lg">Os números que nos motivam a continuar</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-extrabold text-white">4</p>
              <p className="text-blue-200 mt-2 font-semibold text-sm uppercase tracking-wider">Cidades monitoradas</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-extrabold text-white">24/7</p>
              <p className="text-blue-200 mt-2 font-semibold text-sm uppercase tracking-wider">Monitoramento</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-extrabold text-white">500+</p>
              <p className="text-blue-200 mt-2 font-semibold text-sm uppercase tracking-wider">Alertas enviados</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-extrabold text-white">1k+</p>
              <p className="text-blue-200 mt-2 font-semibold text-sm uppercase tracking-wider">Usuários cadastrados</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EQUIPE
      ═══════════════════════════════════════════════════════════ */}
      <section id="equipe" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-sm font-bold text-blue-600 uppercase tracking-wider">👥 Time</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 mt-3">Nossa Equipe</h2>
            <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
              Conheça as pessoas por trás do nosso projeto
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((membro, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={membro.foto} 
                    alt={`Foto de ${membro.nome}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display font-bold text-xl text-slate-900">{membro.nome}</h3>
                  <p className="font-display text-blue-600 font-semibold text-sm mt-1 uppercase tracking-wider">{membro.cargo}</p>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed">{membro.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LINHA DO TEMPO (NOVO)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-sm font-bold text-blue-600 uppercase tracking-wider">📅 Jornada</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 mt-3">Nossa Trajetória</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="space-y-0 relative">
            {/* Linha vertical central */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

            {[
              { data: "Março 2026", titulo: "A ideia nasceu", desc: "Um grupo de estudantes do litoral decidiu usar tecnologia para proteger a comunidade contra desastres naturais." },
              { data: "Abril 2026", titulo: "Primeiro protótipo", desc: "Desenvolvemos a primeira versão do sistema de alertas e prevenção, focando na experiência do usuário." },
              { data: "Maio 2026", titulo: "Lançamento oficial", desc: "O Litoral Alerta foi ao ar com monitoramento em tempo real, alertas e guias de prevenção completos." },
              { data: "Futuro", titulo: "O futuro", desc: "Expandir o sistema para todo o litoral brasileiro, integrar com órgãos oficiais e salvar ainda mais vidas." },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-6 md:gap-12 mb-12 relative ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-14 md:pl-0`}>
                  <span className="font-display text-sm font-bold text-blue-600 uppercase tracking-wider">{item.data}</span>
                  <h3 className="font-display text-xl font-bold text-slate-900 mt-1">{item.titulo}</h3>
                  <p className="text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow -translate-x-1/2 z-10"></div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-6">
            Faça parte dessa missão
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Cadastre-se na plataforma, compartilhe com seus vizinhos e ajude a construir uma rede de proteção para todo o litoral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cadastro" className="font-display bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-lg">
              Cadastrar-se Agora
            </Link>
            <Link to="/prevencao"
             className="font-display bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all text-lg">
              Ver Guia de Prevenção
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}