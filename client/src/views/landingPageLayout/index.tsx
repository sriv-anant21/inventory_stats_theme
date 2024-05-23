import { useState } from "react";
import {
	TextField,
	Button,
	Typography,
	Link,
	Grid,
} from "@mui/material";
import { useStyles } from "./style";
import { useSelector } from "react-redux";
import { preLoginActions } from "../../redux/preLoginStates/slice";
import { useDispatch } from "react-redux";
import { loginSignUp } from "./helper";
import { useSnackbar } from "notistack";

const LoginSignupPage = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const dispatch = useDispatch();
	const classes = useStyles();
	const { email, lastName, firstName, password } = useSelector(
		(state: any) => state.preLogin,
	);
	const { enqueueSnackbar } = useSnackbar();
	const { setFields } = preLoginActions;

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
	};

	return (
		<div className={classes.root}>
			<div className={classes.forms}>
				<Typography
					component="h1"
					variant="h5"
					className={classes.heading}
				>
					{isLoggedIn ? "Login" : "Sign Up"}
				</Typography>
				<form onSubmit={handleSubmit}>
					{!isLoggedIn && (
						<>
							<TextField
								className={classes.email}
								variant="standard"
								margin="normal"
								required
								fullWidth
								id="firstName"
								label="First Name"
								name="firstName"
								autoComplete="firstName"
								autoFocus
								value={firstName}
								onChange={(e) =>
									dispatch(
										setFields({
											field: "firstName",
											value: e.target.value,
										}),
									)
								}
							/>
							<TextField
								className={classes.email}
								variant="standard"
								margin="normal"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lastName"
								autoFocus
								value={lastName}
								onChange={(e) =>
									dispatch(
										setFields({
											field: "lastName",
											value: e.target.value,
										}),
									)
								}
							/>
						</>
					)}
					<TextField
						className={classes.email}
						variant="standard"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						onChange={(e) =>
							dispatch(
								setFields({
									field: "email",
									value: e.target.value,
								}),
							)
						}
					/>
					<TextField
						className={classes.password}
						variant="standard"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) =>
							dispatch(
								setFields({
									field: "password",
									value: e.target.value,
								}),
							)
						}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={() => { loginSignUp(isLoggedIn, enqueueSnackbar)
						}}
					>
						{isLoggedIn ? "Login" : "Sign Up"}
					</Button>
					<Grid container>
						<Grid item>
							<Link
								href="#"
								onClick={() => setIsLoggedIn(!isLoggedIn)}
								variant="body2"
								className={classes.subText}
							>
								{isLoggedIn
									? "Don't have an account? Sign Up"
									: "Already have an account? Log in"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</div>
	);
};

export default LoginSignupPage;
