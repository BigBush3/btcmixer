const { Schema, model } = require("mongoose");

const Address = new Schema({
  address: { type: String, required: true },
});

module.exports = model("Address", Address);
