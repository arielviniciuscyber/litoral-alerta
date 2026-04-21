import { useState } from "react";
import { User, Lock, Mail, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icone-logo.png";

export default function Cadastro() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleRegister(e) {
    e.preventDefault();
    setError("");

    // 🔴 Validações
    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      return setError("Preencha todos os campos.");
    }

    if (!form.email.includes("@")) {
      return setError("Email inválido.");
    }

    if (form.password.length < 4) {
      return setError("A senha deve ter pelo menos 4 caracteres.");
    }

    if (form.password !== form.confirmPassword) {
      return setError("As senhas não coincidem.");
    }

    try {
      setLoading(true);

      // 🔥 Simulação (depois vira API)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // ✅ sucesso
      navigate("/login");

    } catch (err) {
      setError("Erro ao cadastrar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[url('/fundo-login.png')] bg-cover bg-center bg-no-repeat">

      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔙 Voltar */}
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
        onSubmit={handleRegister}
        className="relative z-10 w-[380px] p-8 rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl"
      >

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center">
            <img src={logo} className="max-w-full max-h-full" />
          </div>

          <h1 className="text-white text-2xl font-semibold mt-2">
            Cadastro
          </h1>
        </div>

        {/* Erro */}
        {error && (
          <div className="bg-red-500/20 text-red-200 text-sm p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Nome */}
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

        {/* Email */}
        <div className="flex items-center bg-white/30 rounded-full px-4 py-3 mb-4">
          <Mail className="text-white mr-2" size={18} />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-transparent outline-none text-white placeholder-white/70"
          />
        </div>

        {/* Senha */}
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

          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff className="text-white" size={18} />
            ) : (
              <Eye className="text-white" size={18} />
            )}
          </button>
        </div>

        {/* Confirmar senha */}
        <div className="flex items-center bg-white/30 rounded-full px-4 py-3 mb-6">
          <Lock className="text-white mr-2" size={18} />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmar senha"
            className="w-full bg-transparent outline-none text-white placeholder-white/70"
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-full bg-white text-gray-800 font-semibold 
          hover:scale-105 transition"
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

        {/* Link login */}
        <p
          onClick={() => navigate("/login")}
          className="text-center text-white/80 text-sm mt-4 cursor-pointer hover:underline"
        >
          Já tem conta? Faça login
        </p>
      </form>
    </div>
  );
}