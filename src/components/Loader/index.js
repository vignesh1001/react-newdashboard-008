/** @format */

import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../../context/store";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./styles.css";

const BackDrop = () => {
	const { state } = useContext(Context);

	return state.loading
		? ReactDOM.createPortal(
				<div className="backdrop">
					<CircularProgress style={{ color: "#fff" }} />
				</div>,
				document.body
		  )
		: null;
};

export default BackDrop;
