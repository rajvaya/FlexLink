import React from 'react'
import LoginButton from '../components/loginButton'
import Header from "../components/header"
import Hero from '../components/Hero'

const HomePage = () => {
    return (

        <>
            <Header />
            <div className="flex flex-col p-4 content-center justify-center">

                {/* <LoginButton></LoginButton> */}

                <Hero />
            </div>
        </>
    )
}

export default HomePage
