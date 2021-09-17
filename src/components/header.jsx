import React from "react";
import LogoutButton from "./logoutButton";
import logo from "../assets/flexlinklogo.svg";
const Header = () => {
    return (

        <header>

            <div className=" h-full max-h-full border-2 border-pink-700 flex flex-row place-content-between content-center">

                <a href="/">
                    <img src={logo} height={"10px"} alt="flexlink logo" className="my-auto mx-0 p-0" />

                </a>


                <div className="max-h-full my-auto">
                    <LogoutButton></LogoutButton>
                </div>
            </div>
        </header>
    );
};

export default Header;
