import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const logOut = () => {
    setToken('');
    setIsAuthenticated(false);
  }

  const value = useMemo(() => ({
    isAuthenticated,
    setIsAuthenticated,
    token,
    setToken,
    logOut
  }), [token, isAuthenticated]);

  // console.log(token, isAuthenticated)
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new ReferenceError('Use AuthContext inside its provider.')
  }

  return context;
};
