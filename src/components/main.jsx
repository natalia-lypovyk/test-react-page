import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { checkToken, handleRefreshToken } from '../utils/get-data';
import RenderRoutes from './RenderRoutes/render-routes';
import routes from '../routes';

const Main = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const refreshToken = async () => {
  //     const token = checkToken();
  //     console.log('refr', token)
  //
  //     if (token === 'refresh') {
  //       const data = await handleRefreshToken();
  //       if (data?.token) {
  //         sessionStorage.setItem('access_token', data?.token);
  //       }
  //     }
  //
  //     if (token === 'expired') {
  //       navigate('/login');
  //     }
  //   }
  //
  //   refreshToken();
  // });

  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>

      <RenderRoutes routes={routes} />
    </>

  );
};

export default Main;
