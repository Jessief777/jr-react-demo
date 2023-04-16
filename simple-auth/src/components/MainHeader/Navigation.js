import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../AuthContext";

const Navigation = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {isAuthenticated && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
