import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    _id?: string;
    name: string;
    email: string;
    phone?: string;
    token?: string;
}

interface WebAuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    loading: boolean;
}

const WebAuthContext = createContext<WebAuthContextType | undefined>(undefined);

export const WebAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load user from localStorage on initial load
        const storedUser = localStorage.getItem('web_user');
        if (storedUser) {
            try {
                // If it's a raw token string (older bug), JSON.parse might fail or return a string
                const parsed = JSON.parse(storedUser);
                if (parsed && typeof parsed === 'object' && (parsed.name || parsed.email)) {
                    setUser(parsed);
                } else {
                    // Invalid format or legacy string-token, clear it
                    localStorage.removeItem('web_user');
                    setUser(null);
                }
            } catch (error) {
                // If parsing fails, it's definitely invalid
                localStorage.removeItem('web_user');
                setUser(null);
            }
        }
        setLoading(false);
    }, []);

    const login = (userData: User) => {
        setUser(userData);
        localStorage.setItem('web_user', JSON.stringify(userData));
        if (userData.token) {
            localStorage.setItem('web_token', userData.token);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('web_user');
        localStorage.removeItem('web_token');
    };

    return (
        <WebAuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </WebAuthContext.Provider>
    );
};

export const useWebAuth = () => {
    const context = useContext(WebAuthContext);
    if (context === undefined) {
        throw new Error('useWebAuth must be used within a WebAuthProvider');
    }
    return context;
};
