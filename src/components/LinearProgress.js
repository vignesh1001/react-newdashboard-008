/** @format */

import React, { useContext } from "react";

// material-ui
import { makeStyles } from "@material-ui/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Context } from "../context/store";

// style constant
const useStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		top: 0,
		left: 0,
		zIndex: 1301,
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

// ===========================|| Loader ||=========================== //

const Loader = () => {
	const classes = useStyles();
	const { state } = useContext(Context);


	console.log("HITTTTTTTTTTTTTTTTTTTT");

	return state.loading ? (
		<div className={classes.root}>
			<LinearProgress color="primary" />
		</div>
	) : null;
};

export default Loader;
