import React from 'react'

import { Box } from "../TicTacToe/Box"
import "../TicTacToe/Board.css"

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {
        board.map((value, idx) => {
          return <Box value={value} onClick={() => value === null && onClick(idx)} />;
        })
      }
      <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
          <div
        className="blur"
        style={{
          background: "#C1F5FF",
          top: "5rem",
          width: "20rem",
          height: "5rem",
          left: "60rem",
        }}
      ></div>
    </div>
    
  )
}
