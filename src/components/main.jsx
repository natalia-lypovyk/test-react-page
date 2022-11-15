import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { checkToken, handleRefreshToken } from '../utils/get-data';
import RenderRoutes from './RenderRoutes/render-routes';
import routes from '../routes';

const Main = () => {
  const navigate = useNavigate();

  const timeInterval = 19 * 60 * 1000;

  useEffect(() => {
    const refreshToken = async () => {
      const token = checkToken();

      if (token === 'refresh') {
        const data = await handleRefreshToken();
        if (data?.token) {
          sessionStorage.setItem('access_token', data?.token);
        }
      }

      if (token === 'expired') {
        sessionStorage.removeItem('access_token');
        navigate('/login');
      }
    }

    const interval = setInterval(() => refreshToken(), timeInterval);
    return () => clearTimeout(interval);
  }, []);

  return (
    <RenderRoutes routes={routes} />
  );
};

export default Main;
