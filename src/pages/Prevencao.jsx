import banner from "../assets/bannerprevencao.png"

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
                        <h1 className="text-6xl font-bold whitespace-nowrap">Atuando em emergências</h1>
                        <span className="w-1 h-18 bg-blue-500 inline-block" />
                    </div>
                    <p className="text-2xl leading-relaxed mt-15 font-semibold">
                        Seu site de confiança na preparação para desastres, resposta a emergências e reconstrução de comunidades para um futuro mais resiliente.
                    </p>
                    <button className="mt-15 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
                        Saber Mais
                    </button>
                </div>
            </div>

            {/* SEÇÃO - Proteção contra tempestades (intro) */}
            <div className="max-w-5xl mx-auto px-8 py-16 flex gap-12 items-start">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Sua proteção contra tempestades</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Tempestades podem chegar de forma rápida e inesperada. Estar preparado pode
                        fazer toda a diferença para você e sua família. Confira nossas orientações
                        e saiba como se proteger antes, durante e depois de uma tempestade.
                    </p>
                </div>
                <div className="w-72 bg-blue-50 border border-blue-200 rounded-xl p-6 flex gap-4 items-start">
                    <span className="text-3xl">🌩️</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Em caso de tempestade severa, procure abrigo imediatamente e evite áreas
                        abertas, árvores e estruturas metálicas.
                    </p>
                </div>
            </div>

            {/* BANNER - Como se proteger durante uma tempestade */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-5 px-8">
                <h2 className="text-3xl font-bold text-white text-center tracking-wide">
                    Como se proteger durante uma tempestade
                </h2>
            </div>

            {/* CONTEÚDO - Tempestade */}
            <div className="max-w-4xl mx-auto px-8 py-12">

                <h3 className="text-xl font-bold text-gray-800 mb-4">1. Procure abrigo seguro imediatamente</h3>
                <div className="flex flex-col gap-3 mb-10 pl-4">
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Dirija-se ao local seguro e sólido, evite janelas abertas, portas, varandas, muros e árvores. Procure o local mais afastado.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Permaneça longe de aparelhos elétricos enquanto houver raios, especialmente durante tempestades, evite o contato com água corrente.</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">2. Evite objetos e estruturas que atraem raios</h3>
                <div className="flex flex-col gap-3 mb-10 pl-4">
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Evite ficar perto de objetos metálicos, lugares úmidos, árvores isoladas, torres metálicas.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Não fique próximo de objetos que possam cair como árvores, postes, placas, antenas, estruturas frágeis, paredes e telhados.</p>
                    </div>
                </div>

            </div>

            {/* BANNER - Se prevenir dentro de casa (sem fundo colorido, só texto centralizado) */}
            <div className="py-10 px-8 border-t border-b border-gray-200">
                <h2 className="text-3xl font-bold text-gray-800 text-center tracking-wide">
                    Se prevenir dentro de casa
                </h2>
            </div>

            {/* CONTEÚDO - Dentro de casa */}
            <div className="max-w-4xl mx-auto px-8 py-12">

                <h3 className="text-xl font-bold text-gray-800 mb-4">1. Retire objetos e estruturas que atraem raios</h3>
                <div className="flex flex-col gap-3 mb-10 pl-4">
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Retire do jardim, antenas e objetos soltos que possam ser arremessados pelo vento.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Não saia: Avalie a estrutura antes. Verifique rachaduras, infiltrações e vazamentos. Reforce janelas e portas.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Desconecte aparelhos elétricos desnecessários. Ative os para-raios e fusíveis corretamente.</p>
                    </div>
                </div>

            </div>

            {/* SEÇÃO - Bloco informativo central */}
            <div className="bg-gray-50 border-y border-gray-200 py-12 px-8">
                <div className="max-w-5xl mx-auto flex gap-12 items-start">
                    <div className="flex-1">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Durante chuvas muito fortes algumas árvores que estão próximas da sua casa podem cair
                            e danificar sua residência. Para evitar isso, faça a manutenção periódica das árvores
                            do seu quintal e jardim. Remova galhos secos e peça para um profissional verificar
                            o estado das raízes e do tronco regularmente.
                        </p>
                    </div>
                    <div className="w-72 bg-white border border-blue-200 rounded-xl p-6 flex gap-4 items-start shadow-sm">
                        <span className="text-3xl">🛡️</span>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Tenha sempre um kit de emergência em casa com água, lanterna, documentos e
                            medicamentos essenciais. Isso pode salvar vidas em situações críticas.
                        </p>
                    </div>
                </div>
            </div>

            {/* BANNER - Como se proteger durante enchentes */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-5 px-8 mt-2">
                <h2 className="text-3xl font-bold text-white text-center tracking-wide">
                    Como se proteger durante enchentes
                </h2>
            </div>

            {/* CONTEÚDO - Enchentes */}
            <div className="max-w-4xl mx-auto px-8 py-12">

                <h3 className="text-xl font-bold text-gray-800 mb-4">1. Evite áreas alagadas</h3>
                <div className="flex flex-col gap-3 mb-10 pl-4">
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Não trafegue com veículos por ruas alagadas — mesmo lâminas d'água rasas podem arrastar carros completamente.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Nunca atravesse a pé. Pode ser extremamente perigoso mesmo em água aparentemente rasa.</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">2. Busque locais altos</h3>
                <div className="flex flex-col gap-3 mb-10 pl-4">
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Se a água começar a subir dentro de casa, suba para andares superiores imediatamente.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Leve documentos importantes, remédios e água potável.</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">3. Fique atento aos alertas oficiais</h3>
                <div className="flex flex-col gap-3 mb-10 pl-4">
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Acompanhe os comunicados da Defesa Civil e canais governamentais e fique atento a alarmes sonoros.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                        <p className="text-gray-600">Se receber ordem de evacuação, saia imediatamente. Não volte para buscar pertences enquanto houver risco de inundação ou deslizamento.</p>
                    </div>
                </div>

            </div>

            {/* BOTÃO FINAL */}
            <div className="flex justify-center pb-16">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg shadow-blue-300 transition-all hover:-translate-y-1">
                    Precisa de Ajuda?
                </button>
            </div>

        </div>
    )
}