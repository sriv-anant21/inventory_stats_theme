import React from "react";
import {ShoppingCartOutlined, MonetizationOnOutlined, CategoryOutlined, CancelOutlined} from '@mui/icons-material';

export const getStatsColumn = (state: any) => {
    const STATS_DATA = [
        {
            title: "Total Products",
            value: state.totalProduct,
            icon: <ShoppingCartOutlined />
        },
        {
            title: "Total Store Value",
            value: state.totalStoreValue,
            icon: <MonetizationOnOutlined />
        },
        {
            title: "Out Of Stocks",
            value: state.totalStockOut,
            icon: <CancelOutlined /> 
        },
        {
            title: "No Of Category",
            value: state.totalCategory,
            icon: <CategoryOutlined />
        }
    ];
    return STATS_DATA;
}