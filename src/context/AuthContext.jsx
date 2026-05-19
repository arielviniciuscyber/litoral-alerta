import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Estado fake simulando um usuário logado.
  // Mude role para "user" ou nulo para testar o sumiço do botão.
  const [user, setUser] = useState({
    name: "Admin Teste",
    role: "admin", // "admin" ou "user"
  });

  /*
  =============================================================================
  💡 COMO INTEGRAR COM O BACKEND NO FUTURO:
  Para trocar esse mock por uma requisição real, basta substituir o useState 
  acima pela seguinte estrutura (usando axios ou fetch):

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/me"); // sua rota de auth
        setUser(response.data); // data deve conter: { name: string, role: string }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  // opcional: if (loading) return <div>Carregando...</div>; antes do return principal.
  =============================================================================
  */

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
