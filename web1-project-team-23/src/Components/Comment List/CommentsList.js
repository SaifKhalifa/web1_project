import { getDocs, collection} from "firebase/firestore"
import { useState, useEffect } from 'react';
import db from "../../Firebase/Firebase";
import Avatar from "../Avatar";
import CommentBody from "./CommentBody";
import Reactions from "./CommentsReactions";
import "../MainVideoStyle.css"

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
const CommentsList = () =>{
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchUserData() {
            const data = await fetchDataFromFirestore("users");
            setUserData(data);
        }
        fetchUserData();
    }, []);
    
    return(
        <ul className="comment-wrap list-unstyled">
            <li className="comment-item">
                <div className="d-flex position-relative">
                    <Avatar/>
                    <div className="ms-2">
                    {userData.map((user) => (
                    user.Name === "Saif Khalifa" 
                    && 
                    (      
                        <CommentBody 
                            body="Comment no.1" 
                            publisherName={user.Name}
                            commentTime="30 secs"
                        />

                    )
                ))}
                        <Reactions/>
                    </div>
                </div>
                {/* Reply */}
                <ul className="comment-item-nested list-unstyled">
                    <li className="comment-item">
                        <div className="d-flex">
                            <Avatar/>
                            <div className="ms-2">
                                <CommentBody body="reply for comment no.1" publisherName="saiiiiiiif" commentTime="1 hr"/>
                                <Reactions/>
                            </div>
                        </div>
                    </li>
                    <li className="comment-item">
                        <div className="d-flex">
                            <Avatar/>
                            <div className="ms-2">
                                <CommentBody body="reply no.2 for comment no.1" publisherName="Unknown" commentTime="1 sec"/>
                                <Reactions/>
                            </div>
                        </div>
                    </li>
                </ul>                
            </li>
            <li className="comment-item">
                <div className="d-flex position-relative">
                    <Avatar/>
                    <div className="ms-2">
                        <CommentBody body="Comment no.2" publisherName="Ahmad" commentTime="1 sec"/>
                        <Reactions/>
                    </div>
                </div>                       
            </li>
        </ul>

    );
}
export default CommentsList;