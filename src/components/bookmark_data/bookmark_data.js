import { LinkPreview } from "@dhaiwat10/react-link-preview";
import React, { useState } from "react";
import Heroimg from "./undraw_Decide_re_ixfw.png";

const bookmark_data = () => {
  const arr = [
    {
      link: "https://web.dev/",
      tag: ["design"]
    },
    {
      link: "https://developer.mozilla.org/en-US/",
      tag: ["web", "design"]
    },
    {
      link: "https://www.grammarly.com/blog/category/how-to/",
      tag: "blogging"
    },
    {
      link: "https://themakersclub.vercel.app/resources",
      tag: "web"
    },
    {
      link: "https://wordize.netlify.app",
      tag: "vocabulary"
    }
  ];
  const tags_data = ["design", "web", "blogging", "vocabulary"];
  const [current_selected_tag, setTag] = useState("");

  const handleDropdown = (e) => {
    // console.log(e.target.value)
    setTag(e.target.value);
  };

  return (
    <section>
      <div className="flex items-center justify-center mx-auto flex-wrap md:h-full my-10 px-4">
        <h1 className="text-center text-3xl font-bold max-w-3/5">
          Welcome to a place where you can handle all your resources
        </h1>
        <img className="md:w-3/5" src={Heroimg} alt="heroimg" />
      </div>
      <div className="text-center flex justify-center items-center mx-auto my-3">
        <p>Sort By : </p>
        <select
          onChange={(e) => handleDropdown(e)}
          className="py-0.5 mx-1 rounded shadow-md bg-green-100"
        >
          <option value="">none</option>
          {tags_data.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex justify-center flex-wrap max-w-6xl mx-auto text-center">
        {/* to check if there is any tag selected or not */}
        {current_selected_tag
          ? arr.map((item) => (
              <>
                {/* to sort by if current tag is selected */}
                {item.tag.includes(current_selected_tag) ? (
                  <LinkPreview
                    url={item.link}
                    descriptionLength="25"
                    className="mar-x"
                    height="260px"
                    width="250px"
                    margin=".5rem"
                    key={item}
                  />
                ) : (
                  ""
                )}
              </>
            ))
          : arr.map((item) => (
              <>
                <LinkPreview
                  url={item.link}
                  descriptionLength="25"
                  className="mar-x"
                  height="260px"
                  width="250px"
                  margin=".5rem"
                  key={item}
                />
              </>
            ))}
      </div>
    </section>
  );
};

export default bookmark_data;
