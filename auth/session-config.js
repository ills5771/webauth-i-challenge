const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const configureKnex = require("../database/dbConfig.js");

module.exports = {
  name: "cookies",
  secret: "keep it secret, keep it safe",
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: configureKnex,
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 30
  })
};
