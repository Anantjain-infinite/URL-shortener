const express = require("express");
const {handleGenerateShortUrl, handleGetRedirect, } = require("../controllers/url")
const router = express.Router();

router.post("/", handleGenerateShortUrl);
router.get('/:shortId', handleGetRedirect);
// router.get('/:shortId', handleGetAnalytics);

module.exports = router;