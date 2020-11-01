import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root:{
    minWidth:"19vw",
  },
  image: {
    height: "180px",
    maxWidth: "100%",
    verticalAlign: "middle",
    backgroundPosition:" center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const CountryContainer = (props) => {
  const { country } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
          image={country.flag}
          title={`${country.name} flag`}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="h2">
            {country.name} - {country.capital}
          </Typography>
          <Typography variant="suntitle1" color="textSecondary" component="p">
            Population: {country.population.toLocaleString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/countries/${country.name}`}>
          <Button size="small" color="primary">
            View details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CountryContainer;
