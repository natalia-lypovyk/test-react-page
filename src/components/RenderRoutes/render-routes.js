import { Route, Routes } from 'react-router-dom';

const RenderRoutes = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.key} path={route.path} element={route.component} exact />
      ))}
      <Route component={() => <h1>Page not found!</h1>} />
    </Routes>
  );
};

export default RenderRoutes;
