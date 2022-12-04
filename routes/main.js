const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

//Main home routes
router.get("/users", homeController.getUserData)

module.exports = router;
