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
                    // if (res.length < 1) {
                    //     setRes(prevRes => [...prevRes, items]);
                    // }
                    // document.getElementById("responseDiv").textContent = items.message;
                    console.log("Status Response:", items);
                })}
                
            
        }>Status</button><br/>
        {  
     
        }
    </>);
};

export {Status as default};