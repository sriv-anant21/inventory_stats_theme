import React from "react";
import { HeaderWrapper, useStyles } from "./style";
import { SubHeader } from "../subHeader";
import LogoutIcon from '@mui/icons-material/Logout';
import { removeCookie } from "../../utilities/handleCookies";

export const Header = () => {
	const classes = useStyles();
	const handleChange = () => {
		removeCookie("token");
		removeCookie("id");
		window.location.reload();
	};
	return (
		<HeaderWrapper className={classes.root}>
			<h2 className={classes.heading}>Inventory Stats</h2>
			<SubHeader />
			<LogoutIcon className={classes.logoutIcon} onClick={() => {
				handleChange();
			}}/>
		</HeaderWrapper>
	);
};
