import './App.css';
import NewGame from './components/newService';
import CancelGame from './components/cancelService';
import ConcedeGame from './components/concedeService';
import Lob from './components/lobService';
import { useState } from 'react';


function App() {

	const myCarrierCoords = ['A1', 'A2', 'A3', 'A4', 'A5']
	const myBattleshipCoords = ['B1', 'B2', 'B3', 'B4']
	const myCruiserCoords = ['C1', 'C2', 'C3']
	const mySubCoords = ['D1', 'D2', 'D3']
	const myDestroyerCoords = ['E1', 'E2']

	const [coordinates, setCoordinates] = useState({ xCoordinate: '', yCoordinate: '' });
	const { xCoordinate, yCoordinate } = coordinates;


	return (
		<div className="App">
			<div className="buttons">
				<NewGame />
				<CancelGame />
				<ConcedeGame />
				<Lob
					xCoordinate={xCoordinate}
					yCoordinate={yCoordinate}
					onFire={() => {
						const x = document.getElementById('xCoordinateInput').value;
						const y = document.getElementById('yCoordinateInput').value;
						setCoordinates({ xCoordinate: x, yCoordinate: y });
					}}
				/>
			</div>
			<div id="responseDiv"></div>

			<div id="lobDiv">
				<h2>Lob</h2>
				<label>
					X Coordinate: 
					<input
						type="text"
						id="xCoordinateInput"
						value={xCoordinate}
						onChange={(e) => setCoordinates({ ...coordinates, xCoordinate: e.target.value })}
					/>
					<br></br>
				</label>
				<br />
				<label>
					Y Coordinate: 
				<input
						type="text"
						id="yCoordinateInput"
						value={yCoordinate}
						onChange={(e) => setCoordinates({ ...coordinates, yCoordinate: e.target.value })}
						required
					/>
				</label>
			</div>
		</div>
	);
}

export default App;
