const db = require("../db/queries.js");

exports.usersListGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  res.render("index", {
    usernames,
  });
};

exports.usersNewGet = async (req, res) => {
  res.render("new");
};

exports.usersNewPost = async (req, res) => {
  const { username } = req.body;
  await db.insetUsername(username);
  res.redirect("/");
};

exports.usersSearchGet = async (req, res) => {
  const { username } = req.query;
  const usernames = await db.searchUsername(username);
  res.render("index", {
    usernames,
  });
};

exports.usersDeletePost = async (req, res) => {
  await db.deleteUsernames();
  res.redirect("/");
};
