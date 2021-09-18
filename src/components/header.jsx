import React from "react";
import LogoutButton from "./logoutButton";
import logo from "../assets/flexlinklogo.svg";
import LoginButton from "./loginButton";




const Header = ({ match }) => {
    return (

        <header>

            <div className="sm:px-4 md:px-8 lg:px-12 h-full max-h-full flex flex-row place-content-between content-center">

                <a href="/">
                    <img src={logo} height={"10px"} alt="flexlink logo" className="my-auto mx-0 p-0" />

                </a>


                <div className="max-h-full my-auto">
                  
                    {
                    (window.location.pathname!=="/")?
                      <LogoutButton></LogoutButton> : <LoginButton />
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
