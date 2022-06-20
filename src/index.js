import React from "react"
import { createRoot } from "react-dom/client"
import Board from "./components/boardComponent/board-component.js";
import './index.css'


const container = document.getElementById('root')
const root = createRoot(container)

const Game = () => {
  return (
    <div className="game"> 
      Tic-tac-toe
      <Board />
    </div>
  );
};

root.render(<Game />)


