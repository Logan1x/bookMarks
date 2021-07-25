import React, { useContext } from "react";
import firebase from "../firebase/firebase";
import { FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { dfcontx } from "../context/authcontext";
import { Link } from "react-router-dom";

const TITLE = "Login | BookMaarks";

function Login() {
  const { currentUser, signUp } = useContext(dfcontx);

  async function handleSubmit(provider) {
    var provider = new provider();
    await signUp(provider).catch((err) => console.log(JSON.stringify(err)));
    // router.push("/account")
  }

  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {currentUser ? (
        <div className="py-2 text-center text-3xl mt-32">
          <h1> Signed In Successfully</h1>
          <p>
            Visit{" "}
            <Link to="/" className="border-b-4 border-green-300">
              Homepage
            </Link>
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center m-auto w-full mt-32 text-3xl">
          <h1 className="border-b-2 py-2"> Sign In With</h1>
          <div className="flex justify-center items-center mt-2">
            <button
              className=" m-2 p-1 text-3xl border-4 rounded-full hover:bg-green-300"
              onClick={() => handleSubmit(firebase.auth.GoogleAuthProvider)}
            >
              <FaGoogle />
            </button>
            <button
              className=" m-2 p-1 text-3xl border-4 rounded-full hover:bg-green-300"
              onClick={() => handleSubmit(firebase.auth.TwitterAuthProvider)}
            >
              <FaTwitter />
            </button>
            <button
              className=" m-2 p-1 text-3xl border-4 rounded-full hover:bg-green-300"
              onClick={() => handleSubmit(firebase.auth.GithubAuthProvider)}
            >
              <FaGithub />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
