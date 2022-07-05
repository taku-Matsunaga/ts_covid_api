import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";
import { MdLocalHospital } from "react-icons/md";
import CountUp from "react-countup";

const Cards: React.FC = () => {
  const daily = useSelector(selectDaily);

  return (
    <div className={styles.container}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={3} component={Card} className={styles.Infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital />
              Infected persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Confirmed}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital />
              Recovered persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Recovered}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital />
              Dead persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Deaths}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
