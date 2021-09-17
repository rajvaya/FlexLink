import React from 'react'

const LinkInput = () => {



    return (

        <div className="max-w-2xl w-full self-center px-8 py-4 flex flex-col space-y-4 border-blue-800 border-2 m-auto items-center ">
            <input type="text" placeholder="title" className="p-2 w-full border-2 rounded-full border-blue-800" />
            <input type="text" placeholder="Enter Your url " className="p-2 w-full border-2 rounded-full border-blue-800" />
            <button className="border-2 p-4 rounded-md border-indigo-800">Submit</button>

        </div>

    )
}

export default LinkInput
