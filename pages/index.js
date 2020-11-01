import Head from "next/head";
import Welcome from "../components/layout/Welcome";

export default () => (
    <div>
      <Head>
        <title>Countries app</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@0.6.1/build/pure-min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Welcome/>
    </div>
  );
