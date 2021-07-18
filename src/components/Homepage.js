import React from "react";
import Bookmark_data from "./bookmark_data/bookmark_data";

export default function HomePage() {
	return (
    <main>
      <div className="text-center py-3 text-2xl bg-green-200 max-w-sm md:max-w-2xl mx-auto rounded shadow my-2 mx-5">
        <h1>BookMaarks</h1>
        <h2 className="text-xl">see my best bookmarked resources</h2>
      </div>
      <section className="w-100">
        <Bookmark_data/>
      </section>
    </main>
    
		
	);
}
