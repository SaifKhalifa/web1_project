import db from "./Firebase/Firebase";
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

function TestFirestore() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchUserData() {
            const data = await fetchDataFromFirestore("users");
            setUserData(data);
        }
        fetchUserData();
    }, []);

    return (
        <div className="container">
            <h2 className="text-center text-primary mt-3">Firestore Testing</h2>
            <div className="row justify-content-center">
                {userData.map((user) => (
                    user.Name === "Saif Khalifa" 
                    && 
                    (      
                        <div key={user.id} className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">User Name: {user.Name}</h5>
                                    {user.ProfilePicLink && (
                                        <img
                                            src={user.ProfilePicLink}
                                            alt="profile pic"
                                            className="img-fluid rounded"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default TestFirestore;