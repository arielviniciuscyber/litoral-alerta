import banner from "../assets/bannerprevencao.png";

export default function Prevencao() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <div
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-white max-w-3xl px-2">
          <div className="relative text-white max-w-3xl px-2 flex items-center gap-4">
            <h1 className="text-6xl font-bold whitespace-nowrap">
              Atuando em emergências
            </h1>
            <span className="w-1 h-18 bg-blue-500 inline-block" />
          </div>
          <p className="text-2xl leading-relaxed mt-15 font-semibold">
            Seu site de confiança na preparação para desastres, resposta a
            emergências e reconstrução de comunidades para um futuro mais
            resiliente.
          </p>
          <button className="mt-15 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
            Saber Mais
          </button>
        </div>
      </div>

 {/* SEÇÃO - Proteção contra tempestades (intro) */}
      <div className="max-w-5xl mx-auto px-8 py-16 flex gap-12 items-start">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-9 mt-25">
            Sua proteção contra tempestades
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Salvar vidas, aliviar o sofrimento e proteger a dignidade humana
            durante e após emergências e desastres.
          </p>
        </div>
        <div className="w-72 bg-gray-200 border border-gray-200 rounded-xl p-6 flex gap-4 items-start mt-27">
          <p className="text-black text-sm text-justify">
            Em caso de tempestade severa, procure abrigo imediatamente e evite
            áreas abertas, árvores e estruturas metálicas.
          </p>
        </div>
      </div>

      {/* BANNER - Como se proteger durante uma tempestade */}
      <div className="bg-gray-300 mt-25 px-32 py-10">
        <h2 className="text-5xl font-semibold text-black text-center mt-15">
          Como se proteger durante uma tempestade
        </h2>
        <div className="border-b-4 w-250 border-red-500 mt-5 mx-auto" />

        {/* CONTEÚDO - Tempestade */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Seção 1 - caixa na esquerda, texto na direita */}
          <h3 className="text-4xl font-bold text-gray-800 mb-9 mt-15">
            1. Procure abrigo seguro imediatamente
          </h3>
          <div className="flex gap-8 items-start mb-10">
            <div className="w-56 bg-white border border-gray-400 rounded-xl p-4 shrink-0">
              <p className="text-red-500 font-bold text-sm mb-2">DICA:</p>
              <p className="text-black text-sm">
                Busque um local fechado e seguro imediatamente.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-3 pl-4 text-xl">
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 mt-2 shrink-0"></span>
                <p className="text-black">
                  Evite permanecer ao ar livre, especialmente em áreas abertas
                  como campos, praias ou topo de morros.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 mt-2 shrink-0"></span>
                <p className="text-black">
                  O local mais seguro é dentro de uma construção protegida
                  (casa, prédio) ou veículo fechado.
                </p>
              </div>
            </div>
          </div>

           {/* Seção 2 */}
      <h3 className="text-4xl font-bold text-gray-800 mb-4 mt-22">2. Evite objetos e estruturas que atraem raios</h3>
      <div className="flex gap-8 items-start mb-10">
        <div className="flex-1 flex flex-col gap-3 pl-4 text-xl">
          <div className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-red-500 mt-2 shrink-0"></span>
            <p className="text-black">Evite ficar perto de objetos metálicos, lugares úmidos, árvores isoladas, torres metálicas.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-red-500 mt-2 shrink-0"></span>
            <p className="text-black">Não fique próximo de objetos que possam cair como árvores, postes, placas, antenas, estruturas frágeis, paredes e telhados.</p>
          </div>
        </div>
        <div className="w-56 bg-white border border-gray-400 rounded-xl p-4 shrink-0">
          <p className="text-red-500 font-bold text-sm mb-2">DICA:</p>
          <p className="text-black text-sm">Mantenha distância de estruturas altas e objetos que conduzem eletricidade.</p>
        </div>
      </div>  
        </div>

        {/* BANNER - Se prevenir dentro de casa (sem fundo colorido, só texto centralizado) */}
        <div className="py-10 px-8 ">
          <h2 className="text-5xl font-bold text-4xl text-center tracking-wide mt-10">
            Se prevenir dentro de casa
          </h2>
            <div className="border-b-4 w-180 border-red-500 mt-5 mx-auto" />

        </div>

        {/* CONTEÚDO - Dentro de casa */}
        <div className="max-w-4xl mx-auto px-8 py-12 mt-10">
          <h3 className="text-3xl font-bold text-black mb-4">
            1. Retire objetos e estruturas que atraem raios
          </h3>
          <div className="flex flex-col gap-3 mb-10 pl-4">
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500 mt-11 shrink-0"></span>
              <p className="text-black mt-9 text-xl">
                Retire do jardim, antenas e objetos soltos que possam ser
                arremessados pelo vento.
              </p>
            </div>
            <div className="flex items-start gap-3 mt-5">
              <span className="w-3 h-3 rounded-full bg-red-500 mt-3 shrink-0"></span>
              <p className="text-black text-xl">
                Não usar: Chuveiro ou torneiras (água conduz eletricidade),
                Telefones com fio Eletrodomésticos ligados à tomada.
              </p>
            </div>
            <div className="flex items-start gap-3 mt-5">
              <span className="w-3 h-3 rounded-full bg-red-500 mt-3 shrink-0"></span>
              <p className="text-black text-xl">
                Desconecte aparelhos elétricos desnecessários. Ative os
                para-raios e fusíveis corretamente.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* BANNER - Como se proteger durante enchentes */}
      <div>
        <h1 className="text-4xl font-black text-center uppercase tracking-wide text-black mb-3 mt-35">
          Como se proteger durante enchentes !
        </h1>
        <div className="w-220 h-1 bg-red-600 mx-auto rounded" />
      </div>

      {/* CONTEÚDO - Enchentes */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Seção 1 */}
        <div className="border border-blue-900 rounded-xl mb-30 overflow-hidden mt-15 pb-10 relative left-[-25%] shadow-2xl bg-blue-50">
          <div className="flex items-center gap-4 px-6 py-4">
            <span className="bg-blue-900 text-white font-black text-lg w-9 h-9 flex items-center justify-center rounded-4xl mt-8">
              1
            </span>
            <h3 className="text-2xl font-black text-blue-950 uppercase tracking-wide mt-7">
              Evite áreas alagadas
            </h3>
          </div>
          <div className="flex flex-col gap-3 px-6 pb-5 mt-7">
            <div className="flex items-center gap-4 border border-blue-900 rounded-lg p-3 bg-white hover:scale-105 transition-transform duration-300">
              <div className="bg-red-600 rounded-full w-11 h-11 flex items-center justify-center text-xl shrink-0 -translate-y-1">
                ⚠️
              </div>
              <div className="w-0.5 h-10 bg-blue-500 shrink-0" />
              <p className="text-gray-900 text-xl">
                Não trafegue com veículos por ruas alagadas — mesmo lâminas
                d'água rasas podem arrastar carros completamente.
              </p>
            </div>
            <div className="flex items-center gap-4 border border-blue-900 rounded-lg p-3 mt-7 bg-white hover:scale-105 transition-transform duration-300">
              <div className="bg-red-600 rounded-full w-11 h-11 flex items-center justify-center text-xl shrink-0">
                🚶
              </div>
              <div className="w-0.5 h-10 bg-blue-500 shrink-0" />
              <p className="text-gray-900 text-xl">
                Nunca atravesse a pé. Pode ser extremamente perigoso mesmo em
                água aparentemente rasa.
              </p>
            </div>
          </div>
        </div>

        {/* Seção 2 */}

        <div className="border border-blue-900 rounded-xl mb-6 pb-10 -mt-9 relative left-[25%] shadow-2xl bg-blue-50">
          <div className="flex items-center gap-4 px-6 py-4 ">
            <span className="bg-blue-900 text-white font-black text-lg w-9 h-9 flex items-center justify-center rounded-4xl mt-7">
              2
            </span>
            <h3 className="text-2xl font-black text-blue-950 uppercase tracking-wide mt-7">
              Busque locais altos
            </h3>
          </div>
          <div className="flex flex-col gap-3 px-6 pb-5 mt-7">
            <div className="flex items-center gap-4 border border-blue-900 rounded-lg p-3 bg-white hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-950 rounded-full w-11 h-11 flex items-center justify-center text-xl shrink-0">
                ⬆️
              </div>
              <div className="w-0.5 h-10 bg-blue-400 shrink-0" />
              <p className="text-gray-900 text-xl">
                Se a água começar a subir dentro de casa, suba para andares
                superiores imediatamente.
              </p>
            </div>
            <div className="flex items-center gap-4 border border-blue-900 rounded-lg p-3 mt-7 bg-white hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-950 rounded-full w-11 h-11 flex items-center justify-center text-xl shrink-0">
                🪜
              </div>
              <div className="w-0.5 h-10 bg-blue-400 shrink-0" />
              <p className="text-gray-900 text-xl">
                Leve documentos importantes, remédios e água potável.
              </p>
            </div>
          </div>
        </div>

        {/* Seção 3 */}
        <div className="border border-blue-900 rounded-xl mb-6 overflow-hidden pb-10 mt-20 relative left-[-25%] shadow-2xl bg-blue-50 ">
          <div className="flex items-center gap-4 px-6 py-4 mt-7">
            <span className="bg-blue-900 text-white font-black text-lg w-9 h-9 flex items-center justify-center rounded-4xl">
              3
            </span>
            <h3 className="text-2xl font-black text-blue-950 uppercase tracking-wide ">
              Fique atento aos alertas oficiais
            </h3>
          </div>
          <div className="flex flex-col gap-3 px-6 pb-5">
            <div className="flex items-center gap-4 border border-blue-900 rounded-lg p-3 mt-7 bg-white hover:scale-105 transition-transform duration-300">
              <div className="bg-red-600 rounded-full w-11 h-11 flex items-center justify-center text-xl shrink-0">
                🔔
              </div>
              <div className="w-0.5 h-10 bg-blue-400 shrink-0 " />
              <p className="text-gray-900 text-xl ">
                Acompanhe os comunicados da Defesa Civil e canais governamentais
                e fique atento a alarmes sonoros.
              </p>
            </div>
            <div className="flex items-center gap-4 border border-blue-900 rounded-lg p-3 mt-7 bg-white hover:scale-105 transition-transform duration-300">
              <div className="bg-red-600 rounded-full w-11 h-11 flex items-center justify-center text-xl shrink-0">
                🌧️
              </div>
              <div className="w-0.5 h-10 bg-blue-400 shrink-0" />
              <p className="text-gray-900 text-xl">
                Se receber ordem de evacuação, saia imediatamente. Não volte
                para buscar pertences enquanto houver risco de inundação ou
                deslizamento.
              </p>
            </div>
          </div>
        </div>

        {/* Banner ajuda */}
        <div className="bg-blue-950 rounded-xl p-5 flex items-center gap-4 mt-25">
          <div className="bg-blue-800 rounded-full w-11 h-11 flex items-center justify-center text-xl shrink-0">
            📞
          </div>
          <div className="w-0.5 h-10 bg-blue-700 shrink-0" />
          <div>
            <p className="text-white font-black text-sm uppercase tracking-wide mb-1">
              Precisa de ajuda?
            </p>
            <p className="text-blue-200 text-sm">
              Em caso de emergência, ligue 199 (Defesa Civil) ou 193 (Corpo de
              Bombeiros).
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
}
