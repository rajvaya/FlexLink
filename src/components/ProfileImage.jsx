import React from 'react'

const ProfileImage = ({ user }) => {
    return (
        <div className="flex flex-col items-center space-y-4 w-full">


            <img src={`https://avatars.dicebear.com/api/croodles-neutral/${user}.svg`} className="border-2 border-gray-800 rounded-full max-h-32  h-full" />


            <p className="text-4xl text-gray-900 font-semibold font-serif m-auto text-center">{user}</p>


        </div>
    )
}

export default ProfileImage
