import React from 'react';

const Dashboard = ({ reset, ball, strike, foul, hit }) => {
    
  
	return (
    <>
    <div className="dashboard container">
    <button onClick={ball}>Ball</button>
    <button onClick={strike}>Strike</button>
    <button onClick={hit}>Hit</button>
    <button onClick={foul}>Foul</button>
    <button onClick={reset}>Reset</button>
    </div>
    </>
    )
};

export default Dashboard;
