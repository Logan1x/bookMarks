import React, { useContext } from "react";
import firebase from "../firebase/firebase";

// import CompB from "./CompB";
import { dfcontx } from "../context/authcontext";
import { Link } from "react-router-dom";

function Login() {
  const { signUp, signOut } = useContext(dfcontx);
  // console.log(value)

  async function handleSubmit() {
    var provider = new firebase.auth.GoogleAuthProvider();
    await signUp(provider)
    .catch(err => console.log(JSON.stringify(err)) )
    // router.push("/account")
  }

  return (
    <div >
      <button className="bg-blue-200 m-2 px-3" onClick={()=> handleSubmit()}>Sign In</button>
      <button className="bg-blue-200 m-2 px-3" onClick={()=> signOut()}>Sign out </button>
      <br/>
      <br/>
      {/* <Link to="/auth">Auth</Link> */}
    </div>
  );
}

export default Login;
