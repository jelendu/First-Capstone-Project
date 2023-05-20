const Sequelize = require("sequelize");
require("dotenv").config();

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const Puzzler = require("./puzzlemodel")(sequelize);

module.exports = {
  sequelize,
  Sequelize,
  Puzzler,
};
