import { createContext, useContext, useEffect, useState } from 'react';
import { configsUrl, getData } from './utils/get-data';

const ConfigsContext = createContext();

export const ConfigsProvider = ({ children}) => {
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    try {
      getData(configsUrl).then(({ data }) => setConfigs(data));
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ConfigsContext.Provider value={configs}>
      {children}
    </ConfigsContext.Provider>
  );
};

export const useConfigContext = () => {
  const context = useContext(ConfigsContext);

  if (context === undefined) {
    throw new ReferenceError('Use ConfigsContext inside its provider.')
  }

  return context;
}