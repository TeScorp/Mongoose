// user.js
const mongoose = require("./db"); // Importez la connexion à la base de données depuis db.js

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
