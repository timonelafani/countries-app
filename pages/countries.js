import { Grid, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import CountryContainer from "../components/layout/CountryContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.tonalOffset.main,
  },
  item: {
    padding: theme.spacing(2),
  },
}));

function Page({ countries, error }) {
  const classes = useStyles();
  if(error){
    return <Typography variant="h5">Upss something bad happend!</Typography>
  }
  return (
    <div className={classes.root}>
      <Grid container className={classes.paper}>
        {countries &&
          countries.map((country) => {
            return (
              <Grid item xs={12} sm={6} md={4} className={classes.item} key={country.name}>
                <CountryContainer country={country} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

Page.getInitialProps = async () => {
  try {
    const res = await axios.get("https://restcountries.eu/rest/v2/all");
    const countries = res.data;
    if (countries) return { countries };
  } catch (error) {
    return { error };
  }
};

export default Page;
