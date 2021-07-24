import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/bookmark_data/dashboard";
// import WorkContainer from "./components/WorkContainer";
import HomePage from "./components/Homepage";
import AuthContext from "./components/context/authcontext";
import Login from "./components/Auth/login";
import AddBookmark from "./components/bookmark_data/AddBookmark";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <AuthContext>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/addbookmark" component={AddBookmark} />
          </Switch>
        </Router>
      </AuthContext>
    </div>
  );
}

// Todo - add about page
