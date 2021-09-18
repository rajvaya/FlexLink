import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout({ returnTo: window.location.origin })} className="py-2 font-semibold  px-10 border-2 rounded-md border-gray-500 text-blue-800 text-lg">
            Log Out
        </button>

    );
};

export default LogoutButton;