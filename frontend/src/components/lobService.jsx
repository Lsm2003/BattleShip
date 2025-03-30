
import {useState} from 'react';

const Lob = ({ xCoordinate, yCoordinate }) => {

    
    const [res, setRes] = useState([]);

    let nextKey=0; // We use this to generate unique keys.

    
    return (<> 
        <button type="button" onClick={ // a button 'Get Courses' is created. When it's clicked, data is fetched.
            () => {
                const requestBody = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({grid: [xCoordinate, yCoordinate]}) // Use the parameters here.
                }

                const response = fetch('http://localhost:3000/battleship/lob', requestBody)
                response.then ((result)=> {
                    return result.json();
                }).then ((data) => {
                    const items = data;
                    if (res.length < 1) {
                        setRes(prevRes => [...prevRes, items]);
                    }
                    let msg = items.status + ` at (${xCoordinate}${yCoordinate})`;
                    document.getElementById("responseDiv").textContent = msg;
                })}
                
            
        }>Lob</button><br/>
        {   // Here we generate the jsx for each element in the array contained in the courses state hook.
            // We perform a map over that array so that each course can be used to create a button element.
            
        }
    </>);
};

export {Lob as default};