import Square from "../squareComponent/square-component";
import React from "react";
import { useState } from "react";
import './board-component.css'



const Board = () => {
  const initialSquares = Array(9).fill(null)
  const [squares, setSquares] =useState(initialSquares)
  const [xIsNext, setXIsNext] = useState(true)
  
  
  const handleClickEvent = (i) => {
    // COPY INITIAL STATE
    const newSquares = [...squares]
    // MUTATE INITIAL STATE
    const winnerDeclared = Boolean(calculateWinner(newSquares))
    const squareFilled = Boolean(newSquares[i])

    if (winnerDeclared || squareFilled) {
      status = 'GAME OVER'
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O'
    // SET MUTATED STATE
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }
  const renderSquare = (i) => {

    return (
      <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />
    )

  }

  const winner = calculateWinner(squares)
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X': 'O'} `


  return (
    <div className="board">
      <div className="status">
      {status}
      </div> 
      <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      </div>
      <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      </div>
      <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      </div>
    </div>
  )
 }

 // WINNER
 
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Winner combinations
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  for (let line of lines) {
    const [a, b, c] = line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

 export default Board