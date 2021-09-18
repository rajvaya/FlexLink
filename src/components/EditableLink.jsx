import { doc, updateDoc, getFirestore } from "firebase/firestore/lite";
import React, { useState } from "react";
import firebase from "../firebase"

const EditableLink = ({
  propTitle,
  propLink,
  links,
  user,
  setLinks,
  index,
}) => {
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

  async function updateLinks(updatedLinks) {
    try {
      await updateDoc(doc(getFirestore(), "users", user), {
        links: updatedLinks,
      }).then((e) => {
        console.log("Links Updated", e);
        setLinks(updatedLinks);
      });
    } catch (error) {
      console.log("error in Link Updation : ", error);
    }

    if (isEditing) setIsEditing(!isEditing);
  }

  function updateHandler() {
    let updatedLinks = links.map((item, i) => {
      if (i === index) {
        return { title: title, link: link };
      }

      return item;
    });

    updateLinks(updatedLinks);
  }

  function deleteLink() {
    let updatedLinks = links.filter(function (item, i) {
      return i !== index;
    });

    console.log(updatedLinks, "after Delete");

    updateLinks(updatedLinks);
  }

  return (
    <div className="max-w-2xl w-full rounded-md self-center px-8 py-4 flex flex-col space-y-4 border-blue-800 border-2 m-auto  items-center">
      <input
        type="text"
        value={title}
        placeholder="Enter Your Title"
        onChange={titleHandler}
        className="p-2 w-full border-2 rounded-full border-blue-800  focus:outline-none"
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
      

      <div className="flex flex-row justify-between w-full">


      <button
        className="focus:outline-none mb-4 py-2 font-semibold  px-10 border-2 rounded-md border-indigo-700 hover:bg-white text-white hover:text-indigo-700  text-lg bg-indigo-700"
        onClick={() => {
          isEditing ? updateHandler() : setIsEditing(!isEditing);
        }}
      >
        {isEditing ? "Update" : "Edit"}
      </button>
      <button
        className="mb-4 py-2 font-semibold  px-10 border-2 rounded-md border-red-700 hover:bg-white text-white hover:text-red-700  text-lg bg-red-700"

        onClick={deleteLink}>Delete</button>
      </div>
    </div>
  );
};

export default EditableLink;
