// // for dividing, shuffling + drag & drop
// import React, { useState, useEffect } from "react";
// import { JigsawPuzzle } from "react-jigsaw-puzzle";

// export default function MyPuzzle() {
//   return (
//     <JigsawPuzzle
//       image="/pepe_the_frog_crying.jpeg"
//       level={4}
//       onCompleted={() => alert("Congratulations! You completed the puzzle!")}
//     />
//   );
// }


import React, { useState, useEffect } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle";

export default function MyPuzzle() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(30);

  useEffect(() => {
    if(time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
    }
  }, [time]);

  const handleCompletion = () => {
    alert("Congratulations! You completed the puzzle!");
    // Here you can add logic for the score
    setScore(score + 1);
  };

  return (
    <>
      <h2>Score: {score}</h2>
      <h2>Time Remaining: {time}</h2>
      {gameOver && <p>Game Over! Here is a funny joke for you: Why don't scientists trust atoms? Because they make up everything!</p>}
      <JigsawPuzzle
        image="/pepe_the_frog_crying.jpeg"
        level={4}
        onCompleted={handleCompletion}
      />
    </>
  );
}


async function saveScore(scoreData) {
  const response = await fetch("/api/saveScore", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(scoreData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not save score.");
  }

  return data;
}
