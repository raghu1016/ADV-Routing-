import PageContent from "../components/PagaConent";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  console.log(error);
  let title = "An error occurred";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found";
    message = "Could not find resource";
  }
  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}

export default ErrorPage;
