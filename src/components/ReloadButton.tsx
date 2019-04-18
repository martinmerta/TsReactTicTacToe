import * as React from "react";
export interface IRealoadButtonProps {
  onClick: () => void;
}

const RealoadButton: React.SFC<IRealoadButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Click to reload game</button>;
};

export default RealoadButton;
