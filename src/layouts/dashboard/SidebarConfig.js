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
  {
    title: 'KYC Verification',
    path: '/admin/kyc_verification',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Players',
    path: '/admin/players',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Stadium Owners',
    path: '/admin/stadium_owners',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Event Organigers',
    path: '/admin/event_organigers',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Subscription Plans',
    path: '/subscription_plans',
    icon: getIcon(lockFill)
  },
  {
    title: 'Subscriptions',
    path: '/admin/subscriptions',
    icon: getIcon(subscriptionIcon)
  },
  {
    title: 'Moderators',
    path: '/admin/moderators',
    icon: getIcon(moderatorIcon)
  }
];

export default sidebarConfig;
