const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/", (req, res) => {
  Users.getUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// server.post("/", (req, res) => {
//   const newUser = req.body;
//   Users.addUser(newUser)
//     .then(user => {
//       res.status(201).json(user);
//     })
//     .catch(error => {
//       res.status(500).json({
//         error: "There was an error adding user to the database"
//       });
//     });
// });

module.exports = router;
