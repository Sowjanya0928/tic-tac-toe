import React from "react"; 
import Square from '../Square/square'

const Board = ({ squares, onClick, winLine }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} highlight={winLine && winLine.includes(i)} />
    ))}
  </div>
);

export default Board;
