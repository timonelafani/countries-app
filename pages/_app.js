import React from "react";
import "../styles/globals.css";
// MUI Core
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
// Utils
import theme from "../utils/theme";

function MyApp({ Component, pageProps }) {
  const generateClassName = createGenerateClassName({
    productionPrefix: "myclasses-",
  });
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;
