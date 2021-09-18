import React, {useState } from 'react'
import {
    doc,
    updateDoc,
    getFirestore,
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
                setTitle("");
                setLink("");
                setLinks(newLinks);
            });
        } catch (error) {
            console.log("error in Link Creation : ", error);
        }
    }






    return (
        <div className="w-2/3 max-w-2xl mt-8 self-center px-6 py-4 mx-2 flex flex-col space-y-4 border-gray-800 border-2 m-auto items-center rounded-lg drop-shadow-2xl">
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




