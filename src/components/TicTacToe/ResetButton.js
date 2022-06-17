import React from 'react';

import "../TicTacToe/ResetButton.css";

export const ResetButton = ({ resetBoard }) => {
    return (
        <button className="button n-button" onClick={resetBoard}>Reset</button>
    )
}
