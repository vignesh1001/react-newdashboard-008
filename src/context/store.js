/** @format */

import React, { useReducer, createContext } from "react";

function reducer(state, action) {
	switch (action.type) {
		case "ERRORS":
			return {
				...state,
				error: action.payload,
			};
		case "SUCCESS":
			return {
				...state,
				success: action.payload,
			};
		case "USER_SIGNUP":
			return {
				...state,
				userDetails: {
					username: action.payload.username,
					first_name: action.payload.first_name,
					last_name: action.payload.last_name,
					email: action.payload.email,
					billing_phone: action.payload.billing_phone,
					password: action.payload.password,
					refer_code: action.payload.refer_code,
				},
			};
		case "USER_SIGNED_IN":
			return {
				...state,
				userSignedIn: action.payload,
			};
		case "CURRENT_USER":
			return {
				...state,
				currentUser: {
					...state.currentUser,
					...action.payload,
				},
			};
		case "ALL_LEADS":
			return {
				...state,
				allLeads: {
					content: action.payload.content,
					totalElements: action.payload.totalElements,
				},
			};
		case "LEADS_DETAILS":
			return {
				...state,
				leadsDetails: action.payload,
			};
		case "LEADS_MASTER":
			return {
				...state,
				leadsMaster: action.payload,
			};
		case "LOADING":
			return {
				...state,
				loading: action.payload,
			};
		default:
			return { ...state };
	}
}

const initialState = {
	error: "",
	success: "",
	loading:false,
	updateMessage: "",
	userDetails: {
		username: "",
		first_name: "",
		last_name: "",
		email: "",
		billing_phone: "",
		password: "",
	},
	userCredentials: {
		username: "",
		password: "",
	},
	currentUser: {
		token: "",
		user_id: null,
		billing_phone: "",
		username: "",
		first_name: "",
		last_name: "",
		cardInfo: [],
		transactions: [],
		barCode: null,
		program: "",
		programName: "",
		existingPayment: null,
		subscribed: false,
		refer_code: "",
	},
	userSignedIn: false,
	allLeads: {
		content: [],
		totalElements: 0,
	},
	leadsDetails: [],
	leadsMaster: [],
};

// Create a counter context, initially storing the initialState
const Context = createContext(initialState);

// Create a provider to pass down the
const Provider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Context.Provider value={{ state, dispatch }}>
			{props.children}
		</Context.Provider>
	);
};

export { Context, Provider };
