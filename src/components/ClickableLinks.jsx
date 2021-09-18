import React from "react";

const ClickableLinks = ({ link, title }) => {
    return (
        <a href={link} target={"_blank"}>
            <div className="min-w-full border-2 rounded-lg border-indigo-700 py-3 text-center text-white bg-indigo-700 hover:bg-white hover:text-indigo-700 font-bold text-xl ">
                {title}
            </div>
        </a>
    );
};

export default ClickableLinks;
