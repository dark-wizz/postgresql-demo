const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "akram",
  database: "top_users",
  password: "sql123",
  port: 5432,
});
