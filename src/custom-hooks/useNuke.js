/** @format */

import { useContext } from "react";
import { Context } from "../context/store";
import Cookies from "js-cookie";

// Handle user signup api request
export const useNuke = () => {
	// Get the context provider
	const { dispatch } = useContext(Context);

	return {
		erase: () => {
			Cookies.remove("token");
			Cookies.remove("user_id");
			Cookies.remove("billing_phone");
			Cookies.remove("username");
			Cookies.remove("first_name");
			Cookies.remove("last_name");
			Cookies.remove("favorite_store");
			Cookies.remove("email");
			Cookies.set("slideIndex", 1);
			Cookies.remove("subscription");
			Cookies.remove("program_name");
			Cookies.remove("favoriteStoreAddress");
			Cookies.remove("program");
			Cookies.remove("existing_payment");
			dispatch({
				type: "ERRORS",
				payload: "",
			});
			dispatch({
				type: "USER_SIGNUP",
				payload: {
					username: "",
					first_name: "",
					last_name: "",
					email: "",
					billing_phone: "",
					password: "",
				},
			});
			dispatch({
				type: "USER_SIGNED_IN",
				payload: false,
			});
			
			dispatch({
				type: "CURRENT_USER",
				payload: {
					token: "",
					user_id: null,
					billing_phone: "",
					username: "",
					first_name: "",
					last_name: "",
					favoriteStoreAddress: "",
					cardInfo: [],
					transactions: [],
					barCode: null,
					subscribed: false,
					program: "",
					programName: "",
					existingPayment: null,
				},
			});
			dispatch({
				type: "ALL_STORES",
				payload: { content: [], totalElements: 0 },
			});
			dispatch({
				type: "SALES_DETAILS",
				payload: [],
			});
			dispatch({
				type: "SALES_MASTER",
				payload: [],
			});
		},
	};
};
