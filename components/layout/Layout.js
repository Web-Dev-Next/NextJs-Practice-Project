import { Fragment } from "react/cjs/react.production.min";
import MainHeader from "./MainHeader";
function Layout(params) {
  return (
    <Fragment>
      <MainHeader />
      <main>{params.children}</main>
    </Fragment>
  );
}

export default Layout;
