import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import IntroPage from './Intro';
import About from './About';
import CardSelection from './CardSelection';
import backgroundImage from '../assets/images/Cappadocia-Desktop.png';
import '../assets/css/app.css';

export default () => {
	const pageStyle = {
		backgroundImage: `url('${backgroundImage}')`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	};
	return (
		<div style={pageStyle}>
			<Switch>
				<Route exact path="/" component={IntroPage} />
				<Route path="/about" component={About} />
				<Route path="/start-game" component={CardSelection} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
};
