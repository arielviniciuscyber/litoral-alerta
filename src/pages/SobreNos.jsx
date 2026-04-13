import fundo from "../assets/fundo-sobrenos.png";

export default function SobreNos() {
  return (
    <div>
      <div
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${fundo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-white max-w-3xl px-2">
          <h1 className="text-6xl font-bold mb-14 text-center">Sobre nós</h1>
          <p className="text-2xl leading-relaxed">
            Somos uma equipe do litoral comprometida com a segurança e o
            bem-estar da população. Diante dos riscos de enchentes, chuvas
            intensas e deslizamentos, atuamos levando informação clara e
            acessível para ajudar as pessoas a se prevenirem e reagirem melhor
            em situações de emergência. Nosso objetivo é conscientizar a
            comunidade por meio de orientações, alertas e conteúdos educativos,
            fortalecendo a cultura de prevenção e o cuidado coletivo.
            Acreditamos que a informação pode salvar vidas e contribuir para uma
            comunidade mais segura e preparada.
          </p>
          <button className="mt-15 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
            Conhecer equipe
          </button>
        </div>
      </div>

      <div className="bg-blue-300 text-blue-700 py-20 px-10">
        <h1 className="text-4xl font-bold mb-4 text-center">Nossa Missão</h1>
        <h2 className="text-3xl text-center mb-16 text-blue-700">
          informar e salvar vidas através da tecnologia
        </h2>

        <div className="flex gap-7 justify-center">

          <div className="bg-white rounded-xl p-15 text-center w-93">
            <div className="text-4xl mb-3">⚠️</div>
            <h3 className="font-bold text-2xl mb-2 text-black ">Alertas em tempo real</h3>
            <p className="text-black text-lg">Notificação rápida e precisa</p>
          </div>

          <div className="bg-white rounded-xl p-15 text-center w-93">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-bold text-2xl mb-2 text-black">Dicas de prevenção</h3>
            <p className="text-black text-lg">Orientação para sua segurança</p>
          </div>

          <div className="bg-white rounded-xl p-15 text-center w-93">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="font-bold text-2xl mb-2 text-black">Apoio à comunidade</h3>
            <p className="text-black text-lg">Auxílio em momentos de crise</p>
          </div>

        </div>
      </div>
      <div>
        <h1 className="text-bold text-center text-black text-4xl p-9">Nossa Equipe</h1>
        <h2 className="text-3xl text-center mb-16 text-black">
          Conheça as pessoas por tras do nosso projeto
        </h2>
      </div>
      {/* caixa da equipe */}
      <div>
        <div className="flex gap-7 justify-center"></div>

        <div className="bg-gray-800 rounded-xl p-15 text-center w-76">
            <h3 className="font-bold text-2xl mb-2 text-black ">Alertas em tempo real</h3>
            <p className="text-black text-lg">Notificação rápida e precisa</p>
          </div>
      </div>
    </div>
  );
}