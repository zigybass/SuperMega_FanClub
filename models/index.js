const fs = require("fs");
const Sequelize = require("sequelize");
const path = require("path");
const env = process.argv.NODE_ENV || "development";
const config = require(__dirname + "../config/config.json")[env];
const db = {};

