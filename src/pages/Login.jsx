import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleLogin(e) {
    e.preventDefault()

    // Simulação de login
    if (email === "admin@email.com" && senha === "123456") {
      alert("Login realizado com sucesso!")
    } else {
      alert("Email ou senha inválidos")
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-80"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 mb-6 border rounded-lg"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}