import { createContext, useState, useEffect } from "react";

const IS_LOGGED_IN = "isLoggedIn";

const initialState = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext(initialState);

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    localStorage.setItem(IS_LOGGED_IN, "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(IS_LOGGED_IN);
    setIsLoggedIn(false);
  };

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem(IS_LOGGED_IN);
  //   if (isLoggedIn && isLoggedIn === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem(IS_LOGGED_IN);
    setIsLoggedIn(isLoggedIn === "1");
  }, []);
  // {/* 和localState 进行一个绑定*/}

  const values = {
    isAuthenticated: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
