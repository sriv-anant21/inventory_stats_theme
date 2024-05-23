import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useStyles } from './style';

export const Loader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
