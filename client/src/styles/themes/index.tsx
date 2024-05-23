import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#1976d2',
      default: '#72a6ea',
    },
    text: {
      primary: "#FFFFFF",
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: 'beige'
    },
    secondary: {
      main: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#595959',
    },
    background: {
      default: '#7d838b'
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const greenTheme = createTheme({
  palette: {
    background:{
      default: '#1e9961',
      paper: '#008000'
    },
    primary: {
      main: '#008000',
    },
    secondary: {
      main: '#f9f9f9',
    },
    text: {
      primary: "#FFFFFF",
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const redTheme = createTheme({
  palette: {
    background:{
      default: '#A90000',
      paper: '#A90000'
    },
    primary: {
      main: '#A90000',
    },
    secondary: {
      main: '#f9f9f9',
    },
    text: {
      primary: "#FFFFFF",
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export const themes = {
  "light": lightTheme,
  "dark": darkTheme,
  "default": defaultTheme,
  "green": greenTheme,
  "red": redTheme
}

// export { lightTheme, darkTheme, greenTheme, redTheme };
