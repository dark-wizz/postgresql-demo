const express = require("express");

const app = express();

const userRouter = require("./routes/usersRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);

require("dotenv").config();

app.listen(3000, () => {
  console.log("listening...");
});
