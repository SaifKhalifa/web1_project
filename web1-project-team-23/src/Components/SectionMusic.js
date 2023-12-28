import MusicCard from "./Music" 
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

function Music_section () {
    const [videoInfo, setVideoInfo] = useState([]);

    useEffect(() => {
        async function fetchUserData() {
            const data = await fetchDataFromFirestore("Music");
            setVideoInfo(data);
        }
        fetchUserData();
    }, []);
    
    return (
        <>
            <div className="section-title"> Music </div>
            <div className="section">
                {videoInfo.map(
                    (data) =>(
                        <MusicCard
                            time={data.time}
                            title={data.videotitle}
                            views={data.views}
                            src={data.url}
                            key={data.id}
                        />
                    ))
                }
            </div>            
        </>
    ); 
}
export default Music_section;
