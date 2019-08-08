import React from 'react';

const Dashboard = ({balls, strikes, pointTracker}) => {
	return (
    <>
    <div className="dashboard container">
    <h1>Dashboard</h1>
    {/* button will update strike, ball, foul, or hit */}
      <button>Enter</button>
    </div>
    </>
    )
};

export default Dashboard;
