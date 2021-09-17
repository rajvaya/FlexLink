import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect , loginWithPopup } = useAuth0();

    return <button onClick={() => loginWithRedirect({ redirectUri: window.location.origin+"/dashboard" })} className="py-4 px-20 border-2 rounded-md border-gray-500 text-blue-800 text-lg w-max">Log In</button>;
};

export default LoginButton; 