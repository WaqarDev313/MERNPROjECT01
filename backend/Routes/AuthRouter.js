const route = require("express").Router();
const { signup, login } = require("../Controllers/AuthController"); // Import specific functions
const { signupValidation , loginValidation } = require("../Middlewares/AuthValidation"); // Middleware for validation


route.post("/signup", signupValidation,signup);
route.post("/login", loginValidation,login);
module.exports = route;