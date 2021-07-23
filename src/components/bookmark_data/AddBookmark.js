import React, { useState, useContext } from "react";
import firebase from "../firebase/firebase";
import "../../styles.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dfcontx } from "../context/authcontext";

export default function create_post() {
  const { currentUser } = useContext(dfcontx);

  const [link, setLink] = useState("");
  const [tag, setTag] = useState("");

  const tags_data = ["design", "web", "blogging", "vocabulary"];

  // console.log(user)

  const showInfo = () => {
    toast("Order has been confirmed & placed!", {
      draggable: true,
      draggablePercent: 100
    });
  };

  const handleDropdown=(e) => {
    // console.log(e.target.value)
    setTag(e.target.value)
}

  // upload data on the firebase

  function formsubmit(e) {
    // e.preventDefault();
    // firebase
    //   .firestore()
    //   .collection("times")
    //   .add({
    //     title,
    //     content,
    //     votes,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //   })
    //   .then(() => {
    //     setTitle("");
    //     setContent("");
    //     showInfo();
    //   });
  }

  return (
    <div>
      {currentUser ? (
        <section className="createpost">
          <div className="createpost-content">
            <form onSubmit={formsubmit}>
              <label htmlFor="">Title</label>
              <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.currentTarget.value)}
                placeholder="Enter Post Title Here"
                required
              />
              <label htmlFor="">Tags</label>
              <div className="text-center flex justify-center items-center mx-auto my-3">
                {/* <p>Sort By : </p> */}
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
              <button type="submit">Create Post</button>
            </form>
          </div>
          <ToastContainer
            closeButton={false}
            position="top-center"
            style={{ textAlign: "center" }}
            draggable
          />
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
