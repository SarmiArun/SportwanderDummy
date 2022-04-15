import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import moderatorIcon from '@iconify/icons-ic/outline-support-agent';
import subscriptionIcon from '@iconify/icons-ic/outline-subscriptions';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  // {
  //   title: 'Add Stadiums',
  //   path: '/admin/AddStadium',
  //   icon: getIcon(shoppingBagFill)
  // },
  {
    title: 'Stadium Owner List',
    path: '/admin/ListStadium',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Kyc',
    path: '/admin/BookedStadiums',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Add Stadium Owner',
    path: '/admin/BookedEvents',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Privacy Policy',
    path: '/admin/privacypolicy',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Terms and Conditions',
    path: '/admin/termsandconditions',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Players',
    path: '/admin/players',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Notifications',
    path: '/admin/notify',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Moderators',
    path: '/admin/moderators',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Version',
    path: '/admin/version',
    icon: getIcon(shoppingBagFill)
  },

  {
    title: 'Category Banner',
    path: '/admin/Catbanner',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Main Banner',
    path: '/admin/Mainbanner',
    icon: getIcon(shoppingBagFill)
  }

  // {
  //   title: 'Subscription',
  //   path: '/admin/Subscription',
  //   icon: getIcon(shoppingBagFill)
  // }
  // {
  //   title: 'Players',
  //   path: '/admin/players',
  //   icon: getIcon(fileTextFill)
  // },
  // {
  //   title: 'Stadium Owners',
  //   path: '/admin/stadium_owners',
  //   icon: getIcon(fileTextFill)
  // },
  // {
  //   title: 'Event Organigers',
  //   path: '/admin/event_organigers',
  //   icon: getIcon(fileTextFill)
  // },
  // {
  //   title: 'Subscription Plans',
  //   path: '/subscription_plans',
  //   icon: getIcon(lockFill)
  // },
  // {
  //   title: 'Subscriptions',
  //   path: '/admin/subscriptions',
  //   icon: getIcon(subscriptionIcon)
  // },
  // {
  //   title: 'Moderators',
  //   path: '/admin/moderators',
  //   icon: getIcon(moderatorIcon)
  // }
];

export default sidebarConfig;
