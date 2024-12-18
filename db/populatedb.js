#!/usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255)
);

`;

async function main() {
  console.log("seeding...");
  const client = new Client();
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done.");
}

main();
