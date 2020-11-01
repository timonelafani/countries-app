import { Button, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import BorderCountries from "../../components/layout/BorderCountries";
import CountryDetails from "../../components/layout/CountryDetails";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.tonalOffset.main,
  },
  button: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },
}));

const Country = ({ country, borders }) => {
  const classes = useStyles();
  const router = useRouter();

  return country ? (
    <div className={classes.root}>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => router.back()}
        className={classes.button}
        startIcon={<ArrowBackIosIcon />}
      >
        back
      </Button>
      <CountryDetails country={country[0]} />
      <BorderCountries borders={borders} />
    </div>
  ) : (
    <Typography varinat="h5" className={classes.root}>Upss something bad happend!</Typography>
  );
};

Country.getInitialProps = async (ctx) => {
  const name = ctx.query.name;
  let borders = null;
  try {
    const res1 = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    const country = res1.data;
    console.log(country, country[0].borders);
    console.log(country[0].borders.join(";"));
    console.log(borders, country);
    if (country && country[0].borders.length > 0) {
      const res2 = await axios.get(
        `https://restcountries.eu/rest/v2/alpha?codes=${country[0].borders.join(
          ";"
        )}`
      );
      borders = res2.data;
    }
    console.log(borders, country);
    if (country) return { country, borders };
  } catch (error) {
    return { error };
  }
};

export default Country;
