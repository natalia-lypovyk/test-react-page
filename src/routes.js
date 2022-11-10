import App from './screens/App/app';
import Login from './screens/Login/login';

const routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: <App />,
  },
  {
    path: '/login',
    key: 'Login',
    exact: true,
    component: <Login />,
  }
]

export default routes;
