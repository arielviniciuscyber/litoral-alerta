import { useAuth } from "../context/AuthContext";

export default function AdminButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors ${className}`}
    >
      {children}
    </button>
  );
}