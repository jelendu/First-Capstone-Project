const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {}
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: DataTypes.STRING,
    },
    { sequelize, modelName: "user" }
  );

  class Puzzle extends Model {}
  Puzzle.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // Add other puzzle attributes here
    },
    { sequelize, modelName: "puzzle" }
  );

  class UserPuzzles extends Model {}
  UserPuzzles.init(
    {
      // Attributes as per your schema
    },
    { sequelize, modelName: "user_puzzles" }
  );

  class Leaderboard extends Model {}
  Leaderboard.init(
    {
      // Attributes as per your schema
    },
    { sequelize, modelName: "leaderboard" }
  );

  User.hasMany(UserPuzzles, { foreignKey: "user_id" });
  UserPuzzles.belongsTo(User, { foreignKey: "user_id" });

  Puzzle.hasMany(UserPuzzles, { foreignKey: "puzzle_id" });
  UserPuzzles.belongsTo(Puzzle, { foreignKey: "puzzle_id" });

  User.hasMany(Leaderboard, { foreignKey: "user_id" });
  Leaderboard.belongsTo(User, { foreignKey: "user_id" });

  return { User, Puzzle, UserPuzzles, Leaderboard };
};
