import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import outlineDiscount from '@iconify/icons-ic/outline-discount';
import peopleIcon from '@iconify/icons-bi/people';
import termuxIcon from '@iconify/icons-arcticons/termux';
import outlinePolicy from '@iconify/icons-ic/outline-policy';
import outlineStadium from '@iconify/icons-ic/outline-stadium';
import oktaVerify from '@iconify/icons-arcticons/okta-verify';
import baselineSportsHandball from '@iconify/icons-ic/baseline-sports-handball';
import issuesCloseOutlined from '@iconify/icons-ant-design/issues-close-outlined';
import peopleAdd24Regular from '@iconify/icons-fluent/people-add-24-regular';
import versionIcon from '@iconify/icons-system-uicons/version';
import financeIcon from '@iconify/icons-mdi/finance';
import bellNotification from '@iconify/icons-iconoir/bell-notification';
import runIcon from '@iconify/icons-bx/run';
import imageFill from '@iconify/icons-bi/image-fill';
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
    path: '/admin/newdashboard',
    icon: getIcon(pieChart2Fill)
  },
  // {
  //   title: 'erode marathon dashboard',
  //   path: '/admin/dashboard',
  //   icon: getIcon(pieChart2Fill)
  // },
  // {
  //   title: 'form questions',
  //   path: '/admin/formquestion',
  //   icon: getIcon(pieChart2Fill)
  // },
  {
    title: 'Players',
    path: '/admin/players',
    icon: getIcon(baselineSportsHandball)
  },
  // {
  //   title: 'Marathon Players',
  //   path: '/admin/Eventplayers',
  //   icon: getIcon(runIcon)
  // },
  // {
  //   title: 'Paid Players',
  //   path: '/admin/paymentplayers',
  //   icon: getIcon(runIcon)
  // },
  // {
  //   title: 'Spot Payments',
  //   path: '/admin/SpotPayments',
  //   icon: getIcon(imageFill)
  // },
  {
    title: 'Main Banner',
    path: '/admin/Mainbanner',
    icon: getIcon(imageFill)
  },
  {
    title: 'Stadium Owner',
    path: '/admin/stadiumowner',
    icon: getIcon(shoppingBagFill)
  },
  // {
  //   title: 'Sponsors',
  //   path: '/admin/Sponsors',
  //   icon: getIcon(financeIcon)
  // },
  // {
  //   title: 'Promo Code',
  //   path: '/admin/Promocode',
  //   icon: getIcon(outlineDiscount)
  // },

  // {
  //   title: 'Add Stadium Owner',
  //   path: '/admin/BookedEvents',
  //   icon: getIcon(outlineStadium)
  // },
  // {
  //   title: 'Stadium Owner List',
  //   path: '/admin/ListStadium',
  //   icon: getIcon(peopleIcon)
  // },
  {
    title: 'Stadiums',
    path: '/admin/stadiumlist',
    icon: getIcon(shoppingBagFill)
  },
  // {
  //   title: 'KYC',
  //   path: '/admin/BookedStadiums',
  //   icon: getIcon(oktaVerify)
  // },
  // {
  //   title: 'Privacy Policy',
  //   path: '/admin/privacypolicy',
  //   icon: getIcon(outlinePolicy)
  // },
  // {
  //   title: 'Terms and Conditions',
  //   path: '/admin/termsandconditions',
  //   icon: getIcon(termuxIcon)
  // },
  {
    title: 'Notifications',
    path: '/admin/notify',
    icon: getIcon(bellNotification)
  },
  {
    title: 'Moderators',
    path: '/admin/moderators',
    icon: getIcon(peopleAdd24Regular)
  },
  {
    title: 'Issues',
    path: '/admin/issues',
    icon: getIcon(issuesCloseOutlined)
  },
  {
    title: 'Version',
    path: '/admin/version',
    icon: getIcon(versionIcon)
  }
];

export default sidebarConfig;
