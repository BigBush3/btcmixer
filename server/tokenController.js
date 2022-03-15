const User = require("./models/User");
const Role = require("./models/Role");
const Address = require("./models/Address");
const Tokens = require("./models/Tokens");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secret } = require("./config");

class authController {
  async getTokens(req, res) {
    try {
      const tokens = await Tokens.find();
      res.json(tokens);
    } catch (e) {
      console.log(e);
    }
  }
  async addToken(req, res) {
    try {
      const token = await Tokens.create({ ...req.body });
      res.json(token);
    } catch (e) {
      console.log(e);
    }
  }
  async deleteToken(req, res) {
    try {
      const deletedToken = await Tokens.deleteMany({ _id: req.body.ids });
      res.json(deletedToken);
    } catch (e) {
      console.log(e);
    }
  }
  async addAddress(req, res) {
    try {
      const newAddress = await Address.create({ ...req.body });
      res.json(newAddress);
    } catch (e) {
      console.log(e);
    }
  }
  async getAddress(req, res) {
    try {
      const address = await Address.find();
      res.json(address);
    } catch (e) {
      console.log(e);
    }
  }
  async deletedAddress(req, res) {
    try {
      const deletedAddress = await Address.deleteMany({ _id: req.body.ids });
      res.json(deletedAddress);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new authController();
