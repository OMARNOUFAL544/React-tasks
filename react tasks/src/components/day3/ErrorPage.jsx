import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  // Check if error exists, and provide fallback if not
  const errorMessage = error ? error.statusText || error.message : "An unknown error occurred.";

  return (
    <div>
      <h1>Oops!</h1>
      <h1>{errorMessage}</h1>
      <a href="/">
        Go back to Home
      </a>
    </div>
  );
}

export default ErrorPage;
