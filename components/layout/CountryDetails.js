import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles((theme) => ({
  detailsRoot: {
    width: "100%",
    padding: theme.spacing(10, 5),
    boxShadow: "1px 8px 10px 10px rgba(0,0,0,0.12)",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cover: {
    width: "30%",
    height: "auto",
  },
}));

const CountryDetails = (props) => {
  const { country } = props;
  const classes = useStyles();

  var currencies = country.currencies
    .map((currency) => currency.code)
    .join(", ");

  var languages = country.languages.map((language) => language.name).join(", ");

  return (
    <Card className={classes.detailsRoot}>
      <Grid container justify="center">
        <img
          className={classes.cover}
          src={country.flag}
          title={`${country.name} flag`}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5">{country.name}</Typography>
            <Typography variant="h6">Capital: {country.capital}</Typography>
            <Typography variant="h6">
              Population: {country.population.toLocaleString()}
            </Typography>
            <Typography variant="h6">Currency: {currencies}</Typography>
            <Typography variant="h6">Language: {languages}</Typography>
            <Link href="/countries">
              <Button size="small" color="primary">
                Go to countries list
              </Button>
            </Link>
          </CardContent>
        </div>
      </Grid>
    </Card>
  );
};

export default CountryDetails;
