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
                response.then ((result)=> {
                    return result.json();
                }).then ((data) => {
                    const items = data;
                    if (res.length < 1) {
                        setRes(prevRes => [...prevRes, items]);
                    }
                    document.getElementById("responseDiv").textContent = items.message;
                })}
                
            
        }>New Game</button><br/>
        {  
     
        }
    </>);
};

export {NewGame as default};