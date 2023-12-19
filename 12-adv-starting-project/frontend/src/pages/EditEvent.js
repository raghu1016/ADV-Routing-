import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

function EditEvent() {
  const { event } = useRouteLoaderData("event-detail");
  return <EventForm event={event} />;
}

export default EditEvent;
