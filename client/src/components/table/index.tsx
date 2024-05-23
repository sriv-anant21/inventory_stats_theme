import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { GridProps } from "./type";
import { useStyles } from "./style";

const Grid = ({ columns, data }: GridProps) => {
    const classes = useStyles();
    return (<TableContainer>
        <Table>
            <TableHead className={classes.head}>
                <TableRow>
                    {columns.map((column: any, index) => (
                        <TableCell key={index}>{column.title}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            {data?.length > 0 ? <TableBody>
                {data.map((item: any, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {columns.map((column: any, colIndex) => (
                            <TableCell key={colIndex}>{item[column.dataIndex]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody> : <div className={classes.noDataFound}>No Data Available, Please Referesh After Sometime.</div>}
        </Table>
    </TableContainer>
)};

export default Grid;
