import { useEffect } from 'react';

import RenderRoutes from './RenderRoutes/render-routes';
import routes from '../routes';
import { useAuth } from '../context/auth.context';
import { refreshToken } from '../utils/get-data';

const Main = () => {
  const { isAuthenticated } = useAuth();

  const timeInterval = 19 * 60 * 1000;

  useEffect(() => {
    const interval = setInterval(() => refreshToken(), timeInterval);
    return () => clearTimeout(interval);
  }, [isAuthenticated]);

  return (
    <RenderRoutes routes={routes} />
  );
};

export default Main;
