import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

import EventsSearch from "../../components/events/EventsSearch";
import { Fragment } from "react/cjs/react.production.min";

import Router, { useRouter } from "next/router";
function EventsPage(params) {
  const events = getAllEvents();
  const router = useRouter();
  function onSearchHandler(selectedYear, selectedMonth) {
    const path = `/events/${selectedYear}/${selectedMonth}`;
    router.push(path);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={onSearchHandler} />
      <EventList events={events}></EventList>;
    </Fragment>
  );
}

export default EventsPage;
