import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Router } from './routes';
import DashboardApp from './pages/DashboardApp';
import User from './pages/User';
import Products from './pages/Products';
import Moderators from './pages/Moderator/Moderator';
import Subscriptions from './pages/Subscription/Subscription';

export default function MainLoader() {
  const [load, setLoad] = useState(true);
  const [route, setRoute] = useState({ path: '', element: '' });
  const navigate = useNavigate();
  useEffect(() => {
    if (['/login', '/register'].includes(window.location.pathname)) return setLoad(false);
    switch (window.location.pathname) {
      case '/admin/user':
        setRoute({ path: 'user', element: <User /> });
        return setLoad(false);
      case '/admin/products':
        setRoute({ path: 'products', element: <Products /> });
        return setLoad(false);
      case '/':
        navigate('/admin/dashboard', true);
        return setLoad(false);
      case '/admin/dashboard':
        setRoute({ path: 'dashboard', element: <DashboardApp /> });
        return setLoad(false);
      case '/admin/subscriptions':
        setRoute({ path: 'subscriptions', element: <Subscriptions /> });
        return setLoad(false);
      case '/admin/moderators':
        setRoute({ path: 'moderators', element: <Moderators /> });
        return setLoad(false);
      default:
        navigate('404', true);
        return setLoad(false);
    }
  }, []);
  if (load) {
    return <div>Loading</div>;
  }
  return <Router route={route} />;
}
