import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: { palette: { background: { paper: any; }; text: { primary: any; }; }; spacing: (arg0: number) => any; }) => {
  
  return ({
    heading: {
        color: '#FFFFFF',
        fontWeigt: 500
    },
    subText: {
        marginTop: '20px !important',
        color: '#FFFFFF !important'
    },
    root: {
        background: 'url("https://wallpaperaccess.com/full/1900932.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        textAlign: 'center',
    },
    forms: {
        maxWidth: '400px',
        margin: 'auto',
        paddingTop: '100px'
    },
    password: {
        '& label': {
            color: '#FFFFFF',
        }
    },
    email: {
        '& label': {
            color: '#FFFFFF',
        }
    },
    error: {
        color: "red",
    }
  })});