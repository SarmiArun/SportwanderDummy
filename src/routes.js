import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import AddStadium from './pages/AddStadium';
import Subscription from './pages/Subscription';
import ListStadium from './pages/ListStadium';
import BookedStadiums from './pages/BookedStadiums';
import BookedEvents from './pages/BookedEvents';
import Court from './pages/Court';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
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
        { path: 'testing', element: <Testing /> },
        { path: 'addStadium', element: <AddStadium /> },
        { path: 'ListStadium', element: <ListStadium /> },
        { path: 'BookedStadiums', element: <BookedStadiums /> },
        { path: 'BookedEvents', element: <BookedEvents /> },
        { path: 'court', element: <Court /> },
        { path: 'user', element: <User /> },
        { path: 'Subscription', element: <Subscription /> }
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
