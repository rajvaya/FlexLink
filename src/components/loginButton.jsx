import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          redirectUri: window.location.origin + "/dashboard",
        })
      }
      className="py-2 font-semibold  px-10 border-2 rounded-md border-indigo-700 text-blue-800 text-lg"
    >
      Log In
    </button>
  );
};

export default LoginButton;
