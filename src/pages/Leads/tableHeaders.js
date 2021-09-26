/** @format */
import * as React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import StoreDropDown from './dropdown';

export const STORES_COLUMN_DATA = [
  {
    field: 'id',
    hide: true,
  },
  {
    field: 'lead_date',
    headerName: 'Lead Date',
    width: 150,
    sortable: true,
    filterable: true,
  },
  {
    field: 'cust_name',
    headerName: 'Customer Name',
    width: 190,
    sortable: true,
    filterable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 140,
    sortable: true,
    filterable: true,
  },
  {
    field: 'lead',
    headerName: 'Lead',
    width: 130,
    sortable: true,
    filterable: true,
  },
  {
    field: 'origin',
    headerName: 'Origin',
    width: 140,
    sortable: true,
    filterable: true,
  },
  {
    field: 'appt_date',
    headerName: 'Appt Date',
    width: 120,
    sortable: true,
    filterable: true,
  },
  {
    field: 'est_date',
    headerName: 'Estimate Date',
    width: 130,
    sortable: true,
    filterable: true,
  },
  // {
  // 	field: "action",
  // 	headerName: "Action",
  // 	width: 100,
  // 	sortable: false,
  // 	filterable: false,
  // 	disableClickEventBubbling: true,
  // 	renderCell: (params) => {
  // 		return (
  // 			<Tooltip title={"Edit Order"} arrow>
  // 				<IconButton
  // 					color="inherit"
  // 					size="small"
  // 					component={RouterLink}
  // 					to="/storeedit"
  // 				>
  // 					<EditTwoToneIcon fontSize="small" />
  // 				</IconButton>
  // 			</Tooltip>
  // 		);
  // 	},
  // },
  // {
  // 	field: "click&collect",
  // 	headerName: "Click&Collect",
  // 	minWidth: 180,
  // 	sortable: false,
  // 	filterable: false,
  // 	disableClickEventBubbling: true,
  // 	renderCell: (params) => {
  // 		return (
  // 			<StoreDropDown
  // 				options={options}
  // 				store_id={params.row.store_id}
  // 				selected={params.row.is_active}
  // 				keyword={"is_active"}
  // 			/>
  // 		);
  // 	},
  // },
  // {
  // 	field: "doordash",
  // 	headerName: "DoorDash",
  // 	width: 180,
  // 	sortable: false,
  // 	filterable: false,
  // 	disableClickEventBubbling: true,
  // 	renderCell: (params) => {
  // 		return (
  // 			<StoreDropDown
  // 				options={options}
  // 				store_id={params.row.store_id}
  // 				selected={params.row.dd_active}
  // 				keyword={"dd_active"}
  // 			/>
  // 		);
  // 	},
  // },
  // {
  // 	field: "fuel",
  // 	headerName: "Fuel",
  // 	width: 180,
  // 	sortable: false,
  // 	filterable: false,
  // 	disableClickEventBubbling: true,
  // 	renderCell: (params) => {
  // 		return (
  // 			<StoreDropDown
  // 				options={options}
  // 				store_id={params.row.store_id}
  // 				selected={params.row.fuel_active}
  // 				keyword={"fuel_active"}
  // 			/>
  // 		);
  // 	},
  // },
];

const options = [
  {
    value: 0,
    text: 'Tech Ready',
  },
  {
    value: 1,
    text: 'Live',
  },
  {
    value: 2,
    text: 'N/A',
  },
];
