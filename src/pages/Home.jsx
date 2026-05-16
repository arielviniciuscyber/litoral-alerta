import { useState } from "react"
import foto from "../assets/bannerhome.png"
import prevencao from "../assets/cadastro.png"
import comunidade from "../assets/comunidade.png"

import hidrata from "../assets/use.png"
import alerta from "../assets/monitore.png"
import alagamento from "../assets/alagamento.png"

export default function Home() {
  const [form, setForm] = useState({ username: "", email: "", senha: "" })
  const [status, setStatus] = useState(null) // "sucesso" | "erro" | null
  const [mensagem, setMensagem] = useState("")
  const [carregando, setCarregando] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleCadastro() {
    setCarregando(true)
    setStatus(null)

    try {
      const res = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus("erro")
        setMensagem(data.erro)
        return
      }

      setStatus("sucesso")
      setMensagem(`Usuário @${data.username} cadastrado com sucesso!`)
      setForm({ username: "", email: "", senha: "" })
    } catch {
      setStatus("erro")
      setMensagem("Não foi possível conectar ao servidor.")
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div>
      {/* HERO */}
      <section
        className="h-[700px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${foto})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 text-white">
          <h1 className="text-2xl md:text-3xl font-bold max-w-xl">
            Previsões aumentam o risco de chuvas fortes em 70% em Caraguatatuba 🚨
          </h1>
          <p className="mt-4">⚠️ Nível de risco: Alto</p>
          <p>🌧️ Precipitação esperada: 80mm</p>
        </div>
        <div className="absolute right-4 md:right-6 top-1/2 bg-red-500 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          SOS
        </div>
      </section>

      {/* RESUMO */}
      <section className="max-w-7xl mx-4 md:mx-auto mt-20 md:mt-25 bg-white rounded-xl shadow">
        <h2 className="text-xl md:text-2xl font-semibold text-blue-900 text-center bg-blue-200 rounded-t-xl py-3 px-4">
          Resumo da semana
        </h2>
        <div className="p-6">
          <ul className="space-y-3 text-bg text-xl">
            <li>📍 Temporal no litoral norte de SP causa alagamentos</li>
            <li className="mt-8">📍 Resgates em Ubatuba após enchentes</li>
            <li className="mt-8">📍 Deslizamentos deixam cidades em alerta</li>
            <li className="mt-8">📍 Queda de árvores registrada</li>
          </ul>
          <button className="mt-8 bg-blue-700 text-white px-6 py-2 rounded-lg flex">
            Saber mais
          </button>
        </div>
      </section>

      {/* PREVENÇÃO */}
      <section className="mt-10 px-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-6">
          Como você pode se prevenir?
        </h2>

      
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <img src={hidrata} className="w-full h-auto object-cover rounded-xl shadow" />
        </div>

      </section>

      {/* ALERTAS */}
      <section className="mt-10 bg-blue-50 py-10">
      
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <img src={alerta} className="w-full h-auto object-cover rounded-xl shadow" />
        </div>  
      </section>

      {/* ALAGAMENTOS */}

      <section className="mt-10 bg-blue-50 py-10">
   
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <img src={alagamento} className="w-full h-auto object-cover rounded-xl shadow" />
        </div>
      </section>



      {/* COMUNIDADE */}
      <section className="min-h-[20rem] py-10 md:py-0 md:h-80 bg-radial from-white from-10% to-sky-600 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative h-full flex flex-col md:flex-row items-center md:items-start gap-10 justify-center px-6 text-blue-900">
          <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 w-full md:w-1/2 md:mt-20">
            <h2 className="text-3xl md:text-4xl font-bold max-w-md">Faça parte da nossa comunidade e fique ligado em tudo que acontece no nosso litoral!</h2>
            <button className="mt-6 bg-white/50 text-blue-800 px-6 py-2 rounded-full font-bold hover:bg-white/80 transition-colors">
              <a href="http://localhost:5173/comunidade">Clique para entrar</a>
            </button>
          </div>
          <img src={comunidade} className="relative md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 w-full max-w-[300px] md:max-w-none md:w-[500px] md:h-80 object-contain z-0" />
        </div>

      </section>


      {/* FORM */}
      <section className="max-w-4xl mx-4 md:mx-auto mt-10 mb-10 bg-white p-6 rounded-xl shadow">
        <h3 className="text-2xl md:text-4xl mb-4 font-semibold text-center md:text-left">Cadastre-se para receber alertas</h3>

        {status && (
          <p className={`mb-4 text-sm px-3 py-2 rounded-lg ${status === "sucesso" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {mensagem}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              className="w-full border p-2 rounded mb-2"
              placeholder="Usuário"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
            <input
              className="w-full border p-2 rounded mb-2"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              className="w-full border p-2 rounded"
              type="password"
              placeholder="Senha"
              name="senha"
              value={form.senha}
              onChange={handleChange}
            />


          </div>



          <div className="flex items-center justify-center mt-6 md:mt-0">
            <img src={prevencao} className="w-40 h-40 md:w-65 md:h-65 object-cover bg-gray-200 rounded-full" />
          </div>
        </div>

        <button
          onClick={handleCadastro}
          disabled={carregando}
          className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          {carregando ? "Cadastrando..." : "Fazer cadastro"}
        </button>
      </section>
    </div>
  )
}