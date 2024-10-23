import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
  },
  gameType: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: String,
    required: true,
  },
});

const Game = mongoose.model("Game", gameSchema);

export default User;
