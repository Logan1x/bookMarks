import React, { useState, useContext } from "react";
import firebase from "../firebase/firebase";
import "../../styles.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dfcontx } from "../context/authcontext";
import { useHistory } from "react-router-dom";

export default function create_post() {
  const { currentUser } = useContext(dfcontx);

  const [link, setLink] = useState("");
  const [tag, setTag] = useState("");
  const [array, setArray] = useState([]);

  const tags_data = ["design", "web", "blogging", "vocabulary"];

  // console.log(user)

  const showInfo = () => {
    toast("Order has been confirmed & placed!", {
      draggable: true,
      draggablePercent: 100
    });
  };

  const handleSubmit = () => {
    const arr = [...array];
    arr.push({
      link: link,
      tag: tag
    });
    console.log(arr);
    setArray(arr);
  };

  // const handleDropdown = (e) => {
  //   // console.log(e.target.value)
  //   setTag(e.target.value);
  // };

  // upload data on the firebase

  function formsubmit(e) {
    e.preventDefault();
    handleSubmit();
    firebase
      .firestore()
      .collection("times")
      .add({
        array,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        setTag("");
      });
  }

  return (
    <div className="flex h-4/5 justify-center items-center my-32">
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
                <option value="none">none</option>
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
        </section>
      ) : (
        <section className="createpost">
          <div className="createpost-content">
            <p>Please Sign-In By Visiting login Page.</p>
          </div>
        </section>
      )}
    </div>
  );
}
