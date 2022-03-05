import { Fragment } from "react/cjs/react.production.min";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout />
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
