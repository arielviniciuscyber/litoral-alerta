import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Notificacoes() {
  const navigate = useNavigate();
  const [aba, setAba] = useState("todas");

  const notificacoes = [
    {
      id: 1,
      tipo: "sistema",
      nivel: "critico",
      titulo: "Alerta de Chuva Intensa",
      texto: "Previsão de pancada de chuvas fortes às 16:15 desta quarta-feira. Evite deslocamentos desnecessários.",
      hora: "14:20",
      data: "Hoje",
    },
    {
      id: 2,
      tipo: "sistema",
      nivel: "info",
      titulo: "Atualização — Enchentes",
      texto: "Novas informações sobre as enchentes da semana passada que afetaram as cidades do litoral sul.",
      hora: "08:09",
      data: "Hoje",
    },
    {
      id: 5,
      tipo: "sistema",
      nivel: "alerta",
      titulo: "Maré Alta Prevista",
      texto: "Previsão de maré de 1,7m para o litoral norte. Moradores da orla devem ficar atentos à ressaca.",
      hora: "07:00",
      data: "Ontem",
    },
    {
      id: 3,
      tipo: "mensagem",
      titulo: "Soraia Almeida",
      texto: "Se vc soubesse de como está a situação da minha rua...",
      hora: "12:00",
      data: "Hoje",
      avatar: "https://i.pravatar.cc/150?img=45",
      naoLidas: 2,
    },
    {
      id: 4,
      tipo: "mensagem",
      titulo: "Virgínia Salvatore",
      texto: "Naquela época então, minha nossa, você nem imagina como São Seba ficou abalada.",
      hora: "11:00",
      data: "Hoje",
      avatar: "https://i.pravatar.cc/150?img=32",
      naoLidas: 2,
    },
    {
      id: 6,
      tipo: "mensagem",
      titulo: "Carlos Eduardo",
      texto: "Pessoal, o trecho da rodovia perto do km 42 está interditado. Peguem o desvio pela marginal.",
      hora: "09:30",
      data: "Ontem",
      avatar: "https://i.pravatar.cc/150?img=12",
      naoLidas: 0,
    },
  ];

  let listaParaMostrar = notificacoes;
  if (aba === "alertas") listaParaMostrar = notificacoes.filter(n => n.tipo === "sistema");
  if (aba === "mensagens") listaParaMostrar = notificacoes.filter(n => n.tipo === "mensagem");

  const abas = [
    { key: "todas", label: "Todas", count: notificacoes.length },
    { key: "alertas", label: "Alertas", count: notificacoes.filter(n => n.tipo === "sistema").length },
    { key: "mensagens", label: "Mensagens", count: notificacoes.filter(n => n.tipo === "mensagem").length },
  ];

  function getNivelConfig(nivel) {
    switch (nivel) {
      case "critico":
        return { dot: "bg-red-500", badge: "bg-red-100 text-red-700", label: "Crítico" };
      case "alerta":
        return { dot: "bg-amber-500", badge: "bg-amber-100 text-amber-700", label: "Alerta" };
      default:
        return { dot: "bg-blue-500", badge: "bg-blue-100 text-blue-700", label: "Info" };
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ═══════════════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════════════ */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto px-6 pt-28 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
              aria-label="Voltar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <span className="font-display text-sm font-bold text-blue-600 uppercase tracking-wider">🔔 Central</span>
              <h1 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Notificações
              </h1>
            </div>
          </div>
          <p className="text-slate-500 text-base">
            Alertas do sistema, atualizações meteorológicas e mensagens da comunidade.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ABAS (STICKY)
      ═══════════════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-6 py-3">
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl w-fit">
            {abas.map(tab => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setAba(tab.key)}
                className={`font-display flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  aba === tab.key
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  aba === tab.key ? "bg-blue-100 text-blue-600" : "bg-slate-200 text-slate-500"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          LISTA DE NOTIFICAÇÕES
      ═══════════════════════════════════════════════════════════ */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        {["Hoje", "Ontem"].map(grupo => {
          const itens = listaParaMostrar.filter(n => n.data === grupo);
          if (itens.length === 0) return null;

          return (
            <div key={grupo} className="mb-8">
              {/* Label do grupo */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-xs font-bold text-slate-400 uppercase tracking-wider">{grupo}</span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              <div className="space-y-3">
                {itens.map(n => {
                  if (n.tipo === "mensagem") {
                    return (
                      <div
                        key={n.id}
                        className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex gap-4 items-start relative"
                      >
                        {n.naoLidas > 0 && (
                          <span className="absolute top-4 right-4 min-w-[1.4rem] h-5 px-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                            {n.naoLidas}
                          </span>
                        )}
                        <img
                          src={n.avatar}
                          alt={n.titulo}
                          className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100 shrink-0"
                        />
                        <div className="flex-1 min-w-0 pr-6">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-display text-sm font-bold text-slate-900">{n.titulo}</p>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">{n.texto}</p>
                          <p className="text-xs text-slate-400 mt-2 font-medium">{n.hora}</p>
                        </div>
                      </div>
                    );
                  }

                  const config = getNivelConfig(n.nivel);
                  return (
                    <div
                      key={n.id}
                      className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex gap-4 items-start"
                    >
                      <div className={`w-11 h-11 ${config.dot} rounded-xl flex items-center justify-center shrink-0`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <p className="font-display text-sm font-bold text-slate-900">{n.titulo}</p>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${config.badge}`}>
                            {config.label}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{n.texto}</p>
                        <p className="text-xs text-slate-400 mt-2 font-medium">{n.hora}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {listaParaMostrar.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">📭</div>
            <h3 className="font-display text-lg font-bold text-slate-400">Nenhuma notificação</h3>
            <p className="text-slate-400 text-sm mt-1">Não há notificações nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
}