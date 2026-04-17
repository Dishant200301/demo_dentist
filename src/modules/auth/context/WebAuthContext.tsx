import React, { createContext, useContext, useState, useEffect } from 'react';

interface WebUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface WebAuthContextType {
  user: WebUser | null;
  loading: boolean;
  login: (token: string, user: WebUser) => void;
  logout: () => void;
}

const WebAuthContext = createContext<WebAuthContextType | undefined>(undefined);

export const WebAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<WebUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('web_token');
      const savedUser = localStorage.getItem('web_user');

      if (token && savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (e) {
          localStorage.removeItem('web_token');
          localStorage.removeItem('web_user');
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = (token: string, user: WebUser) => {
    localStorage.setItem('web_token', token);
    localStorage.setItem('web_user', JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('web_token');
    localStorage.removeItem('web_user');
    setUser(null);
  };

  return (
    <WebAuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </WebAuthContext.Provider>
  );
};

export const useWebAuth = () => {
  const context = useContext(WebAuthContext);
  if (context === undefined) throw new Error('useWebAuth must be used within WebAuthProvider');
  return context;
};
