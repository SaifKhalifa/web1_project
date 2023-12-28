import OfficialCard from "./OfficalCard";
import View from "./viewVideos";
import db from "../Firebase/Firebase";
import { getDocs, collection} from "firebase/firestore"
import { useState, useEffect } from 'react';

async function fetchDataFromFirestore(collectionName)
{
    const querySnapshot = await getDocs( collection(db, collectionName) );
    const data = [];
    querySnapshot.forEach(
        (doc) => {
            data.push( {id: doc.id, ...doc.data()} );
        }
    );
    return data;
}

function OfficalSection () {  
    const [video_users_Data, set_video_users_data] = useState([]);

    useEffect(() => {
        async function fetchUserData() {
            const videoInfo = await fetchDataFromFirestore("offical");      
            set_video_users_data(videoInfo);             
        }
        fetchUserData();
    }, []);

    return (
        <>
            <div className="section-title"> Offical Trailer </div>
                <View />
            <div className="section">
                {video_users_Data.map(
                    (data) =>(                        
                        <OfficialCard 
                            name={data.name}
                            title={data.videotitle}
                            verified={data.verified}   
                            views={data.views}
                            src={data.url}
                        />
                    ))
                }                
            </div>
        </>
); 
}
export default OfficalSection; 


