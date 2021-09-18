import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import firebase from "../firebase";
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

    if (isAuthenticated) {
        return (
            <>
                <Header></Header>

                <div className="flex flex-col items-center justify-center self-center my-12">
                    <ProfileImage user={user.nickname}></ProfileImage>

                    {
                        links.map((link, index) => {

                          
                            return <EditableLink key={index} index={ index} propTitle={link.title} propLink={link.link} links={links} user={user.nickname} setLinks={setLinks}/>
                        })

                    }
                    <LinkInput links={links} user={user.nickname} setLinks={setLinks}></LinkInput>
                </div>
            </>
        );
    }

    if (isLoading) {
        return <div>Loading.........</div>;
    }
};

export default DashBoard;
