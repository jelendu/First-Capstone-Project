

// document.addEventListener("DOMContentLoaded", function() {
//   const puzzleImage = "/pepe_the_frog_crying.jpeg"; 
//   const puzzleContainer = document.getElementById('puzzle-container');

//   new JigsawPuzzle({
//     container: puzzleContainer,
//     imageSrc: puzzleImage,
//     rows: 4,
//     columns: 4,
//   });
// });

import React from "react";
import ReactDOM from "react-dom";
import PuzzleBoard from "./components/PuzzleBoard"; // Import your component

ReactDOM.render(
  <React.StrictMode>
    <PuzzleBoard /> {/* Render your component */}
  </React.StrictMode>,
  document.getElementById("root")
);


