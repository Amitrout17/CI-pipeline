const express = require("express");
const userController = require("../controllers/userController");
const isAuthenticated = require("../middlewares/loggedIn");

const router = express.Router();

router.use((req, res, next) => {
  console.log("middleware common to all routes");
  next();
});

router.route("/user/get").get(isAuthenticated, userController.getUser);
router.route("/user/post").post(userController.createuser);
module.exports = router;
