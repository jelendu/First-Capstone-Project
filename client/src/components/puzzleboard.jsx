import React from "react";
import MyPuzzle from "./MyPuzzle";
import PuzzlePiece from "./PuzzlePiece";
import "./PuzzleBoard.css";

const imagePath = 'pepe_the_frog_crying.jpeg';

const PuzzleBoard = () => {
  return (
    <div>
      <MyPuzzle image={imagePath} />
      <PuzzlePiece image={imagePath} />
    </div>
  );
};

export default PuzzleBoard;

