import { useAuth } from "../context/AuthContext";

export default function AdminButton({ children, onClick, className = "" }) {
  const { user } = useAuth();

  // Renderização condicional: se não existir usuário ou ele não for admin, não exibe nada.
  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
