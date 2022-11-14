import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { checkToken, handleRefreshToken } from '../utils/get-data';
import RenderRoutes from './RenderRoutes/render-routes';
import routes from '../routes';

const Main = () => {
  const navigate = useNavigate();

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

    const timer = setTimeout(() => refreshToken(), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <RenderRoutes routes={routes} />
  );
};

export default Main;
