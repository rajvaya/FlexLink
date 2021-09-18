
import React from "react"
import heroImage from "../assets/share.svg"
import { useAuth0 } from "@auth0/auth0-react";


const Hero = () => {


    const { loginWithRedirect } = useAuth0();

    return (
        <div className="max-w-screen-xl grid grid-cols-4 gap-6 lg:grid-cols-12 mx-4 md:mx-12 lg:mx-32 items-center my-8 md:my-12 self-center">
            <div className="grid w-full col-span-4 lg:col-span-6 gap-y-4 md:gap-y-8">
                <div className="font-bold text-6xl">
                    Share Your Link With FlexLink
                </div>
                <div className="font-semibold text-3xl">
                    The Only Link You’ll Ever Need
                    Share Multiple Links With 1 URL

                </div>
                <div className="grid lg:place-content-start place-content-center w-full mt-6 md:mt-4">

                    <div onClick={() => {

                        loginWithRedirect({ screen_hint: "signup", redirectUri: window.location.origin + "/dashboard" });


                    }} className="min-w-full px-8  border-2 rounded-lg border-indigo-700 py-3 text-center text-white bg-indigo-700 hover:bg-white hover:text-indigo-700 font-bold text-2xl animate-pulse">
                        Sign Up Now

                    </div>

                </div>
            </div>
            <div className="col-span-4 lg:col-span-6 my-4 sm:mt-16 md:m-8 h-full self-center">
                <img src={heroImage} alt="hero" className="self-center w-full" />
            </div>
        </div>
    )
}

export default Hero