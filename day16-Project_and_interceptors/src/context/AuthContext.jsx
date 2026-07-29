import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("Loggedinuser")),
  );

  console.log(loggedInUser);
  console.log(registeredUser);
  return (
    <Auth.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {" "}
      {children}{" "}
    </Auth.Provider>
  );
};
