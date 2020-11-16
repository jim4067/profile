import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import './styles/App.css';


//the global styles for setting the theme
const GlobalTheme = createGlobalStyle`
 body {
     background-color: ${({ dark }) => dark ? "#242933" : "#eceff4"};
     color: ${({ dark }) => dark ? "#eceff4" : "#4c566a"};
 }
`


const App = () => {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		const theme = window.localStorage.getItem('theme');

		if (theme === 'true') {
			setDark(false);
		}
		else {
			setDark(true);
		}
	}, []);

	//make sure you useEffect on this so that the theme is not lost when the window is reloaded
	//set the value of dark mode in local storage and useEffect tp set the dark variable
	const handleThemeSwitch = () => {
		//persisting the users theme
		window.localStorage.setItem(
			'theme', dark
		);

		setDark(!dark);
	}


	return (
		<div className='app-container'>

			<GlobalTheme dark={dark} />

			<Navigation dark={dark} handleThemeSwitch={handleThemeSwitch} />

			<Landing dark={dark} />

			<p> This is the text in the app component</p>
		</div>
	);
}

export default App;


//hi there, i am jimmy a self taught and introverted full stack web dev

//add section with the certifications from freecodecamp and fullstackopen site

//in the projects sections add a page that shows all the projects built from the fullstackopen
//challenge