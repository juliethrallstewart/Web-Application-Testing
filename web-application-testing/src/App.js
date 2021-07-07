import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Display from './Display';

// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// balls and strikes reset to 0 when a hit is recorded.
// a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

function App () {
	const [
		balls,
		setBalls
	] = useState(0);

	const [
		strikes,
		setStrikes
	] = useState(0);

	const [
		fouls,
		setFouls
	] = useState(0);

	// const [
	// 	foulball,
	// 	setFoulBall
	// ] = useState(true);

	const [
		hits,
		setHits
	] = useState(0);

	// useEffect(
	// 	() => {
	// 		if (fouls === 1) {
	// 			setFoulBall(!foulball);
	// 		}
	// 	},
	// 	[
	// 		fouls
	// 	]
	// );

	// useEffect(
	// 	() => {
	// 		if (fouls === 1) {
	// 			setFouls(fouls * 0);
	// 		}
	// 	},
	// 	[
	// 		fouls
	// 	]
	// );

	const pointTracker = (point) => {
		switch (point) {
			case 'ball':
				setBalls(balls + 1);
				break;
			case 'strike':
				setStrikes(strikes + 1);
				break;
			case 'foul':
				setFouls(fouls + 1);
				if (strikes < 2) {
					setStrikes(strikes + 1);
				}
				break;
			case 'hit':
				setHits(hits + 1);
				setStrikes(strikes * 0);
				setBalls(balls * 0);
				break;
			default:
				alert('game over');
		}
	};

	const gameKeeper = () => {
		if (balls >= 4) {
			setBalls(balls * 0);
		}
		if (strikes >= 3) {
			setStrikes(strikes * 0);
		}
		if (strikes >= 3) {
			setStrikes(strikes * 0);
		}
	};

	const handleBall = () => {
		console.log('Ball!');
		pointTracker('ball');
		gameKeeper();
	};

	const handleStrike = () => {
		console.log('Strike!');
		pointTracker('strike');
		gameKeeper();
	};

	const handleHit = () => {
		console.log('Hit!');
		pointTracker('hit');
		gameKeeper();
	};

	const handleFoul = () => {
		console.log('Foul!');
		pointTracker('foul');
		gameKeeper();
	};

	const reset = () => {
		setStrikes(strikes * 0);
		setBalls(balls * 0);
		setHits(hits * 0);
		setFouls(fouls * 0);
	};

	return (
		<div className="App">
			<div className="app-container">
				<Display balls={balls} strikes={strikes} hits={hits} fouls={fouls} />
				<Dashboard reset={reset} ball={handleBall} strike={handleStrike} hit={handleHit} foul={handleFoul} />
			</div>
		</div>
	);
}

export default App;
