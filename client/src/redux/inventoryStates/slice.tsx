import { createSlice } from "@reduxjs/toolkit";
import { getList } from "./api";

const initialState = {
	loading: true,
	totalProduct: 0,
	totalStoreValue: 0,
	totalStockOut: 0,
	totalCategory: 0,
	listData: [],
	isAdmin: true,
	selectedItem: {},
	modalOpen: false,
};

const inventorySlice: any = createSlice({
	name: "inventory",
	initialState,
	reducers: {
		toggleUser: (state, action) => {
			state.isAdmin = action.payload;
		},
		changeDisable: (state: any, action: any) => {
			const { key, value } = action.payload;
			return {
			  ...state,
			  listData: state.listData.map((item: any) => {
				if (item.key === key) {
				  return {
					...item,
					isDisabled: value,
				  };
				}
				return item;
			  }),
			};
		  },
		  deleteItem: (state:any, action: any) => {
			return {
				...state,
				listData: state.listData.filter((record: any) => record.key !== action.payload)
			}
		  }	,
		  toggleModal: (state:any, action:any) => {
			state.modalOpen = action.payload;
		  },
		  editItem: (state: any,action: any) => {
			state.selectedItem = action.payload;
		},
		setSelectedItem: (state: any,action: any) => {
			state.selectedItem[action.payload.label] = action.payload.value;
		},
		updateData: (state: any, action: any) => {
			return {
			  ...state,
			  listData: state.listData.map((record: any) => {
				if (record?.key === state.selectedItem.key) {
				  return state.selectedItem;
				}
				return record;
			  }),
			  modalOpen: false
			};
		  },		  
		  filterCounts: (state:any, action: any) => {
			state.totalStockOut = state.listData.filter(
				(item: any) => item.quantity === 0 && !item.isDisabled,
			)?.length;
			  state.totalProduct = state.listData?.filter((record: any) => !record?.isDisabled).length;
			  state.totalStoreValue = state.listData.reduce((sum: any, item: any) => {
				// Check if item is not disabled
				if (!item.isDisabled) {
				  return sum + Number(item.value.replace(/[^0-9.-]+/g, ""));
				}
				return sum;
			  }, 0);
			  const uniqueCategories = new Set();

				// Iterate through each object in the JSON data and add its category to the Set
				state.listData.forEach((item: any) => {
					!item?.isDisabled && uniqueCategories.add(item.category);
				});

				state.totalCategory = uniqueCategories.size;
		  }	  
	},
	extraReducers: (builder: any) => {
		builder
			/*--------- FETCHING ALL ENTITY TYPES BASED ON ENTITY SELECTED ------*/
			.addCase(getList.fulfilled, (state: any, action: any) => {
				const { payload } = action;
				state.listData = payload?.map((item: any, index: number) => ({
					...item,
					key: index,
					isDisabled: false, // You can set the default value of 'isDisabled' here
				}));
				state.loading = false;
				state.totalProduct = payload?.length;

				// Sum of all values using reduce method
				state.totalStoreValue = payload.reduce(
					(sum: any, item: { value: any }) =>
						sum + Number(item.value.replace(/[^0-9.-]+/g, "")),
					0,
				);
				state.totalStockOut = payload.filter(
					(item: any) => item.quantity === 0,
				)?.length;
				const uniqueCategories = new Set();

				// Iterate through each object in the JSON data and add its category to the Set
				payload.forEach((item: any) => {
					uniqueCategories.add(item.category);
				});

				state.totalCategory = uniqueCategories.size;
			})
			.addCase(getList.pending, (state: any) => {
				state.loading = true;
			})
			.addCase(getList.rejected, (state: any, action: any) => {
				state.apiError = action.payload;
				state.loading = false;
			});
	},
});

const inventoryActions = inventorySlice.actions;

export default inventorySlice.reducer;

export { inventoryActions };
