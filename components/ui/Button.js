import Link from "next/link";
import classes from "./Button.module.css";

function Button(params) {
  if (params.link) {
    return (
      <Link href={params.link}>
        <a className={classes.btn}>{params.children}</a>
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={params.onClick}>
      {params.children}
    </button>
  );
}

export default Button;
