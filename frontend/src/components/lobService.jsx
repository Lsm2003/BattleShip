
import {useState} from 'react';

const Lob = ({ xCoordinate, yCoordinate }) => {

    
    const [res, setRes] = useState([]);

    const myCarrierCoords = ['A1', 'A2', 'A3', 'A4', 'A5']
	const myBattleshipCoords = ['B1', 'B2', 'B3', 'B4']
	const myCruiserCoords = ['C1', 'C2', 'C3']
	const mySubCoords = ['D1', 'D2', 'D3']
	const myDestroyerCoords = ['E1', 'E2']
    const allCoords = [myCarrierCoords, myBattleshipCoords, myCruiserCoords, mySubCoords, myDestroyerCoords];
    let hit = false;

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
                    if (result.status == 500) {
                        console.log("Game not started");
                        document.getElementById("responseDiv").textContent = "Game not started";
                        return; // Stop further execution
                    }
                    return result.json();

                }).then ((data) => {
                    if (!data) return; // Prevent further execution if no data
                    const items = data;

                    if (res.length < 1) {
                        setRes(prevRes => [...prevRes, items]);
                    }

                    let hostGuess = items.grid[0] + items.grid[1];
                    console.log("Host Guess:", hostGuess);

                    for (let shipCoords of allCoords) {
                        for (let coord of shipCoords) {
            
                        if (coord === hostGuess) {
                            shipCoords.splice(shipCoords.indexOf(coord), 1); // Remove the hit coordinate from the ship's array
            
                            if (shipCoords.length === 0) {
                                console.log("SHIP SUNK!");
                                const response = fetch('http://localhost:3000/battleship/concede')
                            } else {
                                const response = fetch('http://localhost:3000/battleship/hit')
                                console.log("CORDS: ", allCoords)
                                document.getElementById("serverGuess").textContent = `Server Guess: ${hostGuess} (hit)`;
                            }
            
                            hit = true;
                            break;
                        }
                        }
                        if (hit) break;
                    }
                    if (!hit) {
                        const response = fetch('http://localhost:3000/battleship/miss')
                        document.getElementById("serverGuess").textContent = `Server Guess: ${hostGuess} (miss)`;
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