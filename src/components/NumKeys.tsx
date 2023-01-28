import React from "react";

type NumKeysProps = {
  userNumbers: string[];
  setUserNumbers: (userNumbers: string[]) => void;
  cellClicked: number;
  setCellClicked: (value: number) => void;
  setGameInProgress: (value: string[]) => void;
  setKeyboardOn: (value: boolean) => void;
  gameInProgress: string[];
};

export const NumKeys = ({
  userNumbers,
  setUserNumbers,
  cellClicked,
  setCellClicked,
  setGameInProgress,
  setKeyboardOn,
  gameInProgress,
}: NumKeysProps) => {
  const numClicked = (num: number) => {
    gameInProgress[cellClicked] = num.toString();
    setGameInProgress(gameInProgress);
    userNumbers[cellClicked] = num.toString();
    setUserNumbers(userNumbers);
    setKeyboardOn(false);
    setCellClicked(0);
  };

  const clearSelection = () => {
    userNumbers[cellClicked] = ".";
    setUserNumbers(userNumbers);
    setKeyboardOn(false);
    setCellClicked(0);
  };

  const cancelSelection = () => {
    setKeyboardOn(false);
    setCellClicked(0);
  };

  return (
    <div className="numbers-keys">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <div key={num} onClick={() => numClicked(num)}>
          {num}
        </div>
      ))}
      <div className="btn-clear" onClick={clearSelection}>
        Clear
      </div>
      <div className="btn-cancel" onClick={cancelSelection}>
        Cancel
      </div>
    </div>
  );
};
