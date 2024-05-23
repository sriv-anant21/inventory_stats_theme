import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: { palette: { background: { paper: any; default: any }; text: { primary: any; }; }; spacing: (arg0: number) => any; }) => {
    return ({
      head: {
        background: theme.palette.background.default,
      },
      noDataFound: {
        padding: '25px',
        width: '100%',
      }
    })});