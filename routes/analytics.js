const express = require("express");
const { handleGetAnalytics} = require("../controllers/url")
const router = express.Router();

// router.post("/", handleGenerateShortUrl);
// router.get('/:shortId', handleGetRedirect);
router.get('/', handleGetAnalytics);

module.exports = router;