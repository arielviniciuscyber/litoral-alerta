import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined = ainda carregando

  // Ao montar, tenta recuperar a sessão ativa pelo cookie
  useEffect(() => {
    async function fetchMe() {
      try {
        const res = await fetch("/auth/me", {
          credentials: "include",
        });
        if (!res.ok) throw new Error();
        const data = await res.json();
        setUser(data);
      } catch {
        setUser(null); // não autenticado
      }
    }
    fetchMe();
  }, []);

  function login(userData) {
    setUser(userData);
  }

  async function logout() {
    await fetch("/auth/logout", {
      method: "POST",
      credentials: "include",
    }).catch(() => {});
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}