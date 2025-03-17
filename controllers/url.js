const shortid= require("shortid");
const URL = require('../models/url')

async function handleGenerateShortUrl(req , res){
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error : "url is required"});

    }
    const shortID = shortid();

    await URL.create({
        shortId : shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id
    });

    return res.render("generated", {
        id : shortID
    })
}

async function handleGetRedirect(req, res) {
    try {
        const shortId = req.params.shortId;

        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    }
                }
            }
        );

        res.redirect(entry.redirectURL)
        
    } catch (error) {
        console.error("Error in handleGetRedirect:", error);
        return res.status(500).send("Internal Server Error");
    }
}

async function handleGetAnalytics(req, res){
    // shortId = req.params.shortId;

    // const doc = await URL.findOne({shortId});

    // res.json({
    //     "total clicks": doc.visitHistory.length,
    //     "visithistory":doc.visitHistory
    // })
      if (!req.user) return res.redirect("/user/login");


      const allurls = await URL.find({ createdBy: req.user._id });

    res.render("analytics", {
        urls :allurls,
    })

}
module.exports = {
    handleGenerateShortUrl,
    handleGetRedirect,
    handleGetAnalytics,
}