import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import {
    getDoc,
    doc,
    getFirestore,
} from "firebase/firestore/lite";
import ProfileImage from '../components/ProfileImage';
import ClickableLinks from '../components/ClickableLinks';

const LinksPage = ({ match }) => {


    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    const history = useHistory();
    async function checkUser(user) {
        try {
            console.log("searching in db for ", user);
            const docRef = doc(getFirestore(), "users", user);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());

                setData(docSnap.data());

                setIsLoading(false);
                // console.log(docSnap.data().links);
            } else {
                console.log("USER NOT Found")

                history.replace("/");
            }
        } catch (e) {
            console.error("Error in Fetching User : ", e.code, e.message);
        }
    }


    useEffect(() => {

        checkUser(match.params.id)

    }, []);

    if (isLoading) {

        return (
            <div className="w-screen min-h-screen flex flex-col items-center justify-center">

                <img src="https://www.svgrepo.com/show/199948/loading-loader.svg" alt="Loader" className="h-1/4 w-1/4 animate-spin self-center" />

            </div>
        )
    }
    else {


        return (<div className="flex flex-col items-center justify-center self-center my-12">



            {

                data.links.length > 0 ?
                    <ProfileImage user={match.params.id}></ProfileImage> : null

            }

            <div className="w-5/6 max-w-2xl space-y-4 flex flex-col mt-4" >

                {

                    data.links.length > 0 ? (
                        data.links.map((item) => {
                            return <ClickableLinks link={item.link} title={item.title} />
                        })
                    ) : <div className="w-full flex flex-col items-center">

                        <img src="https://static.thenounproject.com/png/2157490-200.png" alt="" />

                        <p className="text-xl mt-4">NO Links added By {match.params.id}</p>


                    </div>

                }


            </div>


        </div>)



    }
}

export default LinksPage
