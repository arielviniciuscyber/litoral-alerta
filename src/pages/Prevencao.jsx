import ambulanciaVideo from "../assets/ambulancia.mp4";

export default function Prevencao() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vídeo de fundo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={ambulanciaVideo}
        />

        {/* Overlay cinematográfico em camadas */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-blue-950/20"></div>

        <div className="relative text-white max-w-4xl px-6 flex flex-col items-center text-center z-10">
          {/* Badge */}
          <div className="font-display flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider uppercase">Guia de Prevenção</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Atuando em
            <span className="block text-blue-400">Emergências</span>
          </h1>

          <p className="font-display mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            Seu guia de confiança na preparação para desastres, resposta a
            emergências e reconstrução de comunidades para um futuro mais
            resiliente.
          </p>

          <a href="#tempestades" className="font-display mt-10 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-lg">
            Explorar Guia Completo
          </a>
        </div>

        {/* Indicador de Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="font-display text-xs uppercase tracking-widest font-semibold">Role para baixo</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SEÇÃO INTRODUTÓRIA
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1">
            <span className="font-display text-sm font-bold text-blue-600 uppercase tracking-wider">Proteção Civil</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
              Sua proteção contra
              <span className="text-blue-600"> tempestades</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Salvar vidas, aliviar o sofrimento e proteger a dignidade humana
              durante e após emergências e desastres. A prevenção é a melhor arma
              contra a força da natureza.
            </p>
          </div>
          <div className="w-full max-w-sm bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-display font-bold text-xl mb-3">Dica Rápida</h3>
            <p className="text-slate-300 leading-relaxed">
              Em caso de tempestade severa, procure abrigo imediatamente e evite
              áreas abertas, árvores e estruturas metálicas. Sua segurança vem
              em primeiro lugar.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TEMPESTADES
      ═══════════════════════════════════════════════════════════ */}
      <section id="tempestades" className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-sm font-bold text-red-500 uppercase tracking-wider">⛈️ Tempestades</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 mt-3">
              Como se proteger durante uma tempestade
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-red-100 text-red-600 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-extrabold font-display">1</span>
                <h3 className="font-display text-xl font-bold text-slate-900">Procure abrigo seguro</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">Evite permanecer ao ar livre, especialmente em áreas abertas como campos, praias ou topo de morros.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">O local mais seguro é dentro de uma construção protegida (casa, prédio) ou veículo fechado.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">Fique longe de janelas e portas durante ventos fortes e queda de granizo.</p>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-amber-100 text-amber-600 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-extrabold font-display">2</span>
                <h3 className="font-display text-xl font-bold text-slate-900">Evite objetos que atraem raios</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">Evite ficar perto de objetos metálicos, lugares úmidos, árvores isoladas e torres metálicas.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">Não fique próximo de objetos que possam cair como postes, placas, antenas e estruturas frágeis.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">Se estiver em área aberta, agache-se com os pés juntos e a cabeça entre os joelhos.</p>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-extrabold font-display">3</span>
                <h3 className="font-display text-xl font-bold text-slate-900">Proteção dentro de casa</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">Retire do jardim antenas e objetos soltos que possam ser arremessados pelo vento.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">Não use chuveiro, torneiras ou telefones com fio — a água e os fios conduzem eletricidade.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">Desconecte aparelhos elétricos desnecessários e ative os para-raios e fusíveis corretamente.</p>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-emerald-100 text-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-extrabold font-display">4</span>
                <h3 className="font-display text-xl font-bold text-slate-900">Kit de emergência</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">Mantenha uma lanterna, pilhas extras e rádio portátil sempre acessíveis em sua residência.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">Tenha sempre água potável, alimentos não perecíveis e medicamentos essenciais estocados.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0"></span>
                  <p className="text-slate-600">Guarde documentos importantes (RG, CPF, certidões) em um saco plástico impermeável.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ENCHENTES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-sm font-bold text-blue-600 uppercase tracking-wider">🌊 Enchentes</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 mt-3">
              Como se proteger durante enchentes
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all relative">
              <div className="absolute top-6 right-6 font-display text-6xl font-extrabold text-blue-100">01</div>
              <div className="relative z-10">
                <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6">⚠️</div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Evite áreas alagadas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></span>
                    <p className="text-slate-600 text-sm">Não trafegue com veículos por ruas alagadas — mesmo lâminas d'água rasas podem arrastar carros.</p>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></span>
                    <p className="text-slate-600 text-sm">Nunca atravesse a pé. Pode ser extremamente perigoso mesmo em água aparentemente rasa.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all relative">
              <div className="absolute top-6 right-6 font-display text-6xl font-extrabold text-blue-100">02</div>
              <div className="relative z-10">
                <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6">⬆️</div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Busque locais altos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></span>
                    <p className="text-slate-600 text-sm">Se a água começar a subir dentro de casa, suba para andares superiores imediatamente.</p>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></span>
                    <p className="text-slate-600 text-sm">Leve documentos importantes, remédios e água potável para o ponto mais alto possível.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all relative">
              <div className="absolute top-6 right-6 font-display text-6xl font-extrabold text-blue-100">03</div>
              <div className="relative z-10">
                <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6">🔔</div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Fique atento aos alertas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></span>
                    <p className="text-slate-600 text-sm">Acompanhe os comunicados da Defesa Civil e canais governamentais. Fique atento a alarmes sonoros.</p>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></span>
                    <p className="text-slate-600 text-sm">Se receber ordem de evacuação, saia imediatamente. Não volte para buscar pertences.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DESLIZAMENTOS (CONTEÚDO EXTRA)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-sm font-bold text-amber-400 uppercase tracking-wider">🏔️ Deslizamentos</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-3">
              Prevenção contra deslizamentos de terra
            </h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Sinais de Alerta */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-3xl mb-4">👀</div>
              <h3 className="font-display text-xl font-bold mb-4">Sinais de alerta</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <p className="text-slate-300">Trincas e rachaduras no solo, paredes ou muros de arrimo da sua residência.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <p className="text-slate-300">Portas e janelas que travam ou desalinham sem motivo aparente.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <p className="text-slate-300">Água barrenta brotando do chão ou de taludes (barrancos).</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <p className="text-slate-300">Árvores ou postes inclinando-se repentinamente.</p>
                </li>
              </ul>
            </div>

            {/* Card O que fazer */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-3xl mb-4">🚨</div>
              <h3 className="font-display text-xl font-bold mb-4">O que fazer</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <p className="text-slate-300">Saia imediatamente do local e vá para uma área plana e segura, longe de encostas.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <p className="text-slate-300">Ligue para a Defesa Civil (199) ou Corpo de Bombeiros (193) e informe a situação.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <p className="text-slate-300">Nunca tente resgatar pertences durante um deslizamento ativo.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <p className="text-slate-300">Avise seus vizinhos para que também evacúem a área de risco.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NÚMEROS DE EMERGÊNCIA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-sm font-bold text-blue-600 uppercase tracking-wider">📞 Contatos</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 mt-3">
              Números de Emergência
            </h2>
            <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">Salve esses contatos no seu celular. Cada segundo conta durante uma emergência.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-3">🚒</div>
              <p className="font-display text-3xl font-extrabold text-red-600">193</p>
              <p className="text-sm text-slate-600 mt-2 font-semibold">Corpo de Bombeiros</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-3">🛡️</div>
              <p className="font-display text-3xl font-extrabold text-blue-600">199</p>
              <p className="text-sm text-slate-600 mt-2 font-semibold">Defesa Civil</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-3">🚑</div>
              <p className="font-display text-3xl font-extrabold text-emerald-600">192</p>
              <p className="text-sm text-slate-600 mt-2 font-semibold">SAMU</p>
            </div>
            <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-3">🚔</div>
              <p className="font-display text-3xl font-extrabold text-violet-600">190</p>
              <p className="text-sm text-slate-600 mt-2 font-semibold">Polícia Militar</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-6">
            Prevenção salva vidas
          </h2>
          <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Compartilhe essas informações com sua família, amigos e vizinhos. 
            Juntos podemos construir uma comunidade mais preparada e resiliente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/comunidade" className="font-display bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition-all text-lg">
              Entrar na Comunidade
            </a>
            <a href="/" className="font-display bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all text-lg">
              Voltar ao Início
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
