import React from 'react';
import { Card, Grid, Typography } from '@mui/material';
import { CardProps } from './type';
import { useStyles } from './style';

const CardBox = ({ title, value, icon }: CardProps) => {
  const classes = useStyles();
    return(
    <Card variant="outlined">
      <Grid container alignItems="center" spacing={1} className={classes.root}>
        <Grid item>
          {icon}
        </Grid>
        <Grid item>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{value}</Typography>
        </Grid>
      </Grid>
    </Card>)
};

export default CardBox;
