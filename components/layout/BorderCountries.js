import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CountryContainer from "./CountryContainer";

const useStyles = makeStyles((theme) => ({
  borderRoot: {
    width: "80%",
    margin: "0 auto",
    marginTop: "-60px",
    overflowX: "auto",
    flexWrap: "nowrap",
    flex: "100px 1 0",
  },
  item: {
    padding: theme.spacing(2),
  },
  noBorders:{
      margin:"0 auto"
  }
}));

const BorderCountries = (props) => {
  const { borders } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.borderRoot}>
      {borders ? (
        borders.map((country) => {
          return (
            <Grid item sm={6} md={3} className={classes.item} key={country.name}>
              <CountryContainer country={country} />
            </Grid>
          );
        })
      ) : (
        <Typography variant="h5" className={classes.noBorders}>
          This country has no border countries
        </Typography>
      )}
    </Grid>
  );
};

export default BorderCountries;
