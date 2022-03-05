import classes from "./EventItem.module.css";

import Button from "../ui/Button";
import DateIcon from "../icons/DateIcon";
import LocationIcon from "../icons/LocationIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

function EventItem(params) {
  const { id, title, image, date, location } = params;

  const humanReadbleDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadbleDate}</time>
          </div>
        </div>
        <div className={classes.address}>
          <LocationIcon />
          <address>{formatedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>EXPLORE EVENT</span>
            <span className={classes.icon}>
              <RightArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
