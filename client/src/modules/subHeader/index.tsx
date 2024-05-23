//@ts-nocheck
import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { THEMES_OPTIONS } from "../../utilities/themeConfig";
import { useStyles } from "./style";
import { useDispatch } from "react-redux";
import { themeActions } from "../../redux/themeStates/slice";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { saveUserPreference } from "../../redux/themeStates/api";
import { SAVE_PREFERENCE } from "../../services/endpoint";
import { getCookie } from "../../utilities/handleCookies";
import SaveIcon from '@mui/icons-material/Save';
import { useSnackbar } from "notistack";


export const SubHeader = () => {
	const { theme } = useSelector((state: any) => state.theme);
    const { loggedInUserId } = useSelector((state: any) => state.preLogin);
	const { selectTheme } = themeActions;
	const dispatch = useDispatch();
	const classes = useStyles();
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const handleThemeChange = (event) => {
		dispatch(selectTheme(event.target.value));
	};

	return (
		<div className={classes.main}>
			<div className={classes.subHeading}>Choose your theme </div>
			<Select
				value={theme}
				className={classes.root}
				onChange={handleThemeChange}
				size="small"
			>
				{THEMES_OPTIONS.map((item) => (
					<MenuItem value={item?.value} key={item?.key}>
						{item?.label}
					</MenuItem>
				))}
			</Select>
			<Button
				className={classes.subHeading}
				onClick={() =>
					dispatch(
						saveUserPreference({
							endpoint: SAVE_PREFERENCE,
							params: { id: loggedInUserId??getCookie("id") },
							body: { preference: theme },
						}),
					)
					.then((response: { payload: { message: any; }; }) => {
						if(response?.payload?.message || response?.payload){
							enqueueSnackbar(response?.payload?.message??response?.payload);
						}
					})
				}
			>
			<span className={classes.saveButton}><SaveIcon /> Save</span>
			</Button>
		</div>
	);
};
