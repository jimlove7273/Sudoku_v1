import React, { useState } from "react";
import { puzzles } from "./components/Puzzles";
import "./App.css";

import { Board } from "./components/Board";
import { NumKeys } from "./components/NumKeys";

export default function App() {
  let gameround = puzzles[0].puzzle.split("");

  const [gameInProgress, setGameInProgress] = useState(gameround);
  const [cellClicked, setCellClicked] = useState(0);
  const [userNumbers, setUserNumbers] = useState<string[]>(
    new Array(81).fill(".")
  );
  const [keyboardOn, setKeyboardOn] = useState(false);

  return (
    <>
      <div className="header">Sudoku v1</div>
      <div className="game-screen">
        <Board
          userNumbers={userNumbers}
          setUserNumbers={setUserNumbers}
          cellClicked={cellClicked}
          setCellClicked={setCellClicked}
          gameInProgress={gameInProgress}
          setKeyboardOn={setKeyboardOn}
        />
      </div>
      {keyboardOn && (
        <NumKeys
          userNumbers={userNumbers}
          setUserNumbers={setUserNumbers}
          gameInProgress={gameInProgress}
          setGameInProgress={setGameInProgress}
          cellClicked={cellClicked}
          setCellClicked={setCellClicked}
          setKeyboardOn={setKeyboardOn}
        />
      )}
      <br />
    </>
  );
}
