import { createContext, useContext, useState, ReactNode } from 'react';

// Define the auth state type
interface AuthState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create the context with default values
const AuthContext = createContext<AuthState>({
  isAuthenticated: false,
  login: async () => false,
  logout: () => {},
});

// Define the owner's email - this is the only authorized email
const OWNER_EMAIL = 'carlogrecoph@gmail.com';
// Password is hashed and not stored in plaintext in the actual application
// For demo purposes only
const OWNER_PASSWORD = '@cwq39wjòmpr8201?';

// Create a provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login function that validates credentials
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would validate against a backend API
    // Here we just check against our predefined values
    if (email === OWNER_EMAIL && password === OWNER_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Logout function that clears authentication state
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Provide auth state and functions to children
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy context access
export const useAuth = () => useContext(AuthContext);