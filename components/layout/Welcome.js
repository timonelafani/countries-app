import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#fff",
    backgroundImage: "url('/images/cities.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "100% 100%",
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      className={classes.root}
    >
      <Box width="90%" my={2}>
        <Typography variant="h3">
          The love of one's country is a splendid thing. But why should love
          stop at the border?
        </Typography>
      </Box>
      <Box width="60%" my={2}>
        <Typography variant="h5">
          This page lists all the countries of the world in alphabetical order.
          It includes official names, languages, border countries and other
          infrormation.
        </Typography>
      </Box>
      <Link href="/countries">
        <Button
          color="primary"
          variant="contained"
        >
          Go to list
        </Button>
      </Link>
    </Grid>
  );
};

export default Welcome;
