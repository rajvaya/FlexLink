import React, { useEffect } from 'react'
import LogoutButton from '../components/logoutButton'
import { useAuth0 } from "@auth0/auth0-react";
import Profile from '../components/profile';
import firebase from '../firebase';

import { collection, getDocs, setDoc, query, doc, getFirestore } from 'firebase/firestore/lite';



const DashBoard = () => {


    const { user, isAuthenticated, isLoading, } = useAuth0();


    console.log(firebase);
    console.log();




    async function getAll() {
        try {

            const querySnapshot = await getDocs(collection(getFirestore(), "users"));
            querySnapshot.forEach((doc) => {

                console.log(doc.id, " => ", doc.data());
            });
        } catch (e) {
            console.error("Error in Fetching: ", e.code, e.message);
        }
    }


    useEffect(() => {
        if (isAuthenticated) {
            console.log(user);
            // getAll();


            // console.log(firebase.firebase.firestore());
            // firebase.initializeApp(firebaseConfig);

            // console.log(firebase);



        }


    }, [isAuthenticated]);



    if (isAuthenticated) {
        return (
            <div className="px-8 flex flex-col space-y-4">
                Hello from DashBoard

                <p>user is ? </p>
                <button onClick={() => { getAll(); }}>GET DATA</button>
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
