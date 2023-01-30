import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return(
    <>
      <h1 className="text-center">Oops!</h1>
      <p className="text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}

export { ErrorPage };
