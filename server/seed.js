require("dotenv").config();
const {
  Puzzler,
  Puzzle,
  UserPuzzles,
  Leaderboard,
} = require("./models/PuzzleModel");

const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const { Puzzler } = require("./models");

const puzzlers = [
  { user_id: 1, player: "Ben", username: "benchpressbroad_10" },
  { user_id: 2, player: "Aranvihn", username: "the_yaegerist" },
  { user_id: 3, player: "Jeri", username: "notspringer9" },
  { user_id: 4, player: "Lucky", username: "phantastic4" },
  { user_id: 5, player: "Anwar", username: "anwarWins" },
  { user_id: 6, player: "Oscar", username: "one_punch_man" },
  { user_id: 7, player: "Melissa", username: "issaStar" },
  { user_id: 8, player: "Elena", username: "i_can_see_the_future" },
  { user_id: 9, player: "Mahad", username: "me_at_hello" },
  { user_id: 10, player: "Hikmah", username: "theWise" },
  { user_id: 11, player: "Hoyoung", username: "hohoholee" },
  { user_id: 12, player: "Mitchell", username: "nothing_tops_the_css_god" },
  { user_id: 13, player: "Katya", username: "daretobeK" },
  { user_id: 14, player: "Ashley", username: "friendship_is_magic" },
  { user_id: 15, player: "Joanna", username: "floating_nodes" },
  { user_id: 16, player: "Dionte", username: "he_doesnt_just_walk_he_climbs" },
  { user_id: 17, player: "Nasir", username: "nasir" },
  { user_id: 18, player: "Marufa", username: "marufa" },
  { user_id: 19, player: "Junior", username: "junior" },
  { user_id: 20, player: "Drew", username: "drew" },
  { user_id: 21, player: "Brenda", username: "brenda" },
  { user_id: 22, player: "Abdirahman", username: "abdirahman" },
  { user_id: 23, player: "Charneaka", username: "charneaka" },
  { user_id: 24, player: "Motasem", username: "motasem" },
  { user_id: 25, player: "Latisha", username: "latisha" },
  { user_id: 26, player: "Omair", username: "omair" },
  { user_id: 27, player: "Rola", username: "rola" },
  { user_id: 28, player: "Elise", username: "elise" },
  { user_id: 29, player: "Chase", username: "chase" },
  { user_id: 30, player: "Hamza", username: "hamza" },
  { user_id: 31, player: "Andrew", username: "andrew" },
  { user_id: 32, player: "Lyonel", username: "lyonel" },
  { user_id: 33, player: "Ayuub", username: "ayuub" },
];

async function addPuzzlers() {
  try {
    await Puzzler.bulkCreate(puzzlers);
    console.log("Puzzlers were added successfully.");
  } catch (err) {
    console.error("An error occurred while trying to add puzzlers:", err);
  }
}

async function seed() {
  await addPuzzlers();
  // to close connection once done seeding
  require("./models").sequelize.close();
}

seed();
