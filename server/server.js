//server packages/imports
const express = require('express');
const cors = require('cors');
const path = require("path");
const {
  getPuzzlers,
  createPuzzlers,
  updatePuzzler,
  deletePuzzlers,
} = require("./controllers/PuzzleController.js");

// const { SERVER_PORT } = process.env
// const {seed} = require('./seed.js')


//initializing express
const app = express();
// app.use(express.static("src"));

//middleware for endpoints
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "build-out/client/build")));

//endpoints


//runs server on port 5500
app.listen(5500, () => console.log(`listening on 5500`));


//Dev
//app.post('/seed', seed)

//puzzlers
app.get('/api/puzzlers', getPuzzlers)
app.post('/api/puzzlers', createPuzzlers)
app.put('/api/puzzlers:id', updatePuzzler)
app.delete('/api/puzzlers:id', deletePuzzlers)

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

