import React, { useEffect } from "react";
import { Card, Grid, Typography } from "@mui/material";
import { getStatsColumn } from "./config";
import CardBox from "../../components/card";
import { useSelector } from "react-redux";
import { useStyles } from "./style";

const Stats: React.FC = () => {
  const state = useSelector((state: any) => state.inventory);
  const { listData } = state;
  const stats = getStatsColumn(state);
  const classes = useStyles();

  useEffect(() => {}, [listData]);
  return (
      <Grid className={classes.root} container spacing={2}>
        {stats.map((record: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardBox
              title={record?.title}
              value={record?.value}
              icon={record?.icon}
            />
          </Grid>
        ))}
      </Grid>
  );
};

export default Stats;
