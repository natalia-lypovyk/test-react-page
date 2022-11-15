import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const logOut = () => {
    sessionStorage.removeItem('access_token');
    setIsAuthenticated(false);
  }

  const value = useMemo(() => ({
    isAuthenticated,
    setIsAuthenticated,
    logOut,
    shouldUpdate,
    setShouldUpdate
  }), [isAuthenticated]);

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
