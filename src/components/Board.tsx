import * as React from "react";
import { useState } from "react";
import calculateWinner from "./CalculateWinner";
// tslint:disable-next-line: ordered-imports
import ReloadButton from "./ReloadButton";
import Square from "./Square";
const Board: React.SFC<{}> = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);
  const [gameWinner, whoWin] = useState(null);
  function renderSquare(i: number) {
    return (
      <Square
        value={squares[i]}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => {
          if (!gameWinner && squares.some(x => x === null)) {
            const nextSquares: any = squares.slice();
            nextSquares[i] = isXNext ? "x" : "O";
            setXNext(!isXNext);
            setSquares(nextSquares);
            const winner: any = calculateWinner(nextSquares);
            if (winner) {
              whoWin(winner);
            }
          }
        }}
      />
    );
  }
  function reload() {
    return (
      <ReloadButton
        // tslint:disable-next-line: jsx-no-lambda
        onClick={() => {
          setSquares(Array(9).fill(null));
          setXNext(true);
          whoWin(null);
        }}
      />
    );
  }

  const status = (
    // tslint:disable-next-line: no-shadowed-variable
    whoWin: string | null,
    // tslint:disable-next-line: no-shadowed-variable
    isXNext: string | boolean
  ) => {
    if (whoWin) {
      return `The winner is ${whoWin}`;
    } else {
      return `Next player:  ${isXNext ? "x" : "O"}`;
    }
  };

  return (
    <div>
      <div className="status">{status(gameWinner, isXNext)}</div>
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
      {reload()}
    </div>
  );
};

export default Board;
