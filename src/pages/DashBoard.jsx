import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import firebase from "../firebase"
import {
    getDoc,
    setDoc,
    doc,
    getFirestore,
} from "firebase/firestore/lite";
import Header from "../components/header";
import ProfileImage from "../components/ProfileImage";
import LinkInput from "../components/LinkInput";
import EditableLink from "../components/EditableLink";
import loader from "../assets/loader.svg"

const DashBoard = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [links, setLinks] = useState([]);


    async function createUser(username) {
        try {
            await setDoc(doc(getFirestore(), "users", username), {
                name: username,
                links: [],
                theme: "default",
            }).then((e) => {
                console.log("new user Created");
            });
        } catch (error) {
            console.log("error in user Creation : ", error);
        }
    }

    async function getUser(user) {
        try {
            console.log("searching in db for ", user);
            const docRef = doc(getFirestore(), "users", user);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                // console.log(docSnap.data().links);
                setLinks(docSnap.data().links);

            } else {
                createUser(user);
            }
        } catch (e) {
            console.error("Error in Fetching User : ", e.code, e.message);
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            console.log(user);
            getUser(user.nickname);
        }
    }, [isAuthenticated]);


    function copyLink() {

        let baseURL = "https://flexlink.pages.dev/u/" + user.nickname;
        var dummy = document.createElement("input")
        document.body.appendChild(dummy);
        dummy.value = baseURL;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        alert("Your Page Link Copied to ClipBoard")
    }


    if (isAuthenticated) {
        return (
            <>
                <Header></Header>

                <div className="flex flex-col items-center justify-center self-center my-12">
                    <ProfileImage user={user.nickname}></ProfileImage>
                    <button
                        onClick={copyLink}
                        className="my-6 py-2 font-semibold  px-10 border-2 rounded-md border-indigo-700 hover:bg-white text-white hover:text-indigo-700  text-lg bg-indigo-700">
                        Copy Your Link
                    </button>

                    <div className="space-y-4 w-full px-6">
                        <p className="font-bold text-black text-2xl text-center" >Your Links</p>

                    {
                        links.map((link, index) => {
                            
                            
                            return <EditableLink key={index} index={index} propTitle={link.title} propLink={link.link} links={links} user={user.nickname} setLinks={setLinks} />
                        })
                        
                    }
                    </div>
                    <LinkInput links={links} user={user.nickname} setLinks={setLinks}></LinkInput>
                </div>

            </>
        );
    }

    if (isLoading) {
        return (
            <div className="w-screen min-h-screen h- flex flex-col items-center justify-center">
                <img src={loader} alt="Loader" className="h-1/6 w-1/6 animate-spin self-center" />

            </div>
        )
    }
};

export default DashBoard;
