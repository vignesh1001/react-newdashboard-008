/** @format */

import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import { useStore } from "../../custom-hooks/useStore";
import { Context } from "../../context/store";
import CustomGrid from "../../components/CustomGrid";
import { STORES_COLUMN_DATA } from "./tableHeaders";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	content: {
		height: `calc(100vh - 260px)`,
		width: "100%",
	},
});

const ContentTable = () => {
	// useStore hook for login
	let stores = useStore();

	const { state, dispatch } = useContext(Context);
	const classes = useStyles();

	const [tableContent, setTableContent] = useState([]);
	const [page, setPage] = useState(0);
	const [limit, setLimit] = useState(100000);

	useEffect(() => {
		// if (!state.allStores.content.length) {
		// 	stores.getLeads({ page: page + 1, size: limit, all: true });
		// }
		setTableContent([
			{
				id: 123, lead_date: '09/15/2021',cust_name: 'Customer Name',
				phone: '888-555-1212',lead: 'Lead Name', origin: 'Origin Name',
				appt_date: '09/20/2021',est_date: ''
			}
		])
	}, []);

	// useEffect(() => {
	// 	const newArr1 = state.allStores.content.map((v) => ({
	// 		...v,
	// 		id: v.store_id,
	// 	}));
	// 	setTableContent(newArr1);
	// }, [state.allStores]);

	return tableContent.length ? (
		<Grid item xs={12}>
			<CustomGrid
				rowData={tableContent}
				columnData={STORES_COLUMN_DATA}
				customClass={classes.content}
			/>
		</Grid>
	) : (
		""
	);
};

export default ContentTable;
