import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@material-ui/core';

// project imports
import config from '../../../config';
import logo from "../../../assets/images/Couche-Tard-Merchant-Center-poweredby.svg";

// ===========================|| MAIN LOGO ||=========================== //

const LogoSection = () => (
	<ButtonBase disableRipple component={Link} to={config.defaultPath}>
		<img src={logo} alt="close icon" height={50} />
	</ButtonBase>
);

export default LogoSection;
