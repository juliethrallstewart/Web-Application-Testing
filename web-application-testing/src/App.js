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

	const [
		foulball,
		setFoulBall
	] = useState(false);

	const [
		hits,
		setHits
	] = useState(0);

	const pointTracker = (point) => {
		switch (point) {
			case 'ball':
				setBalls(balls, +1);
				break;
			case 'strike':
				setStrikes(strikes, +1);
				break;
			case 'foul':
				setFouls(fouls, +1);
				setFoulBall(foulball, true);
				break;
			case 'hit':
				setHits(hits, +1);
				break;
			default:
				alert('game over');
		}
	};

	const gameKeeper = ({ balls, strikes, hits, foulBall }) => {
		if (balls >= 4) {
			setBalls(balls, 0);
		}
		else if (strikes >= 3) {
			setStrikes(strikes, 0);
		}
		else if (hits === 1) {
			setBalls(balls, 0);
			setStrikes(strikes, 0);
		}
		else if (foulBall === true) {
			if (strikes === 0) {
				setStrikes(strikes, +1);
			}
			else if (strikes === 1) {
				setStrikes(strikes, +2);
			}
		}
	};

	return (
		<div className="App">
			<div className="app-container">
				<Display balls={balls} strikes={strikes} hits={hits} fouls={fouls} />
				<Dashboard
					balls={balls}
					strikes={strikes}
					hits={hits}
					fouls={fouls}
					foulball={foulball}
					pointTracker={pointTracker}
					gameKeeper={gameKeeper}
				/>
			</div>
		</div>
	);
}

export default App;
