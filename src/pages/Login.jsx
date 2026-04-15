export default function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">

      {/* Background */}
      <img
        src="/src/assets/fundo-login.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-lg">

        {/* Logo + título */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/src/assets/logo.png"
            alt="logo"
            className="w-8 mb-2"
          />
          <h1 className="text-white text-lg font-medium">Login</h1>
        </div>

        {/* Input usuário */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nome de usuário"
            className="w-full px-5 py-3 rounded-full bg-white text-gray-700 outline-none"
          />
        </div>

        {/* Input senha */}
        <div className="mb-2 relative">
          <input
            type="password"
            placeholder="Senha"
            className="w-full px-5 py-3 rounded-full bg-white text-gray-700 outline-none"
          />

          {/* Ícone (simples placeholder) */}
          <span className="absolute right-4 top-3 text-gray-500 cursor-pointer">
            👁️
          </span>
        </div>

        {/* Lembrar */}
        <div className="text-sm text-white mb-4 flex items-center gap-2">
          <input type="checkbox" />
          <span>Lembrar mais tarde</span>
        </div>

        {/* Esqueceu senha */}
        <p className="text-xs text-center text-white/80 mb-6">
          Esqueceu sua senha? Clique aqui
        </p>

        {/* Botão */}
        <div className="flex justify-end">
          <button className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow">
            →
          </button>
        </div>
      </div>

      {/* Cadastro */}
      <div className="absolute bottom-6 right-6">
        <button className="bg-white text-sm px-4 py-2 rounded-full shadow">
          Não tem um cadastro? Crie aqui →
        </button>
      </div>
    </div>
  );
}