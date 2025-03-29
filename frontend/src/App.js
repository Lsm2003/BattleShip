import './App.css';
import NewGame from './components/newService';
import CancelGame from './components/cancelService';
import ConcedeGame from './components/concedeService';
import Lob from './components/lobService';


function App() { // here we go!

	// This is the event handler that is common to all the buttons that we create.
	// It could have been placed in the FetchCourses module, but I thought it would be
	// cool to pass it as a prop to the component. It has no dependancies on either
	// of the App or FetchCourses components, so it could have existed in it's own file.
	// A separate file of event handlers might be a workable idea.
	function handleNewClick (e) {
		// Action taken when a course button is clicked.
		// This is function is passed to the component as a prop
		if (e.target.innerHTML === "CP4485"){ // if the button says 'CP4485'...
			if (e.target.style.background === 'red')		// if the color is red, 
				e.target.style.background = 'lightblue';	// then turn it blue,
			else											// otherwise
				e.target.style.background = 'red';			// make it red.
		}
	}

	function handleCancelClick (e) {
		// Action taken when a course button is clicked.
		// This is function is passed to the component as a prop
		if (e.target.innerHTML === "CP4485"){ // if the button says 'CP4485'...
			if (e.target.style.background === 'red')		// if the color is red, 
				e.target.style.background = 'lightblue';	// then turn it blue,
			else											// otherwise
				e.target.style.background = 'red';			// make it red.
		}
	}

	function handleConcedeClick (e) {
		// Action taken when a course button is clicked.
		// This is function is passed to the component as a prop
		if (e.target.innerHTML === "CP4485"){ // if the button says 'CP4485'...
			if (e.target.style.background === 'red')		// if the color is red, 
				e.target.style.background = 'lightblue';	// then turn it blue,
			else											// otherwise
				e.target.style.background = 'red';			// make it red.
		}
	}

	function handleLobClick (e) {
		// Action taken when a course button is clicked.
		// This is function is passed to the component as a prop
		if (e.target.innerHTML === "CP4485"){ // if the button says 'CP4485'...
			if (e.target.style.background === 'red')		// if the color is red, 
				e.target.style.background = 'lightblue';	// then turn it blue,
			else											// otherwise
				e.target.style.background = 'red';			// make it red.
		}
	}

	// Our app just creates a FetchCourse Component, indicating the event handler for any
	// resulting buttons.
	return (
		<div className="App">
			<div class="buttons">
				<NewGame clickHandler={handleNewClick}/>
				<CancelGame clickHandler={handleCancelClick}/>
				<ConcedeGame clickHandler={handleConcedeClick}/>
				<Lob clickHandler={handleLobClick}/>
			</div>
			<div id="responseDiv"></div>
		</div>
	);
}

export default App;
