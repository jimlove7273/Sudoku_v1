import React from "react";
import { puzzles } from "../components/Puzzles";

type BoardProps = {
  userNumbers: string[];
  setUserNumbers: (userNumbers: string[]) => void;
  cellClicked: number;
  setCellClicked: (value: number) => void;
  gameInProgress: string[];
  setKeyboardOn: (value: boolean) => void;
};

export const Board = ({
  userNumbers,
  setUserNumbers,
  cellClicked,
  setCellClicked,
  gameInProgress,
  setKeyboardOn,
}: BoardProps) => {
  let gameround = puzzles[0].puzzle.split("");
  let solution = puzzles[0].solution.split("");
  const clickPiece = (index: any) => {
    setCellClicked(index);
    setKeyboardOn(true);
  };

  return (
    <div className="game-board">
      {gameInProgress.map((piece, i) => {
        return (
          <div className="cell" key={i}>
            {piece === "." || (piece !== "." && gameround[i]) === "." ? (
              <button
                className={`game-piece
                    ${cellClicked === i ? "active" : ""}
                    ${
                      piece !== "." && userNumbers[i].toString() !== solution[i]
                        ? "red"
                        : piece !== "." &&
                          userNumbers[i].toString() === solution[i]
                        ? "blue"
                        : ""
                    }
                `}
                onClick={() => clickPiece(i)}
                disabled={
                  piece !== "." && userNumbers[i].toString() === solution[i]
                }
              >
                {piece !== "." && userNumbers[i] !== "."
                  ? piece
                  : userNumbers[i] !== "."
                  ? userNumbers[i]
                  : ""}
              </button>
            ) : piece !== "." || userNumbers[i] !== "." ? (
              piece
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};
