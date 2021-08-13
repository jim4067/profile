import React, { useEffect, useState } from 'react';
import { darkTheme, lightTheme, GlobalStyles } from './styles/theme';
import './styles/App.css';
import Land from './components/Land';

const App = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const theme = window.localStorage.getItem('theme'); //here lies the theme

		if (theme === 'light') {
			setTheme('dark')
		}
		else {
			setTheme('light')
		}
	}, []);

	const switchTheme = () => {
		window.localStorage.setItem(
			'theme', theme
		)

		theme === "light" ? setTheme("dark") : setTheme("light");
	}


	return (
		<div className='app-container'>

			<GlobalStyles theme={theme === "light" ? lightTheme : darkTheme} />
			<div>
				<h1> Hello bro!</h1>
				<h2> What is this light color heading</h2>
				<button onClick={switchTheme}>click me</button>
			</div>

			<Land />

		</div>
	);
}

export default App;