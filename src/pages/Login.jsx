import { useState } from "react";
import { Eye, EyeOff, User, Lock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icone-logo.png";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // Atualiza inputs
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // Simulação de login (depois você conecta com backend)
  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    // 🔴 Validação
    if (!form.username || !form.password) {
      return setError("Preencha todos os campos.");
    }

    if (form.password.length < 4) {
      return setError("A senha deve ter pelo menos 4 caracteres.");
    }

    try {
      setLoading(true);

      // 🔥 SIMULAÇÃO (trocar por API depois)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // EXEMPLO de validação fake
      if (form.username !== "admin" || form.password !== "1234") {
        throw new Error("Usuário ou senha inválidos.");
      }

      // ✅ sucesso
      navigate("/home");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[url('/fundo-login.png')] bg-cover bg-center bg-no-repeat">

      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔙 Botão voltar */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-20 
        bg-white/10 backdrop-blur-xl border border-white/30 
        p-3 rounded-full shadow-lg 
        hover:scale-105 hover:bg-white/20 transition"
      >
        <ArrowLeft className="text-white" size={20} />
      </button>

      {/* Card */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 w-95 p-8 rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl
        animate-fade-in"
      >

        {/* LOGO */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center">
            <img src={logo} className="max-w-full max-h-full" />
          </div>

          <h1 className="text-white text-2xl font-semibold mt-2">
            Login
          </h1>
        </div>

        {/* ERRO */}
        {error && (
          <div className="bg-red-500/20 text-red-200 text-sm p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* INPUT USER */}
        <div className="flex items-center bg-white/30 rounded-full px-4 py-3 mb-4">
          <User className="text-white mr-2" size={18} />
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Nome de usuário"
            className="w-full bg-transparent outline-none text-white placeholder-white/70"
          />
        </div>

        {/* INPUT SENHA */}
        <div className="flex items-center bg-white/30 rounded-full px-4 py-3 mb-4">
          <Lock className="text-white mr-2" size={18} />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Senha"
            className="w-full bg-transparent outline-none text-white placeholder-white/70"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="text-white" size={18} />
            ) : (
              <Eye className="text-white" size={18} />
            )}
          </button>
        </div>

        {/* CHECKBOX */}
        <div className="flex items-center text-white text-sm mb-4">
          <input type="checkbox" className="mr-2" />
          Lembrar mais tarde
        </div>

        {/* ESQUECI */}
        <p className="text-center text-white/80 text-sm mb-6 cursor-pointer hover:underline">
          Esqueceu sua senha? Clique aqui
        </p>

        {/* BOTÃO LOGIN */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-full bg-white text-gray-800 font-semibold 
          hover:scale-105 transition flex items-center justify-center"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

        {/* BOTÃO CADASTRO (GLASS) */}
        <button
          type="button"
          onClick={() => navigate("/cadastro")}
          className="w-full mt-4 py-3 rounded-full 
           bg-white/10 backdrop-blur-xl border border-white/30 
            text-white font-semibold 
            hover:scale-105 hover:bg-white/20 transition"
        >
          Criar conta
        </button>

      </form>
    </div>
  );
}