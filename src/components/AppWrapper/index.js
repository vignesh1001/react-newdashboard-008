/** @format */

import React, { useEffect, useContext } from "react";
import { useUser } from "../../custom-hooks/useUser";
import { hotjar } from "react-hotjar";
import Cookies from "js-cookie";
import { Context } from "../../context/store";
// import TagManager from "react-gtm-module";
// import ReactPixel from "react-facebook-pixel";

const options = {
	autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
	debug: false, // enable logs
};

// ReactPixel.init("1320257254805918", options);

const AppWrapper = (props) => {
	// Get the context provider
	const { state, dispatch } = useContext(Context);

	let user = useUser();

	// In case of refresh, replace values in state with cookies
	useEffect(() => {
		// Make sure to always have current user data in state
		if (
			state.currentUser.token === "" &&
			Cookies.get("token") !== undefined
		) {
			dispatch({
				type: "CURRENT_USER",
				payload: {
					token: Cookies.get("token"),
					user_id: Cookies.get("user_id"),
					username: Cookies.get("username"),
					user_role: Cookies.get("user_role"),
					store_id: Cookies.get("store_id"),
				},
			});
			dispatch({
				type: "USER_SIGNED_IN",
				payload: true,
			});
		}
		hotjar.initialize(2144606, 6);
	}, []);

	useEffect(() => {
		if (state.error !== "") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [state.error]);

	// useEffect(() => {
	// 	const tagManagerArgs = {
	// 		dataLayer: {
	// 			event: "pageview",
	// 			pagePath: state.gtmPath,
	// 		},
	// 	};
	// 	if (state.gtmPath !== null) {
	// 		TagManager.dataLayer(tagManagerArgs);
	// 		ReactPixel.pageView();
	// 	}
	// }, [state.gtmPath]);

	return props.children;
};

export default AppWrapper;
