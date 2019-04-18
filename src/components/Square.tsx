import * as React from "react";
export interface ISquareProps {
  value: string;
  onClick: () => void;
}
const Square: React.SFC<ISquareProps> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
