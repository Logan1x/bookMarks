import { LinkPreview } from "@dhaiwat10/react-link-preview";
import React, { useState } from "react";
import Hero2 from "./undraw_noted_pc9f.png";
import { Link } from "react-router-dom";

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
    },
    {
      link: "https://softskills.audio/episodes/",
      tag: "podcasts"
    },
    {
      link: "https://www.julian.com/guide/growth/intro#growth-success",
      tag: "marketing"
    },
    {
      link: "https://coderadio.freecodecamp.org/",
      tag: "music"
    }
  ];
  const tags_data = [
    "design",
    "tools",
    "web",
    "blogging",
    "vocabulary",
    "ui/ux",
    "marketing",
    "hackathon",
    "writing",
    "music",
    "podcasts",
    "others"
  ];
  const [current_selected_tag, setTag] = useState("");

  const handleDropdown = (e) => {
    // console.log(e.target.value)
    setTag(e.target.value);
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl h-700px m-auto my-20">
        <div className="text-center md:text-left">
          <p className="text-3xl px-4 mb-4 text-center md:text-left font-bold max-w-md ">
            Welcome to a place where you can handle all your resources
          </p>
          <Link
            to="/login"
            className="px-4 py-1 bg-blue-500 text-blue-100 rounded hover:shadow hover:bg-blue-700 md:mx-6"
          >
            Login
          </Link>
        </div>
        <img
          className="my-2 md:w-2/5 h-2/5 bg-blue-200"
          src={Hero2}
          alt="heroimage"
        />
      </div>
      <div className="text-center flex justify-center items-center mx-auto my-3">
        <p>Sort By : </p>
        <select
          onChange={(e) => handleDropdown(e)}
          className="py-0.5 mx-1 rounded shadow-md bg-green-100"
        >
          <option value="">all</option>
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
