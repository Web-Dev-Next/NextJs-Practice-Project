import EventItem from "../events/EventItem";

import classes from "./EventList.module.css";

function EventList(params) {
  const { events } = params;
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  );
}
export default EventList;
