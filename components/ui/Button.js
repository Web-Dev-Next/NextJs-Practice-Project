import Link from "next/link";
import classes from "./Button.module.css";

function Button(params) {
  return (
    <Link href={params.link}>
      <a className={classes.btn}>{params.children}</a>
    </Link>
  );
}

export default Button;
