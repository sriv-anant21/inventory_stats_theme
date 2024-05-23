import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_Request } from "../../../services";

export const getList: any = createAsyncThunk(
	"inventory/getList",
	GET_Request(),
);