const { Schema, model } = require("mongoose");

const Tokens = new Schema({
  network: { type: String, required: true },
  token: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: Object, required: true },
});

module.exports = model("Tokens", Tokens);
