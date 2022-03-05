import Link from "next/link";
import classes from "./MainHeader.module.css";

function MainHeader(params) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={{ pathname: "/" }}>Next Event</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href={{ pathname: "/events" }}>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
