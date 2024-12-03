const pool = require("./pool");

exports.getAllUsernames = async () => {
  const { rows } = await pool.query("SELECT username FROM usernames");
  return rows;
};

exports.insetUsername = async (username) => {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

exports.searchUsername = async (username) => {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username ilike $1",
    [`%${username}%`],
  );
  return rows;
};

exports.deleteUsernames = async () => {
  await pool.query("TRUNCATE TABLE usernames");
};
