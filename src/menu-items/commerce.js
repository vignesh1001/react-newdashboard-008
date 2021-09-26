// assets
import { IconDashboard, IconShoppingCart } from '@tabler/icons';

// constant
const icons = {
	IconShoppingCart,
	IconDashboard,
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const commerce = {
	id: "commerce",
	title: "Commerce",
	type: "group",
	children: [
		{
			id: "stores",
			title: "Leads",
			type: "item",
			url: "/stores",
			icon: icons.IconShoppingCart,
			breadcrumbs: false,
		},
	],
};

export default commerce;
