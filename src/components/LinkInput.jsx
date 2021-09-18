import React, { useState } from 'react'
import {
    doc,
    updateDoc,
    getFirestore,
} from "firebase/firestore/lite";
import firebase from "../firebase"
import validator from 'validator';



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

        if (validator.isURL(link, { require_protocol: true, })) {
            let newLinks = [...links, { "title": title, "link": link }];
            updateLinks(newLinks);
        }
        else {
            alert("Enter Valid URL");
        }
    }


    async function updateLinks(newLinks) {
        try {
            await updateDoc(doc(getFirestore(), "users", user), {
                links: newLinks
            }).then((e) => {
                setTitle("");
                setLink("");
                setLinks(newLinks);
            });
        } catch (error) {
            console.log("error in Link Creation : ", error);
        }
    }






    return (
        <div className="  w-2/3 max-w-2xl mt-8 self-center px-6 py-4 mx-2 flex flex-col space-y-4 border-gray-800 border-2 m-auto items-center rounded-lg drop-shadow-2xl">
            <input
                type="text"
                value={title}
                placeholder="Enter Your Title"
                onChange={titleHandler}
                className="p-2 w-full border-2 rounded-full border-blue-800 focus:outline-none"
            />
            <input
                type="text"
                value={link}
                onChange={linkHandler}
                placeholder="Enter Your url "
                className="p-2 w-full border-2 rounded-full border-blue-800 focus:outline-none"
            />
            <button className="mb-4 py-2 font-semibold  px-10 border-2 rounded-md border-indigo-700 hover:bg-white text-white hover:text-indigo-700  text-lg bg-indigo-700" onClick={addLink}>
                Add New Link
            </button>
        </div>
    );
}

export default LinkInput;




