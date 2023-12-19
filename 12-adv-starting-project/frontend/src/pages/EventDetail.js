import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetail() {
  // const data = useLoaderData();
  const { event } = useRouteLoaderData("event-detail");
  return (
    // <div>
    //   <h2>EventDetail</h2>
    //   <p>Event ID: {useParams().eventId}</p>
    // </div>
    <EventItem event={event} />
  );
}

export default EventDetail;

export async function loader({ request, params }) {
  console.log(params.eventId);
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch event", status: 500 },
      {
        status: 500,
      },
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }
  return redirect("/events");
}
