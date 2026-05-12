import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ícone simples de alerta (sirene) para os cards do sistema
function IconeSirene() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );
}

export default function Notificacoes() {
  const navigate = useNavigate();

  // aba ativa: "todas" ou "mensagens"
  const [aba, setAba] = useState("todas");

  // dados fake só para mostrar na tela
  const lista = [
    {
      id: 1,
      tipo: "sistema",
      corAlerta: "vermelho",
      titulo: "Notificação do Sistema",
      texto:
        "Previsão de pancada de chuvas fortes as 16:15 desta quarta feira.",
      hora: "14:20",
    },
    {
      id: 2,
      tipo: "sistema",
      corAlerta: "azul",
      titulo: "Notificação do Sistema",
      texto:
        "Novas notícias sobre as enchentes da semana passada que devastou as cidades do litoral.",
      hora: "08:09",
    },
    {
      id: 3,
      tipo: "mensagem",
      titulo: "Soraia almeida",
      texto: "Se vc soubesse de como esta a situação da minha rua...",
      hora: "12:00",
      avatar: "https://i.pravatar.cc/150?img=45",
      naoLidas: 2,
    },
    {
      id: 4,
      tipo: "mensagem",
      titulo: "Virginia salvatore",
      texto:
        "Naquela época então, minha nossa você nem imagina como são seba ficou abalada.",
      hora: "11:00",
      avatar: "https://i.pravatar.cc/150?img=32",
      naoLidas: 2,
    },
  ];

  // filtra só mensagens quando a aba for mensagens
  let listaParaMostrar = lista;
  if (aba === "mensagens") {
    listaParaMostrar = lista.filter((item) => item.tipo === "mensagem");
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* barra branca com voltar, titulo e abas (igual ideia da imagem) */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-xl mx-auto px-4 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Voltar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-lg font-bold text-gray-900">Notificações</h1>
          </div>

          {/* abas */}
          <div className="flex gap-8 border-b border-transparent sm:border-0 -mb-px sm:mb-0">
            <button
              type="button"
              onClick={() => setAba("todas")}
              className={`pb-2 text-sm font-semibold border-b-2 -mb-px transition-colors ${
                aba === "todas"
                  ? "text-gray-900 border-blue-600"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              Todas
            </button>
            <button
              type="button"
              onClick={() => setAba("mensagens")}
              className={`pb-2 text-sm font-semibold border-b-2 -mb-px transition-colors ${
                aba === "mensagens"
                  ? "text-gray-900 border-blue-600"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              Mensagens
            </button>
          </div>
        </div>
      </div>

      {/* lista centralizada */}
      <div className="max-w-xl mx-auto px-4 py-6 space-y-4">
        {listaParaMostrar.map((n) => (
          <div
            key={n.id}
            className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-3 hover:bg-gray-50 hover:shadow-md transition-all cursor-default"
          >
            {/* bolinha laranja com numero (só mensagem) */}
            {n.tipo === "mensagem" && n.naoLidas > 0 && (
              <span className="absolute top-3 right-3 min-w-[1.5rem] h-6 px-1.5 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
                {n.naoLidas}
              </span>
            )}

            {/* lado esquerdo: icone do sistema ou foto do usuario */}
            {n.tipo === "sistema" && (
              <div
                className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  n.corAlerta === "vermelho" ? "bg-red-600" : "bg-sky-400"
                }`}
              >
                <IconeSirene />
              </div>
            )}

            {n.tipo === "mensagem" && (
              <img
                src={n.avatar}
                alt={n.titulo}
                className="shrink-0 w-12 h-12 rounded-full object-cover border border-gray-100"
              />
            )}

            {/* texto */}
            <div className="flex-1 min-w-0 pr-8">
              <p className="text-xs text-gray-500 italic mb-1">{n.titulo}</p>
              <p className="text-sm text-gray-900 leading-snug">{n.texto}</p>
              <p className="text-right text-xs text-gray-400 mt-3">{n.hora}</p>
            </div>
          </div>
        ))}

        {listaParaMostrar.length === 0 && (
          <p className="text-center text-gray-500 text-sm py-8">Nenhuma notificação aqui.</p>
        )}
      </div>
    </div>
  );
}