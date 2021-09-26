// assets
import {
  IconDashboard,
  IconDeviceAnalytics,
  IconUserPlus,
} from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconUserPlus,
  IconDeviceAnalytics,
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const leads = {
  id: 'leads',
  title: 'Leads Tracker',
  type: 'item',
  url: '/leads',
  icon: icons.IconUserPlus,
  children: [
    {
      id: 'leads',
      title: 'Leads',
      type: 'item',
      url: '/leads',
      icon: icons.IconUserPlus,
      breadcrumbs: false,
    },
  ],
};

export default leads;
