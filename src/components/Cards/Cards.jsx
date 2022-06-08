import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from 'classnames'
import {Box, CircularProgress} from '@mui/material'

const Cards = (props) => {
  const { confirmed, recovered, deaths, lastUpdate } = props.data;
  if (!confirmed) {
    return (
      <Box>
        <CircularProgress/>
      </Box>
    )
  }
//   console.log(recovered);
  return (
    <div className={styles.container}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} md={3} className ={cx(styles.card, styles.infected)} component={Card}>
          <CardContent>
            <Typography gutterBottom color="textWarning">
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={5.0}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} m={2} className ={cx(styles.card, styles.recovered)} md={3} component={Card}>
          <CardContent>
            <Typography gutterBottom color="textWarning">
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={5.0}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} m={2} md={3} className ={cx(styles.card, styles.deaths)} component={Card}>
          <CardContent>
            <Typography gutterBottom color="textWarning">
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={5.0}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
