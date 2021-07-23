import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dfcontx } from "./context/authcontext";

export default function Navbar() {
  const { currentUser } = useContext(dfcontx);
  function navToggle() {
    document.querySelector(".mobile-nav").classList.toggle("hidden");
  }

  return (
    <nav className="bg-green-100 text-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex">
            {/* logo */}
            <div>
              <Link to="/" className="flex py-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
                <span className="px-2 font-bold"> BookMaarks </span>
              </Link>
            </div>
            {/* primary nav  */}
            <div className="hidden mx-2 md:flex items-center">
              <a href="#" className="px-3">
                Pricing
              </a>
              <a href="#" className="px-3">
                About
              </a>
            </div>
          </div>

          {/* secondary nav */}
          <div className="hidden mx-2 md:flex items-center">
            {currentUser ? (
              <div className="flex items-center">
                <Link to="/addbookmark"
                  className="px-3 py-2 bg-blue-500 text-blue-100 rounded"
                >
                  Add Bookmarks
                </Link>
                <img
                  className="mx-2 ml-3  w-8 h-8 border-2 border-green-700 rounded-full"
                  src={currentUser.photoURL}
                />
                <a href="#" className="px-3">
                  {currentUser.displayName}
                </a>
              </div>
            ) : (
              <Link
                to="/login"
                className="mx-2 px-3 py-2 bg-blue-700 text-blue-100 rounded"
              >
                Login
              </Link>
            )}
          </div>

          {/* mobile button goes here */}

          <div className="md:hidden flex items-center">
            <button className="mobile-nav-btn" onClick={() => navToggle()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="mobile-nav hidden md:hidden">
        <Link to="/" className="block py-2 px-4 text-sm">
          <li className="list-none"> Home sweet</li>
        </Link>
        <Link to="/workcontainer" className="block py-2 px-4 text-sm">
          <li className="list-none"> Work Container </li>
        </Link>
        {currentUser ? (
          <div className="flex flex-col block px-4 text-sm">
						<a href="#" className="py-2">
              {currentUser.displayName}
            </a>
            <Link to="/addbookmark" className="py-2 my-1 bg-blue-500 text-blue-100 rounded w-40 text-center">
              Add Bookmarks
            </Link>
            {/* <img
              className="mx-2 ml-3  w-8 h-8 border-2 border-green-700 rounded-full"
              src={currentUser.photoURL}
            /> */}
            
          </div>
        ) : (
          <Link to="/login" className="block py-2 px-4 text-sm">
            <li className="list-none"> Login </li>
          </Link>
        )}
      </div>
    </nav>
  );
}
