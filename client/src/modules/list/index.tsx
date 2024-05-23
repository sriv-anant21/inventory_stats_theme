import { useSelector } from "react-redux"
import Grid from "../../components/table"
import { ITEM_COLUMNS } from "./config"
import { ItemTableWrapper, useStyles } from "./style"

export const ItemTable = () => {
    const classes = useStyles();
    const {listData} = useSelector((state: any) => state.inventory);
    return(
        <ItemTableWrapper className={classes.root}>
            <Grid columns={ITEM_COLUMNS} data={listData}/>
        </ItemTableWrapper>
    )
}