/** @format */
import { useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { API_KEY, API_URL } from "../environment/environment";
import { Context } from "../context/store";

// Handle user signup api request
export const useStore = () => {
	// Get the context provider
	const { state, dispatch } = useContext(Context);

	return {
		getLeads: (storeData) => {
			const { page, size, all } = storeData;
			dispatch({
				type: "LOADING",
				payload: true,
			});
			axios
				.post(
					`${API_URL}/leads`,
					{
						page,
						size,
						all,
					},
					{
						headers: {
							Authorization: Cookies.get("token"),
						},
					}
				)
				.then((res) => {
					dispatch({ type: "LOADING", payload: false });
					dispatch({
						type: "ALL_STORES",
						payload: res.data,
					});
				})
				.catch((err) => {
					dispatch({ type: "LOADING", payload: false });
					dispatch({
						type: "ERRORS",
						payload: "Could not sign up.  Please try again.",
					});
				});
		},
	};
};
