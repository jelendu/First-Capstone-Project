const {
  Puzzlers,
  Puzzle,
  UserPuzzles,
  Leaderboard,
} = require("../models/PuzzleModel");

exports.getPuzzlers = async (req, res) => {
  const puzzlers = await Puzzlers.findByPk(req.params.id);
  if (puzzlers) {
    res.status(200).json(puzzlers);
  } else {
    res.status(404).send("Puzzler not found");
  }
};

exports.createPuzzlers = async (req, res) => {
  const puzzlers = await Puzzlers.create(req.body);
  res.status(201).json(puzzlers);
};

exports.updatePuzzler = async (req, res) => {
  const puzzlers = await Puzzlers.findByPk(req.params.id);
  if (puzzlers) {
    await puzzler.update(req.body);
    res.status(200).json(puzzlers);
  } else {
    res.status(404).send("Puzzler not found");
  }
};

exports.deletePuzzlers = async (req, res) => {
  const puzzlers = await Puzzlers.findByPk(req.params.id);
  if (puzzlers) {
    await puzzlers.destroy();
    res.status(204).send("Puzzler deleted");
  } else {
    res.status(404).send("Puzzler not found");
  }
};

// Add similar functions for Puzzle, UserPuzzles, Leaderboard?
