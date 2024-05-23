import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: { palette: {
  secondary: any; background: { paper: any; default: any }; text: { primary: any; }; 
}; spacing: (arg0: number) => any; }) => {
  
  return ({
    root: {
      background: theme.palette.secondary.main,
      color: theme.palette.text.primary,
      maxWidth: 'unset !important',
      height: 'inherit',
      padding: '0 !important',
    },
    user: {
      '& h2': {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        padding: '8px',
        borderRadius: '10px',
        width: 'max-content',
      },
      paddingLeft: '16px'
    }
  })});