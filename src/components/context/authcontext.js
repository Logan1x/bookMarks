import React, { createContext, useEffect, useState } from "react";
import firebase from "../firebase/firebase";

const dfcontx = createContext();

const authcontext = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(provider) {
    // console.log('reached')
    return firebase.auth().signInWithPopup(provider);
  }

  function signOut() {
    return firebase.auth().signOut();
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      // console.log(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    // getUser,
    // login,
    signOut,
    signUp
  };
  return (
    <dfcontx.Provider value={value}>
      {!loading && props.children}
    </dfcontx.Provider>
  );
};

export { dfcontx };
export default authcontext;
