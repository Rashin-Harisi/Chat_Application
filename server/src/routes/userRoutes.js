const express = require("express");
const router = express.Router();

const {getUsers, seedUsers} = require("../controllers/userController")

router.get("/",getUsers);
router.post("/seed", seedUsers);

module.exports = router;