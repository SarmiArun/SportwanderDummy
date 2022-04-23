import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import AddStadium from './pages/AddStadium';
import Subscription from './pages/Subscription';
import ListStadium from './pages/ListStadium';
import BookedStadiums from './pages/BookedStadiums';
import Termsandconditions from './pages/Termsandconditions';
import Issues from './pages/Issues';
import Version from './pages/Version';
import Notify from './pages/Notify';
import Privacypolicy from './pages/Privacypolicy';
import Mainbanner from './pages/Mainbanner';
import Catbanner from './pages/Catbanner';
import AddModerators from './pages/Moderator/AddModerator';
import BookedEvents from './pages/BookedEvents';
import Players from './pages/Players';
import Court from './pages/Court';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Stadiumlist from './pages/Stadiumlist';
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
        { path: 'addStadium', element: <AddStadium /> },
        { path: 'Privacypolicy', element: <Privacypolicy /> },
        { path: 'BookedStadiums', element: <BookedStadiums /> },
        { path: 'addmoderators', element: <AddModerators /> },
        { path: 'Stadiumlist', element: <Stadiumlist /> },
        { path: 'notify', element: <Notify /> },
        { path: 'termsandconditions', element: <Termsandconditions /> },
        { path: 'issues', element: <Issues /> },
        { path: 'Mainbanner', element: <Mainbanner /> },
        { path: 'Catbanner/:id', element: <Catbanner /> },
        { path: 'version', element: <Version /> },
        { path: 'Players', element: <Players /> },
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
