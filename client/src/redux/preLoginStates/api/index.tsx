import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST_Request } from "../../../services";

export const login: any = createAsyncThunk(
	"preLogin/login",
	POST_Request(),
);

export const signUp: any = createAsyncThunk(
	"preLogin/signUp",
	POST_Request(),
);