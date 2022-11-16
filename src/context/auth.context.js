import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [shouldUpdateConfigs, setShouldUpdateConfigs] = useState(false);
  const [shouldUpdateFarms, setShouldUpdateFarms] = useState(false);
  const [configsContext, setConfigsToContext] = useState([]);

  const toggleUpdate = () => setShouldUpdateFarms(!shouldUpdateFarms);
  const toggleUpdateConfigs = () => setShouldUpdateConfigs(!shouldUpdateConfigs);
  const logOut = () => {
    sessionStorage.removeItem('access_token');
    setIsAuthenticated(false);
  }

  const value = useMemo(() => ({
    isAuthenticated,
    setIsAuthenticated,
    shouldUpdateConfigs,
    setShouldUpdateConfigs,
    shouldUpdateFarms,
    setShouldUpdateFarms,
    configsContext,
    setConfigsToContext,
    logOut,
    toggleUpdate,
    toggleUpdateConfigs
  }), [isAuthenticated, shouldUpdateConfigs, shouldUpdateFarms]);

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
