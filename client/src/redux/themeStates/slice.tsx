import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile, saveUserPreference } from "./api";
import { setCookie } from "../../utilities/handleCookies";

const initialState = {
	loading: true,
	apiError: null,
	theme: "default"
};

const themeSlice: any = createSlice({
	name: "theme",
	initialState,
	reducers: {
		selectTheme: (state, action) => {
			state.theme = action.payload;
		}
	},
	extraReducers: (builder: any) => {
		builder
			.addCase(getUserProfile.fulfilled, (state: any, action: any) => {
				const { payload } = action;
				state.theme = payload?.preference?.colorTheme;			
				setCookie('name', payload?.firstName, { expires: 1 });
				state.loading = false;
			})
			.addCase(getUserProfile.pending, (state: any) => {
				state.loading = true;
			})
			.addCase(getUserProfile.rejected, (state: any, action: any) => {
				state.apiError = action.payload;
				state.loading = false;
			})
			.addCase(saveUserPreference.fulfilled, (state: any, action: any) => {
				state.loading = false;
			})
			.addCase(saveUserPreference.pending, (state: any) => {
				state.loading = true;
			})
			.addCase(saveUserPreference.rejected, (state: any, action: any) => {
				state.apiError = action.payload;
				state.loading = false;
			});
	},
});

const themeActions = themeSlice.actions;

export default themeSlice.reducer;

export { themeActions };
