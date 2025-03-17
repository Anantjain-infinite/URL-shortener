const express = require("express");
const {handleGetLogin, handleGetSignup, handlePostLogin, handlePostSignup} = require("../controllers/user")
const router = express.Router();

router.post("/login", handlePostLogin)

router.post("/signup", handlePostSignup)

router.get("/login", handleGetLogin)

router.get("/signup", handleGetSignup)


module.exports = router;