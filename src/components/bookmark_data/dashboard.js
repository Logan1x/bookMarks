import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";
import { dfcontx } from "../context/authcontext";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { Link } from "react-router-dom";
import Logo from "./undraw_refreshing_beverage_td3r.png";

export default function dashboard() {
  const { currentUser } = useContext(dfcontx);
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = firebase
      .firestore()
      .collection("times")
      .orderBy("timestamp", "desc")
      .where("uid", "==", currentUser.uid)
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        // console.log(newTimes)
        setTimes(newTimes);
      });
    setLoading(false);
    return unsubscribe;
  }, []);

  // console.log("arr", loading);

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
    "podcasts",
    "others"
  ];
  const [current_selected_tag, setTag] = useState("");

  const handleDropdown = (e) => {
    // console.log(e.target.value)
    setTag(e.target.value);
  };

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {times.length > 0 ? (
            <section>
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
                  ? times.map((item) => (
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
                  : times.map((item) => (
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
          ) : (
            <div className="text-center mt-10 px-2">
              <p className="text-2xl">
                No data available, Add
                <Link
                  className="border-b-2 border-green-300 hover:shadow rounded px-1"
                  to="/addbookmark"
                >
                  some data
                </Link>
              </p>
              <img
                className="w-3/5 md:w-1/5 m-auto"
                src={Logo}
                alt="not found"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
