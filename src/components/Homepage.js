import React, { useContext } from "react";
import Bookmark_data from "./bookmark_data/bookmark_data";
import Dashboard from "./bookmark_data/dashboard";
import { dfcontx } from "../components/context/authcontext";
import { Helmet } from "react-helmet";

const TITLE = "Home | Bookmaarks";

export default function HomePage() {
  const { currentUser } = useContext(dfcontx);
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <main>
        <div className="text-center py-3 text-2xl bg-green-200 max-w-sm md:max-w-2xl mx-auto rounded shadow my-2 mx-5">
          <h1>BookMaarks</h1>
          <h2 className="text-xl">see your best bookmarked resources</h2>
        </div>
        <section className="w-100">
          {currentUser ? <Dashboard /> : <Bookmark_data />}
        </section>
      </main>
    </div>
  );
}
