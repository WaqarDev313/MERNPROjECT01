const route = require("express").Router();
const { signup, login } = require("../Controllers/AuthController"); // Import specific functions
const { signupValidation , loginValidation } = require("../Middlewares/AuthValidation"); // Middleware for validation
const {UserList} = require("../Controllers/UserController");
const { createTask} = require("../Controllers/TaskController");


route.post("/task", createTask);
route.post("/signup", signupValidation,signup);
route.post("/login", loginValidation,login);
route.get("/users", UserList);
module.exports = route;