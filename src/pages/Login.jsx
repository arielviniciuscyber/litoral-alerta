import { useState } from "react";
import { Eye, EyeOff, User, Lock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../assets/icone-logo.png";
import BubbleBackground from "../components/BubbleBackground";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin(e) {
    e.preventDefault();

    if (!form.username || !form.password) {
      return toast.error("Preencha todos os campos.");
    }

    if (form.password.length < 4) {
      return toast.error("A senha deve ter pelo menos 4 caracteres.");
    }

    try {
      setLoading(true);

      // 🔥 SIMULAÇÃO (trocar por API depois)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (form.username !== "admin" || form.password !== "1234") {
        throw new Error("Usuário ou senha inválidos.");
      }

      toast.success("Login realizado com sucesso!");
      navigate("/home");

    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <BubbleBackground />

      {/* Botão Voltar */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-20 
        bg-white/10 backdrop-blur-xl border border-white/20 
        p-3 rounded-full shadow-lg 
        hover:scale-105 hover:bg-white/20 transition-all group"
      >
        <ArrowLeft className="text-white/70 group-hover:text-white transition-colors" size={20} />
      </button>

      {/* Card de Login */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-[420px] mx-4 md:mx-0 p-10 rounded-3xl 
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
      >

        {/* Logo e Título */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-blue-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-blue-500/20">
            <img src={logo} className="w-10 h-10" alt="Logo" />
          </div>
          <h1 className="font-display text-white text-3xl font-extrabold tracking-tight">
            Bem-vindo de volta
          </h1>
          <p className="text-slate-400 text-sm mt-2">Entre na sua conta para continuar</p>
        </div>

        {/* Input Usuário */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-slate-400 mb-2 block ml-1 uppercase tracking-wider">Usuário</label>
          <div className="flex items-center bg-white/8 hover:bg-white/12 rounded-xl px-4 py-3.5 border border-white/10 focus-within:border-blue-500/50 focus-within:bg-white/10 transition-all">
            <User className="text-slate-500 mr-3 shrink-0" size={18} />
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Nome de usuário"
              className="w-full bg-transparent outline-none text-white placeholder-slate-500 text-sm"
            />
          </div>
        </div>

        {/* Input Senha */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-slate-400 mb-2 block ml-1 uppercase tracking-wider">Senha</label>
          <div className="flex items-center bg-white/8 hover:bg-white/12 rounded-xl px-4 py-3.5 border border-white/10 focus-within:border-blue-500/50 focus-within:bg-white/10 transition-all">
            <Lock className="text-slate-500 mr-3 shrink-0" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-transparent outline-none text-white placeholder-slate-500 text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-500 hover:text-white transition-colors ml-2 shrink-0"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Lembrar e Esqueceu */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-slate-600 accent-blue-500" id="lembrar" />          
            <label htmlFor="lembrar" className="text-slate-400 text-sm cursor-pointer">Lembrar-me</label>
          </div>
          <button type="button" className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors">
            Esqueceu a senha?
          </button>
        </div>

        {/* Botão Login */}
        <button
          type="submit"
          disabled={loading}
          className="font-display w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg
          shadow-lg shadow-blue-600/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed
          flex items-center justify-center gap-3"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Entrando...
            </>
          ) : "Entrar"}
        </button>

        {/* Divisor */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-xs text-slate-500 uppercase tracking-wider">ou</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Botão Cadastro */}
        <button
          type="button"
          onClick={() => navigate("/cadastro")}
          className="font-display w-full py-4 rounded-xl 
           bg-white/5 backdrop-blur-sm border border-white/15 
            text-white font-semibold text-lg
            hover:bg-white/10 transition-all"
        >
          Criar uma conta
        </button>
      </form>
    </div>
  );
}