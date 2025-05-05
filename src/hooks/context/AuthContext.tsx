import { createContext, useContext, useState, ReactNode } from 'react';

const AuthContext = createContext({ user: '', login: (u: string) => {} });

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState('');
  const login = (u: string) => setUser(u);

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}