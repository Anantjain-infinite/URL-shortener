function renderHome(req , res) {

    if(!req.user){
        return res.render("home", {
            message: "login is required"
        })
    }
    return res.render("home")
    
};

module.exports = {
    renderHome,
}