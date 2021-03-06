/** @format */

// theme constant
export const gridSpacing = 3;
export const drawerWidth = 260;
export const appDrawerWidth = 320;
export const TABLE_CONTENT = {
	SALES_COLUMN_DATA: [
		{
			field: "id",
			hide: true,
		},
		{
			field: "order_id",
			headerName: "Order Id",
			width: 130,
			sortable: true,
			filterable: true,
		},
		{
			field: "status",
			headerName: "Status",
			width: 130,
			sortable: true,
			filterable: true,
		},
		{
			field: "order_date",
			headerName: "Order Date",
			width: 150,
			sortable: true,
			filterable: true,
		},
		{
			field: "store_id",
			headerName: "Store ID",
			width: 130,
			sortable: true,
			filterable: true,
		},
		{
			field: "first_name",
			headerName: "First Name",
			width: 150,
			sortable: true,
			filterable: true,
		},
		{
			field: "last_name",
			headerName: "Last Name",
			width: 150,
			sortable: true,
			filterable: true,
		},
		{
			field: "email",
			headerName: "Email",
			minWidth: 180,
			sortable: true,
			filterable: true,
		},
		{
			field: "tax",
			headerName: "Tax",
			width: 100,
			sortable: true,
			filterable: true,
		},
		{
			field: "discount",
			headerName: "Disc.",
			width: 110,
			sortable: true,
			filterable: true,
		},
		{
			field: "total",
			headerName: "Total",
			width: 110,
			sortable: true,
			filterable: true,
		},
		{
			field: "payment_method",
			headerName: "Pay Method",
			width: 160,
			sortable: true,
			filterable: true,
		},
		{
			field: "payment_method_title",
			headerName: "Pay Title",
			width: 160,
			sortable: true,
			filterable: true,
		},
		{
			field: "order_time",
			headerName: "Order Time",
			width: 150,
			sortable: true,
			filterable: true,
		},
	],
	STORES_COLUMN_DATA: [
		{
			field: "id",
			hide: true,
		},
		{
			field: "store_id",
			headerName: "Store Id",
			width: 130,
			sortable: true,
			filterable: true,
		},
		{
			field: "store_address",
			headerName: "Street",
			width: 130,
			sortable: true,
			filterable: true,
		},
		{
			field: "store_city",
			headerName: "City",
			width: 150,
			sortable: true,
			filterable: true,
		},
		{
			field: "store_state",
			headerName: "State",
			width: 130,
			sortable: true,
			filterable: true,
		},
		{
			field: "store_country",
			headerName: "Coun..",
			width: 150,
			sortable: true,
			filterable: true,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			sortable: false,
			filterable: false,
			
		},
		{
			field: "click&collect",
			headerName: "Click&Collect",
			minWidth: 180,
			sortable: false,
			filterable: false,
		},
		{
			field: "doordash",
			headerName: "DoorDash",
			width: 100,
			sortable: false,
			filterable: false,
		},
		{
			field: "fuel",
			headerName: "Fuel",
			width: 110,
			sortable: false,
			filterable: false,
		},
	],
};
export const CSV_DATA = {
	SALES_MASTER_KEYS: [
		"store_id",
		"order_id",
		"first_name",
		"last_name",
		"email",
		"tax",
		"discount",
		"total",
		"payment_method",
		"payment_method_title",
		"order_date",
		"order_time",
		"status",
	],
	SALES_MASTER_HEADERS: [
		"Store ID",
		"Order ID",
		"Customer First Name",
		"Customer Last Name",
		"Customer Email",
		"Tax",
		"Discount",
		"Order Total",
		"Payment Method",
		"Payment Method Title",
		"Order Date",
		"Order Time",
		"Status",
	],
	SALES_DETAILS_KEY: [
		"store_id",
		"order_id",
		"product_upc",
		"product_upc",
		"product_title",
		"product_price",
		"product_qty",
		"product_line_subtotal",
		"product_line_total",
		"order_tax",
		"order_discount",
		"order_total",
	],
	SALES_DETAILS_HEADERS: [
		"Store ID",
		"Order ID",
		"Product ID",
		"Product UPC",
		"Product Title",
		"Price",
		"Qty",
		"Line Subtotal",
		"Line Total",
		"Tax",
		"Discount",
		"Order Total",
	],
};