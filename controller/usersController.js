const db = require("../db/queries.js");

exports.usersListGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log(`username: ${usernames}`);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

exports.usersNewGet = async (req, res) => {
  res.render("new");
};

exports.usersNewPost = async (req, res) => {
  const { username } = req.body;
  await db.insetUsername(username);
  res.redirect("/");
};
