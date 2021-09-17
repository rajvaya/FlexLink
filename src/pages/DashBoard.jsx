import React, { useEffect } from 'react'
import LogoutButton from '../components/logoutButton'
import { useAuth0 } from "@auth0/auth0-react";
import Profile from '../components/profile';

const DashBoard = () => {


    const { user, isAuthenticated, isLoading ,} = useAuth0();


    useEffect(() => {
        if(isAuthenticated)
        console.log(user);

    }, [isAuthenticated]);



    if (isAuthenticated) {
        return (
            <div className="px-8 flex flex-col space-y-4">
                Hello from DashBoard

                <p>user is ? </p>
                <LogoutButton></LogoutButton>

                <Profile></Profile>
            </div>
        )
    }

    if (isLoading) {


        return (
            <div>Loading.........</div>
        )
    }
}

export default DashBoard
