// This import is needed because we are going to use React's state hook.
import {useState} from 'react';

// This is a React component called FetchCourses. Notice that a click event handler is being sent
// into the component as a prop(erty). It is 'deconstructed' so that we can refer to the prop by
// its name directly.
const CancelGame = ({clickHandler}) => {

    // A React state hook called 'courses' is initialized to be an empty array. 'setCourses' is the 
    // method that must be used to update 'courses'.
    // const [courses, setCourses] = useState([]);
    const [res, setRes] = useState([]);

    let nextKey=0; // We use this to generate unique keys.

    // only one jsx element can be returned, thus a <> is used to encapsulate everything.
    return (<> 
        <button type="button" onClick={ // a button 'Get Courses' is created. When it's clicked, data is fetched.
            () => {
                // The following is only executed if the Get Courses button is activated. It's the interface to
                // our API.
                const requestBody = {
                    method: 'GET',
                }

                const response = fetch('http://localhost:3000/battleship/cancel', requestBody)
                response.then ((result)=> {
                    return result.json();
                }).then ((data) => {
                    const items = data;
                    if (res.length < 1) {
                        setRes(prevRes => [...prevRes, items]);
                    }
                    document.getElementById("responseDiv").textContent = items.message;
                })}
                
            
        }>Cancel Game</button><br/>
        {   // Here we generate the jsx for each element in the array contained in the courses state hook.
            // We perform a map over that array so that each course can be used to create a button element.
            
        }
    </>);
};

// The component is exported so that other JS files can use it.
export {CancelGame as default};