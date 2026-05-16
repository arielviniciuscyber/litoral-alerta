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
        <div className="relative text-white max-w-3xl px-4 md:px-2 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-14 text-center md:text-left tracking-wide drop-shadow-lg w-full">Sobre nós</h1>
          <p className="text-lg md:text-2xl md:pl-6 text-blue-50 leading-relaxed">
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
          <button className="mt-8 md:mt-15 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-blue-500/40 transition-all hover:-translate-y-1 mx-auto md:mx-0 md:ml-6">
            Conhecer equipe
          </button>
        </div>
      </div>

      <div className="bg-blue-400 text-blue-100 py-10 md:py-20 px-6 md:px-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-900 tracking-wide">Nossa Missão</h1>
        <h2 className="text-xl md:text-3xl text-center mb-10 md:mb-16 text-blue-900 italic">
          informar e salvar vidas através da tecnologia
        </h2>

        <div className="flex flex-col md:flex-row gap-7 justify-center items-center">
          <div className="bg-white rounded-xl p-8 md:p-15 text-center w-full max-w-[350px] shadow-xl shadow-blue-950/30 hover:-translate-y-2 transition-transform">
            <div className="text-4xl mb-3">⚠️</div>
            <h3 className="font-bold text-2xl mb-2 text-blue-900 ">
              Alertas em tempo real
            </h3>
            <p className="text-blue-800 text-lg">Notificação rápida e precisa</p>
          </div>

          <div className="bg-white rounded-xl p-8 md:p-15 text-center w-full max-w-[350px] shadow-xl shadow-blue-950/30 hover:-translate-y-2 transition-transform">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-bold text-2xl mb-2 text-blue-900">
              Dicas de prevenção
            </h3>
            <p className="text-blue-800 text-lg">Orientação para sua segurança</p>
          </div>

          <div className="bg-white rounded-xl p-8 md:p-15 text-center w-full max-w-[350px] shadow-xl shadow-blue-950/30 hover:-translate-y-2 transition-transform">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="font-bold text-2xl mb-2 text-blue-900">
              Apoio à comunidade
            </h3>
            <p className="text-blue-800 text-lg">Auxílio em momentos de crise</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50">
        <h1 className="text-bold text-center text-blue-900 text-4xl p-9 tracking-wide">
          Nossa Equipe
        </h1>
        <h2 className="text-3xl text-center mb-16 text-slate-500 italic">
          Conheça as pessoas por tras do nosso projeto
        </h2>
      </div>
     
      <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-20 p-10 md:p-20 justify-center items-center bg-slate-50">
        {/* Card Luan */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl w-64 text-center shadow-xl hover:-translate-y-2 transition-transform border border-slate-700">
          <img src="/src/assets/luan.png" alt="Foto de luan" className="rounded-t-xl" />
          <div className="px-4 pt-4 pb-4">
            <h3 className="font-bold text-2xl mb-2 text-white">Luan Martins</h3>
            <p className="text-white text-lg italic">UX/UI Designer</p>
          </div>
        </div>

        {/* Card Ariel */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl overflow-hidden w-64 text-center shadow-xl hover:-translate-y-2 transition-transform border border-slate-700">
          <img src="/src/assets/ariel.png" alt="Foto de ariel" />
          <div className="p-6">
            <h3 className="font-bold text-2xl mb-2 text-white">Ariel Teixeira</h3>
            <p className="text-white text-lg italic">Dev Frontend</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl overflow-hidden w-64 text-center shadow-xl hover:-translate-y-2 transition-transform border border-slate-700">
          <img src="/src/assets/perfil2.png" alt="Foto" />
          <div className="p-6">
            <h3 className="font-bold text-2xl mb-2 text-white">Vanessa Gomes</h3>
            <p className="text-white text-lg italic">Dev Backend</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl overflow-hidden w-64 text-center shadow-xl hover:-translate-y-2 transition-transform border border-slate-700">
          <img src="/src/assets/perfil2.png" alt="Foto" />
          <div className="p-6">
            <h3 className="font-bold text-2xl mb-2 text-white">Marcelo</h3>
            <p className="text-white text-lg italic">Dev Mobile</p>
          </div>
        </div>

      </div>
    </div>
  );
}