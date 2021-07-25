import React, { useState, useContext } from "react";
import firebase from "../firebase/firebase";
import "../../styles.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dfcontx } from "../context/authcontext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TITLE = "Add Bookmarks | BookMaarks";

export default function create_post() {
  const { currentUser } = useContext(dfcontx);
  // const router = useRouter();

  const [link, setLink] = useState("");
  const [tag, setTag] = useState("none");

  const tags_data = ["none", "design", "web", "blogging", "vocabulary"];

  // console.log(user)

  const showInfo = () => {
    toast("Url has been Added", {
      draggable: true,
      draggablePercent: 100
    });
  };

  // upload data on the firebase

  function formsubmit(e) {
    e.preventDefault();
    firebase
      .firestore()
      .collection("times")
      .add({
        uid: currentUser.uid,
        link: link,
        tag: tag,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        setTag("none");
        setLink("");
        showInfo();
      });
    // router.push("/");
  }

  return (
    <div className="flex h-4/5 justify-center items-center my-32">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {currentUser ? (
        <section>
          <form onSubmit={formsubmit}>
            <p className="text-2xl my-3">Paste url</p>
            <input
              className="border-2 rounded-lg shadow py-2 px-3"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              type="url"
              placeholder="Enter Resource URL"
            />
            <div className="text-center flex items-center mx-auto my-3">
              <p className="text-2xl">Tag : </p>
              <select
                onChange={(e) => setTag(e.target.value)}
                className="p-1 ml-3 rounded shadow-md"
              >
                {tags_data.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <button
              className="py-2 my-1 bg-blue-500 text-blue-100 rounded shadow-md w-full text-center"
              type="submit"
            >
              Submit
            </button>
          </form>
          <ToastContainer
            closeButton={false}
            position="top-center"
            style={{ textAlign: "center" }}
            draggable
          />
        </section>
      ) : (
        <section>
          <div className="text-2xl text-center">
            <p>
              Please Sign-In By Visiting{" "}
              <Link
                className="border-b-4 border-green-300 hover:shadow-md"
                to="/login"
              >
                login Page.
              </Link>
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
