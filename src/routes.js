import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Testing from './components/Testing';
import MainLoader from './MainLoader';

// ----------------------------------------------------------------------

export function Router(props) {
  return useRoutes([
    {
      path: '/admin',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/admin/dashboard" replace /> },
        // { path: 'app', element: <DashboardApp /> },
        props.route,
        // { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'testing', element: <Testing /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> }
        // { path: '/', element: <Navigate to="/dashboard" /> },
        // { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <MainLoader /> }
  ]);
}

export function Routers() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [{ path: '/', element: <MainLoader /> }]
    },
    { path: '*', element: <MainLoader /> }
  ]);
}
