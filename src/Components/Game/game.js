import React, { useState } from "react";
import { calculateWinner } from "../../helper";
import Board from '../Board/board' 

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  //const winner = calculateWinner(history[stepNumber]);
  const winInfo = calculateWinner(history[stepNumber]);
  const winner = winInfo.winner;
  const player = xIsNext ? "X" : "Y";

  const renderRestartButton = () => {
    return (
      <button
        onClick={() => {
          setHistory([Array(9).fill(null)]);
          setStepNumber(0);
          setXisNext(true);
        }}>
        Restart Game
      </button>
    );
  }

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or if user clicks on occupied square
    if (winner || squares[i]) return;

    // select square X or Y
    squares[i] = player;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const isBoardFull = (squares) => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }

  const getStatus = () => {
    if (winner) {
      // alert('Player ' + winner + " won the game"); 
      return "Winner: " + winner;
    } else if (isBoardFull(history[stepNumber])) {
      alert('Game is Tie!');
      return "Game is Tie!";
    } else {
      return "Next player: " + player;
    }
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <div className="relative">
        <h1>Tic Tac Toe Game</h1>
        <p> Player List (X and Y) :  &nbsp;&nbsp;
            {/* <button className={"navitem " + (xIsNext && !winner ? 'activePlayer' : '')} >Player 1</button> &nbsp;&nbsp;
            <button className={"navitem " + (!xIsNext && !winner ? 'activePlayer' : '')}>Player 2</button> */}

          <button className="navitem">Player 1</button> &nbsp;&nbsp;
            <button className="navitem">Player 2</button>
        </p>
      </div> 

      <div className="game-info">{winner ? "Game Over! Winner is: " + winner : ""}</div>
      <h3 className="player-info" style={{ textAlign: 'right', color:'blue' }}>{!winner ? getStatus() : ""}</h3>

      <Board squares={history[stepNumber]} onClick={handleClick} winLine={winInfo.line} />
      <div className="info-wrapper">
        <div>
          <br /><br />
          <h3>Rewinding of Moves</h3>
          {renderMoves()}
        </div>
        <div>
          {renderRestartButton()} 
        </div>

        {/* <h3>{getStatus()}</h3> */}
        {/* <h3>{winner ? "Winner: " + winner : "Next Player: " + player}</h3> */}
      </div>
    </>
  );
};

export default Game;
