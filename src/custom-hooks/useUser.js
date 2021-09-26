/** @format */
import { useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { API_KEY, API_URL } from "../environment/environment";
import { Context } from "../context/store";

// Handle user signup api request
export const useUser = () => {
	// Get the context provider
	const { state, dispatch } = useContext(Context);

	const validateSignUp = (obj) => {
		for (let key in obj) {
			if (obj[key] === "") return false;
		}
		return true;
	};

	return {
		signUp: (userData) => {
			// Destructure the user data properties off of the userData argument
			const {
				username,
				first_name,
				last_name,
				email,
				billing_phone,
				password,
				store_id,
				refer_code,
			} = userData;
			dispatch({
				type: "LOADING",
				payload: true,
			});
			axios
				.post(
					`${API_URL}/signup`,
					{
						username,
						first_name,
						last_name,
						email,
						billing_phone,
						password,
						store_id,
						refer_code,
					},
					{
						headers: {
							apikey: API_KEY,
						},
					}
				)
				.then((res) => {
					dispatch({
						type: "SIGNUP_SUCCESS_GTM",
						payload: true,
					});
					axios
						.post(
							`${API_URL}/signin`,
							{
								username: res.data.username,
								password: res.data.password,
							},
							{
								headers: {
									apikey: API_KEY,
								},
							}
						)
						.then((res) => {
							let response = res.data[0];
							Cookies.set("token", response.token);
							Cookies.set("user_id", response.id);
							Cookies.set(
								"billing_phone",
								response.billing_phone
							);
							Cookies.set("username", response.username);
							Cookies.set("first_name", response.first_name);
							Cookies.set("last_name", response.last_name);
							Cookies.set("favorite_store", response.store_id);
							Cookies.set("program", response.program);
							dispatch({
								type: "USER_SIGNED_IN",
								payload: true,
							});
							dispatch({
								type: "CURRENT_USER",
								payload: {
									token: response.token,
									user_id: response.id,
									billing_phone: response.billing_phone,
									username: response.username,
									first_name: response.first_name,
									last_name: response.last_name,
									program: response.program,
									subscribed: response.subscribed,
									existingPayment: response.existing_payment,
								},
							});
							dispatch({
								type: "LOADING",
								payload: false,
							});

						})
						.catch((err) => {
							dispatch({
								type: "ERRORS",
								payload:
									"That username/password combination does not exist",
							});
							dispatch({
								type: "LOADING",
								payload: false,
							});
						});

					dispatch({
						type: "ERRORS",
						payload: "",
					});
				})
				.catch((err) => {
					dispatch({
						type: "ERRORS",
						payload: "Could not sign up.  Please try again.",
					});
				});
		},
		signIn: (username, password) => {
			dispatch({
				type: "LOADING",
				payload: true,
			});
			axios
				.post(
					`${API_URL}/store/signin`,
					{
						username,
						password,
					}
				)
				.then((res) => {
					console.log(res);
					let response = res.data;
					Cookies.set("token", response.token);
					Cookies.set("user_id", response.id);
					Cookies.set("username", response.username);
					Cookies.set("user_role", response.roles);
					Cookies.set("store_id", response.store_id);

					dispatch({
						type: "USER_SIGNED_IN",
						payload: true,
					});
					dispatch({
						type: "CURRENT_USER",
						payload: {
							token: response.token,
							user_id: response.id,
							username: response.username,
							user_role: response.roles,
							store_id: response.store_id,
						},
					});
					dispatch({
						type: "LOADING",
						payload: false,
					});
				})
				.catch((err) => {
					dispatch({
						type: "ERRORS",
						payload:
							"That username/password combination does not exist",
					});
					dispatch({
						type: "LOADING",
						payload: false,
					});
				});
		}
	};
};
