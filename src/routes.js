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
import Eventplayers from './pages/Eventplayers';
// import AddModerators from './pages/Moderator/AddModerator';
import Sponsors from './pages/Sponsors';
import SpotPayments from './pages/SpotPayments';
import Paymentplayers from './pages/Paymentplayers';
import BookedEvents from './pages/BookedEvents';
import Players from './pages/Players';
import Promocode from './pages/Promocode';
import Court from './pages/Court';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Stadiumlist from './pages/Stadiumlist';
import Sponserlist from './pages/Sponserlist';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Testing from './components/Testing';
import MainLoader from './MainLoader';
import FormQuestion from './layouts/dashboard/FormQuestion';
import NewDashboard from './layouts/dashboard/NewDashboard';
import Addstadiumlist from './pages/StadiumList/Addstadiumlist';
import Moderators from './pages/Moderator/AddModerator';
// ----------------------------------------------------------------------

export function Router(props) {
  return useRoutes([
    {
      path: '/admin',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/admin/newdashboard" replace /> },
        props.route,
        { path: 'blog', element: <Blog /> },
        { path: 'addstadium', element: <Addstadiumlist /> },
        { path: 'testing', element: <Testing /> },
        { path: 'Privacypolicy', element: <Privacypolicy /> },
        { path: 'BookedStadiums', element: <BookedStadiums /> },
        // { path: 'addmoderators', element: <AddModerators /> },
        { path: 'Stadiumlist', element: <Stadiumlist /> },
        { path: 'Promocode', element: <Promocode /> },
        { path: 'paymentplayers', element: <Paymentplayers /> },
        { path: 'notify', element: <Notify /> },
        { path: 'termsandconditions', element: <Termsandconditions /> },
        { path: 'Eventplayers', element: <Eventplayers /> },
        { path: 'Sponsors', element: <Sponsors /> },
        { path: 'SpotPayments', element: <SpotPayments /> },
        { path: 'Sponserlist/:id', element: <Sponserlist /> },
        { path: 'issues', element: <Issues /> },
        { path: 'Mainbanner', element: <Mainbanner /> },
        { path: 'Catbanner/:id', element: <Catbanner /> },
        { path: 'version', element: <Version /> },
        { path: 'Players', element: <Players /> },
        { path: 'BookedEvents', element: <BookedEvents /> },
        { path: 'court', element: <Court /> },
        { path: 'user', element: <User /> },
        { path: 'Subscription', element: <Subscription /> },
        { path: 'formquestion', element: <FormQuestion /> },
        { path: 'newdashboard', element: <NewDashboard /> },
        { path: 'moderators', element: <Moderators /> }
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
    { path: '*', element: <NotFound /> }
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
