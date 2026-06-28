const express = require("express");
const usercontroller = require("../controller/userController");

const router = express.Router();

router.post("/signup", usercontroller.signup);
router.post("/login", usercontroller.login);
router.post("/logine", usercontroller.logine);
router.get("/profile", usercontroller.profile);

module.exports = router;
