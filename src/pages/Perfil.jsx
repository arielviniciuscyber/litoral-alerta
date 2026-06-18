import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  User, Mail, MapPin, FileText, Lock, Eye, EyeOff,
  Trash2, AlertTriangle, X, Camera,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const API_BASE = "";

function avatarColor(username = "") {
  const colors = [
    "#2563eb", "#7c3aed", "#db2777", "#059669", "#d97706",
    "#dc2626", "#0891b2", "#65a30d", "#9333ea", "#0284c7",
  ];
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export default function Perfil() {
  const navigate = useNavigate();
  const { user, login, logout } = useAuth();

  const [form, setForm] = useState({
    nome: user?.nome || "",
    email: user?.email || "",
    bio: user?.bio || "",
    local: user?.local || "",
  });
  const [salvandoPerfil, setSalvandoPerfil] = useState(false);

  // ── Foto de perfil ──
  const [novaFoto, setNovaFoto] = useState(null);
  const [previewFoto, setPreviewFoto] = useState(null);
  const fileInputRef = useRef(null);

  // ── Senha ──
  const [senhaForm, setSenhaForm] = useState({
    senhaAtual: "", novaSenha: "", confirmarSenha: "",
  });
  const [mostrarSenhaAtual, setMostrarSenhaAtual] = useState(false);
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
  const [salvandoSenha, setSalvandoSenha] = useState(false);

  // ── Exclusão ──
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
  const [senhaExclusao, setSenhaExclusao] = useState("");
  const [excluindo, setExcluindo] = useState(false);

  if (user === undefined) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    navigate("/login");
    return null;
  }

  const inicial = (user.nome || user.username).charAt(0).toUpperCase();
  const bg = avatarColor(user.username);

  function handleChangeForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleChangeSenha(e) {
    setSenhaForm({ ...senhaForm, [e.target.name]: e.target.value });
  }

  function handleSelecionarFoto(e) {
    const arquivo = e.target.files?.[0];
    if (!arquivo) return;

    const TIPOS_PERMITIDOS = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!TIPOS_PERMITIDOS.includes(arquivo.type)) {
      toast.error("Formato inválido. Use JPG, PNG, WEBP ou GIF.");
      return;
    }
    if (arquivo.size > 5 * 1024 * 1024) {
      toast.error("A imagem deve ter no máximo 5MB.");
      return;
    }

    setNovaFoto(arquivo);
    setPreviewFoto(URL.createObjectURL(arquivo));
  }

  // ── Salvar perfil (dados + foto juntos via FormData) ──
  async function handleSalvarPerfil(e) {
    e.preventDefault();

    if (!form.nome.trim()) return toast.error("O nome não pode ficar em branco.");
    if (form.email && !form.email.includes("@")) return toast.error("Email inválido.");

    try {
      setSalvandoPerfil(true);

      const formData = new FormData();
      formData.append("nome", form.nome);
      formData.append("email", form.email);
      formData.append("bio", form.bio);
      formData.append("local", form.local);
      if (novaFoto) formData.append("fotoPerfil", novaFoto);

      const res = await fetch(`${API_BASE}/auth/perfil`, {
        method: "PUT",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao atualizar perfil.");

      login(data);
      setNovaFoto(null);
      setPreviewFoto(null);
      toast.success("Perfil atualizado com sucesso!");
    } catch (err) {
      toast.error(err.message || "Erro ao atualizar perfil.");
    } finally {
      setSalvandoPerfil(false);
    }
  }

  // ── Trocar senha ──
  async function handleSalvarSenha(e) {
    e.preventDefault();

    if (!senhaForm.senhaAtual || !senhaForm.novaSenha || !senhaForm.confirmarSenha)
      return toast.error("Preencha todos os campos de senha.");
    if (senhaForm.novaSenha.length < 4)
      return toast.error("A nova senha deve ter pelo menos 4 caracteres.");
    if (senhaForm.novaSenha !== senhaForm.confirmarSenha)
      return toast.error("As senhas não coincidem.");

    try {
      setSalvandoSenha(true);

      const res = await fetch(`${API_BASE}/auth/perfil`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          senhaAtual: senhaForm.senhaAtual,
          novaSenha: senhaForm.novaSenha,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao alterar senha.");

      toast.success("Senha alterada com sucesso!");
      setSenhaForm({ senhaAtual: "", novaSenha: "", confirmarSenha: "" });
    } catch (err) {
      toast.error(err.message || "Erro ao alterar senha.");
    } finally {
      setSalvandoSenha(false);
    }
  }

  // ── Excluir conta ──
  async function handleExcluirConta(e) {
    e.preventDefault();

    if (!senhaExclusao) return toast.error("Informe sua senha para confirmar.");

    try {
      setExcluindo(true);

      const res = await fetch(`${API_BASE}/auth/perfil`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ senha: senhaExclusao }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao excluir conta.");

      toast.success("Conta excluída. Sentiremos sua falta!");
      await logout();
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Erro ao excluir conta.");
    } finally {
      setExcluindo(false);
    }
  }

  // Foto atual: preview da nova selecionada, ou a salva no banco, ou inicial colorida
  const fotoAtual = previewFoto || (user.fotoPerfil ? `${API_BASE}/${user.fotoPerfil}` : null);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Cabeçalho ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto px-6 pt-28 pb-8">
          <div className="flex items-center gap-3 mb-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Meu Perfil
            </h1>
          </div>

          {/* Avatar com botão de troca */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              {/* Foto ou inicial */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl shrink-0 ring-4 ring-slate-100 overflow-hidden"
                style={!fotoAtual ? { backgroundColor: bg } : {}}
              >
                {fotoAtual ? (
                  <img src={fotoAtual} alt="Foto de perfil" className="w-full h-full object-cover" />
                ) : (
                  inicial
                )}
              </div>

              {/* Overlay de câmera ao passar o mouse */}
              <label
                htmlFor="foto-perfil-input"
                className="absolute inset-0 rounded-full flex items-center justify-center
                  bg-black/0 group-hover:bg-black/50 transition-all cursor-pointer
                  opacity-0 group-hover:opacity-100"
                title="Trocar foto de perfil"
              >
                <Camera size={20} className="text-white" />
              </label>

              <input
                ref={fileInputRef}
                id="foto-perfil-input"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleSelecionarFoto}
                className="hidden"
              />

              {/* Bolinha de câmera no canto */}
              <label
                htmlFor="foto-perfil-input"
                className="absolute bottom-0 right-0 w-7 h-7 bg-blue-600 hover:bg-blue-500
                  rounded-full flex items-center justify-center cursor-pointer
                  ring-2 ring-white shadow-md transition-colors"
                title="Trocar foto de perfil"
              >
                <Camera size={13} className="text-white" />
              </label>
            </div>

            <div>
              <p className="font-display text-lg font-bold text-slate-900">
                {user.nome || user.username}
              </p>
              <p className="text-sm text-slate-500">@{user.username}</p>
              {previewFoto && (
                <p className="text-xs text-blue-600 font-medium mt-1">
                  Nova foto selecionada — salve para aplicar
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Conteúdo ── */}
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">

        {/* Card: Dados do perfil */}
        <form
          onSubmit={handleSalvarPerfil}
          className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
        >
          <h2 className="font-display text-base font-bold text-slate-900 mb-5">
            Informações pessoais
          </h2>

          <div className="space-y-4">
            {/* Nome */}
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Nome</label>
              <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-blue-400 focus-within:bg-white transition-all">
                <User className="text-slate-400 mr-3 shrink-0" size={18} />
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChangeForm}
                  placeholder="Seu nome completo"
                  className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Email</label>
              <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-blue-400 focus-within:bg-white transition-all">
                <Mail className="text-slate-400 mr-3 shrink-0" size={18} />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChangeForm}
                  placeholder="seu@email.com"
                  className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm"
                />
              </div>
            </div>

            {/* Local */}
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Localização</label>
              <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-blue-400 focus-within:bg-white transition-all">
                <MapPin className="text-slate-400 mr-3 shrink-0" size={18} />
                <input
                  type="text"
                  name="local"
                  value={form.local}
                  onChange={handleChangeForm}
                  placeholder="Ex: Caraguatatuba, SP"
                  className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Bio</label>
              <div className="flex items-start bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-blue-400 focus-within:bg-white transition-all">
                <FileText className="text-slate-400 mr-3 shrink-0 mt-0.5" size={18} />
                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChangeForm}
                  placeholder="Fale um pouco sobre você"
                  rows={3}
                  maxLength={255}
                  className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm resize-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={salvandoPerfil}
            className="font-display w-full mt-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm
              shadow-lg shadow-blue-600/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed
              flex items-center justify-center gap-2"
          >
            {salvandoPerfil ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Salvando...
              </>
            ) : "Salvar alterações"}
          </button>
        </form>

        {/* Card: Trocar senha */}
        <form
          onSubmit={handleSalvarSenha}
          className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
        >
          <h2 className="font-display text-base font-bold text-slate-900 mb-5">Alterar senha</h2>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Senha atual</label>
              <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-blue-400 focus-within:bg-white transition-all">
                <Lock className="text-slate-400 mr-3 shrink-0" size={18} />
                <input
                  type={mostrarSenhaAtual ? "text" : "password"}
                  name="senhaAtual"
                  value={senhaForm.senhaAtual}
                  onChange={handleChangeSenha}
                  placeholder="Digite sua senha atual"
                  className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm"
                />
                <button type="button" onClick={() => setMostrarSenhaAtual(!mostrarSenhaAtual)} className="text-slate-400 hover:text-slate-600 ml-2 shrink-0">
                  {mostrarSenhaAtual ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Nova senha</label>
              <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-blue-400 focus-within:bg-white transition-all">
                <Lock className="text-slate-400 mr-3 shrink-0" size={18} />
                <input
                  type={mostrarNovaSenha ? "text" : "password"}
                  name="novaSenha"
                  value={senhaForm.novaSenha}
                  onChange={handleChangeSenha}
                  placeholder="Mínimo 4 caracteres"
                  className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm"
                />
                <button type="button" onClick={() => setMostrarNovaSenha(!mostrarNovaSenha)} className="text-slate-400 hover:text-slate-600 ml-2 shrink-0">
                  {mostrarNovaSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block uppercase tracking-wider">Confirmar nova senha</label>
              <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-blue-400 focus-within:bg-white transition-all">
                <Lock className="text-slate-400 mr-3 shrink-0" size={18} />
                <input
                  type="password"
                  name="confirmarSenha"
                  value={senhaForm.confirmarSenha}
                  onChange={handleChangeSenha}
                  placeholder="Repita a nova senha"
                  className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={salvandoSenha}
            className="font-display w-full mt-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm
              shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed
              flex items-center justify-center gap-2"
          >
            {salvandoSenha ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Alterando...
              </>
            ) : "Alterar senha"}
          </button>
        </form>

        {/* Card: Zona de perigo */}
        <div className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm">
          <h2 className="font-display text-base font-bold text-red-600 mb-1 flex items-center gap-2">
            <AlertTriangle size={18} />
            Excluir conta
          </h2>
          <p className="text-sm text-slate-500 mb-5">
            Essa ação é permanente. Todas as suas publicações, comentários e curtidas serão removidos
            e não será possível recuperar sua conta.
          </p>
          <button
            type="button"
            onClick={() => setModalExcluirAberto(true)}
            className="font-display w-full py-3.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-sm
              transition-all flex items-center justify-center gap-2"
          >
            <Trash2 size={16} />
            Excluir minha conta
          </button>
        </div>
      </div>

      {/* Modal de confirmação de exclusão */}
      {modalExcluirAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => { setModalExcluirAberto(false); setSenhaExclusao(""); }}
          />
          <form
            onSubmit={handleExcluirConta}
            className="relative z-10 w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => { setModalExcluirAberto(false); setSenhaExclusao(""); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
              <AlertTriangle className="text-red-600" size={22} />
            </div>

            <h3 className="font-display text-lg font-bold text-slate-900 mb-1">Tem certeza?</h3>
            <p className="text-sm text-slate-500 mb-5">
              Digite sua senha para confirmar a exclusão permanente da sua conta.
            </p>

            <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-red-400 focus-within:bg-white transition-all mb-5">
              <Lock className="text-slate-400 mr-3 shrink-0" size={18} />
              <input
                type="password"
                value={senhaExclusao}
                onChange={(e) => setSenhaExclusao(e.target.value)}
                placeholder="Sua senha"
                autoFocus
                className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => { setModalExcluirAberto(false); setSenhaExclusao(""); }}
                className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-all"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={excluindo}
                className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm
                  transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {excluindo ? (
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : "Excluir"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}