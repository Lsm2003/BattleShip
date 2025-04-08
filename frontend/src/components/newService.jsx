import {useState} from 'react';

const NewGame = ({clickHandler}) => {

    const [res, setRes] = useState([]);

    let nextKey=0; 

    return (<> 
        <button type="button" onClick={ 
            () => {
                const requestBody = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({grid: ['x', 'y'], fleet: [[1,1], [2,2], [1,1], [1,1]]})
                }

                const response = fetch('http://localhost:3000/battleship/new', requestBody)
                response.then((result) => {
                    if (result.status == 500) {
                        console.log("Game already in progress");
                        document.getElementById("responseDiv").textContent = "Game already in progress";
                        return; // Stop further execution
                    }
                    return result.json();
                }).then((data) => {
                    if (!data) return; // Prevent further execution if no data
                    const items = data;
                    if (res.length < 1) {
                        setRes(prevRes => [...prevRes, items]);
                    }
                    document.getElementById("responseDiv").textContent = items.message;
                }).catch((error) => {
                    console.error("Error:", error);
                });
            }
        }>New Game</button><br/>
        {  
     
        }
    </>);
};

export {NewGame as default};