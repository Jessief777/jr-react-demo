//import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { useContext } from "react";
import AuthContext from "./AuthContext";

function App() {
  const {isAuthenticated, logout} = useContext(AuthContext)
  return (
    <>
      {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
      <MainHeader onLogout={logout} />
      <main>
        {!isAuthenticated && <Login/>}
        {isAuthenticated && <Home/>}
      </main>
    </>
  );
}

export default App;
