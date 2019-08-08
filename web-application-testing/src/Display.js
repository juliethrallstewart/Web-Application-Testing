import React from 'react';

const Display = ({balls, strikes, fouls, hits}) => {
    return (
        <>
        <div className="display container">
        <div className="score">
        <p><strong>Balls:</strong></p>
        <p className="balls">{balls}</p>
        </div>
        <div className="score">
        <p><strong>Strikes:</strong></p>
        <p className="strikes">{strikes}</p>
        </div>
        </div>
        </>
    )
};

export default Display;
