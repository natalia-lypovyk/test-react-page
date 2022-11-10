import { Route } from 'react-router-dom';

export const RouteWithSubRoutes = (route) => {
  const { path, exact, routes } = route;

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => <route.component {...props} routes={routes} />}
    />
  );
};
