import React, { useEffect, useState } from 'react'
import firebase from "../firebase";
import {

    setDoc,
    doc,
    updateDoc,
    getFirestore,
    collection,
} from "firebase/firestore/lite";

const LinkInput = ({ links, user, setLinks }) => {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

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
    //     updateLinks();
    // }, []);

    function addLink() {
        let newLinks = [...links, { "title": title, "link": link }];
        updateLinks(newLinks);
    }


    async function updateLinks(newLinks) {
        try {
            await updateDoc(doc(getFirestore(), "users", user), {
                links: newLinks
            }).then((e) => {
                setLinks(newLinks);
            });
        } catch (error) {
            console.log("error in Link Creation : ", error);
        }
    }






    return (
        <div className="max-w-2xl w-full self-center px-8 py-4 flex flex-col space-y-4 border-blue-800 border-2 m-auto items-center">
            <input
                type="text"
                value={title}
                placeholder="Enter Your Title"
                onChange={titleHandler}
                className="p-2 w-full border-2 rounded-full border-blue-800"
            />
            <input
                type="text"
                value={link}
                onChange={linkHandler}
                placeholder="Enter Your url "
                className="p-2 w-full border-2 rounded-full border-blue-800"
            />
            <button className="border-2 p-4 rounded-md border-indigo-800" onClick={addLink}>
                Add Link
            </button>
        </div>
    );
}

export default LinkInput;




