import React from "react";
import MyPuzzle from "./MyPuzzle";
import PuzzlePiece from "./PuzzlePiece";
import "./PuzzleBoard.css";


const PuzzleBoard = () => {
  return (
    <div>
      <MyPuzzle />
      <PuzzlePiece />
    </div>
  );
};

export default PuzzleBoard;

