/** @format */

import { useState } from "react";

/*
    TODO: Component will need to handle variant data from microservices.
    More logic will be required in this component.
*/
const useModal = () => {
	// Set booelan state for show/hide
	const [isShowing, setIsShowing] = useState(false);
	const [modalName, setModalName] = useState(null);
	// Exportable toggle() function to set the isShowing state boolean
	const toggle = (name) => {
		setIsShowing(!isShowing);
		setModalName(name);
	};
	return [isShowing, toggle, modalName];
};

export default useModal;
