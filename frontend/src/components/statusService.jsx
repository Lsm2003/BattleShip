import {useState} from 'react';

const Status = ({clickHandler}) => {

    const [res, setRes] = useState([]);

    let nextKey=0; 

    return (<> 
        <button type="button" onClick={ 
            () => {
                const requestBody = {
                    method: 'GET',
                }

                const response = fetch('http://localhost:3000/battleship/status')
                response.then ((result)=> {
                    return result.json();
                }).then ((data) => {
                    const items = data;
                    console.log("Status Response:", items);
                    let statusString = `Status: ${items.status} | Cycle: ${items.cycle} | Duration: ${items.duration} sec | My Fleet: ${items.myfleet} | Your Fleet: ${items.yourfleet} | Time: ${items.time}`;
                    document.getElementById("statusResponse").textContent = statusString;
                })}
                
            
        }>Status</button><br/>
        {  
     
        }
    </>);
};

export {Status as default};