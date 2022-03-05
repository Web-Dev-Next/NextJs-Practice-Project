import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";
function EventsPage(params) {
  const events = getAllEvents();
  return <EventList events={events}></EventList>;
}

export default EventsPage;
