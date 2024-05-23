import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(
  (theme: {
    palette: {
      background: { paper: any; default: any };
      text: { primary: any };
    };
    spacing: (arg0: number) => any;
  }) => {
    
    return {
      main: {
        height: '40px',
        borderRadius: '15px',
        marginLeft: "auto",
        display: "flex",
        backgroundColor: theme.palette.background.default,
        padding: '10px 20px',
      },
      root: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
      },
      subHeading: {
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        marginRight: "20px",
      },
      saveButton: {
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        fontSize: '12px',
      }
    };
  }
);
