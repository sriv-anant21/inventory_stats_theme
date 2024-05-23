import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_Request, POST_Request } from "../../../services";

export const getUserProfile: any = createAsyncThunk(
	"theme/getUserProfile",
	GET_Request(),
);

export const saveUserPreference: any = createAsyncThunk(
	"theme/saveTheme",
	POST_Request(),
);
