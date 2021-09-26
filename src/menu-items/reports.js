// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const reports = {
	id: "reports",
	title: "Reports",
	type: "group",
	children: [
		{
			id: "salesreport",
			title: "Sales Reports",
			type: "item",
			url: "/salesreport",
			icon: icons.IconDashboard,
			breadcrumbs: false,
		},
	],
};

export default reports;
