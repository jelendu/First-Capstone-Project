import React from "react";
import "./PuzzlePiece.css";


const PuzzlePiece = ({ image }) => {
  return (
    <div className="puzzle-piece">
      <img src={image} alt="Puzzle reference" />
    </div>
  );
};

export default PuzzlePiece;

