import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: { palette: { background: { paper: any; }; text: { primary: any; }; }; spacing: (arg0: number) => any; }) => {
  
  return {
    root: {
      background: theme.palette.background.paper,
      padding: theme.spacing(2),
    },
  };
});
