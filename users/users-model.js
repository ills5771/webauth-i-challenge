const db = require("../database/dbConfig.js");

module.exports = {
  getUsers,
  getById,
  addUser,
  getBy
};

function getUsers() {
  return db("users");
}
function getBy(username) {
  return db("users").where(username);
}

async function addUser(user) {
  const [id] = await db("users").insert(user);

  return getById(id);
}
function getById(id) {
  return db("users")
    .where({ id })
    .first();
}
