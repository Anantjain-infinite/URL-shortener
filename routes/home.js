const express = require("express");
const {renderHome} = require("../controllers/home")
const router = express.Router();

router.get('/', renderHome  );

module.exports= router;