import { createSlice } from "@reduxjs/toolkit";
import { login, signUp } from "./api";
import { setCookie } from "../../utilities/handleCookies";

const initialState = {
	loading: true,
	apiError: null,
	firstName: null,
	lastName: null,
	email: null,
	password: null,
	isLoggedIn: false,
	loggedInUserId: null,
	fieldError: null,
};

const preLoginSlice: any = createSlice({
	name: "preLogin",
	initialState,
	reducers: {
		setFields: (state, action) => {
			state.fieldError = null;
			switch (action.payload.field) {
				case "email":
					state.email = action.payload.value;
					break;
				case "firstName":
					state.firstName = action.payload.value;
					break;
				case "lastName":
					state.lastName = action.payload.value;
					break;
				case "password":
					state.password = action.payload.value;
					break;
				default:
			}
		},
	},
	extraReducers: (builder: any) => {
		builder
			.addCase(login.fulfilled, (state: any, action: any) => {
				const { payload } = action;
				state.isLoggedIn = true;
				state.loggedInUserId = payload.id;
				setCookie('token', payload?.jwt, { expires: 1 });
				setCookie('id', payload?.id, { expires: 1 });
				state.loading = false;

			})
			.addCase(login.pending, (state: any) => {
				state.loading = true;
			})
			.addCase(login.rejected, (state: any, action: any) => {
				state.fieldError = action.payload;
				state.loading = false;
			})
			.addCase(signUp.fulfilled, (state: any, action: any) => {
				const { payload } = action;
				state.isLoggedIn = true;
				state.loggedInUserId = payload.id;
				setCookie('token', payload?.jwt, { expires: 1 });
				setCookie('id', payload?.id, { expires: 1 });
				state.loading = false;
			})
			.addCase(signUp.pending, (state: any) => {
				state.loading = true;
			})
			.addCase(signUp.rejected, (state: any, action: any) => {
				state.fieldError = action.payload;
				state.loading = false;
			});
	},
});

const preLoginActions = preLoginSlice.actions;

export default preLoginSlice.reducer;

export { preLoginActions };
