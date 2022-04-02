const { Schema, model } = require("mongoose");

const Address = new Schema({
  arrayAddress: {type: Array, required: true}
});

module.exports = model("Address", Address);
