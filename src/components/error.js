import react from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TITLE = "Page Not Found";

export default function error() {
  return (
    <div className="text-center mt-20 text-2xl">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <h1>
        Go{" "}
        <span className="border-b-4 border-green-300 hover:shadow-md rounded px-1">
          <Link to="/">Home</Link>
        </span>
        , You are drunk.
      </h1>
    </div>
  );
}
