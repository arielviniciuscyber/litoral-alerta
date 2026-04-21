import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center 
    bg-[url('/fundo-error404.png')] bg-cover bg-center bg-no-repeat overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🌧️ Chuva */}
      <div className="rain-container">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            className="drop"
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 0.5 + Math.random() * 0.7 + "s",
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl font-bold text-white drop-shadow-lg">404</h1>

        <h2 className="text-2xl mt-4 font-semibold text-white">
          Página não encontrada
        </h2>

        <p className="text-white/70 mt-3 max-w-md mx-auto">
          Ops! A página que você tentou acessar não existe ou foi removida.
        </p>

        <Link
          to="/home"
          className="mt-6 inline-block px-6 py-3 rounded-full 
          bg-white/90 text-gray-800 font-semibold 
          hover:scale-105 transition shadow-lg"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}