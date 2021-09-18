import React from "react";
import LogoutButton from "./logoutButton";
import logo from "../assets/flexlinklogo.svg";
import LoginButton from "./loginButton";




const Header = ({ match }) => {
    return (

        <header>

            <div className="sm:px-4 md:px-20 lg:px-32 h-full max-h-full flex flex-row place-content-between content-center">

                <a href="/" className="flex flex-row items-center text-4xl font-bold text-indigo-900">
                    <img src={logo} height={"10px"} alt="flexlink logo" className="my-auto mx-0 p-0" />
                    <p>FlexLink</p>

                </a>


                <div className="max-h-full my-auto">

                    {
                        (window.location.pathname !== "/") ?
                            <LogoutButton></LogoutButton> : <LoginButton />
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
