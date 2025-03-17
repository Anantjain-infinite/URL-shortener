const User = require("../models/user")
const {v4:uuidv4}= require("uuid")
const { setUser } = require("../services/auth");


async function handlePostSignup(req, res){
const { name , email, password }= req.body;

await User.create({
    name, 
    email, 
    password
});

res.redirect("/user/login");

}

async function handlePostLogin(req, res){

    const {email, password} = req.body;

    const user  = await User.findOne({email, password});

    if(!user){
       return res.render("login", {
            err: "invalid username or password"
        })
    }
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    return res.redirect("/");
  }

    
async function handleGetSignup(req , res){
    res.render("signup")
}
async function handleGetLogin(req, res){
    if(req.user){
        return res.send("already logged in")
    }
    res.render("login")
}


module.exports={
    handlePostSignup,
    handlePostLogin,
    handleGetLogin, 
    handleGetSignup
}