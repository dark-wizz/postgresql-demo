const { Router } = require("express");
const usersController = require("../controller/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);
usersRouter.get("/new", usersController.usersNewGet);
usersRouter.post("/new", usersController.usersNewPost);
usersRouter.get("/search", usersController.usersSearchGet);
usersRouter.post("/delete", usersController.usersDeletePost);

module.exports = usersRouter;
