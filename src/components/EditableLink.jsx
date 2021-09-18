import firebase from "../firebase";
import {

    setDoc,
    doc,
    updateDoc,
    getFirestore,
    collection,
} from "firebase/firestore/lite";
import React, { useState, useEffect } from 'react'

const EditableLink = ({ propTitle, propLink, links, user, setLinks, index }) => {


    const [title, setTitle] = useState(propTitle);
    const [link, setLink] = useState(propLink);
    const [isEditing, setIsEditing] = useState(false);

    const titleHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setTitle(e.target.value);
    };


    const linkHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setLink(e.target.value);
    };



    // useEffect(() => {

    //     if (isEditing)

    // }, [links]);


    async function updateLinks() {


        try {
            await updateDoc(doc(getFirestore(), "users", user), {
                links: links
            }).then((e) => {
                console.log("Links Updated", e);
            });
        } catch (error) {
            console.log("error in Link Updation : ", error);
        }


        setIsEditing(!isEditing);

    }




    function updateHandler() {

        links.splice(index, 1, { "title": title, "link": link });
        setLinks(links);
        updateLinks();


    }






    return (
        <div className="max-w-2xl w-full self-center px-8 py-4 flex flex-col space-y-4 border-blue-800 border-2 m-auto items-center">
            <input
                type="text"
                value={title}
                placeholder="Enter Your Title"
                onChange={titleHandler}
                className="p-2 w-full border-2 rounded-full border-blue-800"
                disabled={!isEditing}
            />
            <input
                type="text"
                value={link}
                onChange={linkHandler}
                placeholder="Enter Your url "
                className="p-2 w-full border-2 rounded-full border-blue-800"
                disabled={!isEditing}
            />
            <button className="border-2 p-4 rounded-md border-indigo-800" onClick={() => {

                isEditing ? updateHandler() : setIsEditing(!isEditing);

            }}>
                {isEditing ? "Update" : "Edit"}
            </button>
        </div>
    )
}

export default EditableLink
