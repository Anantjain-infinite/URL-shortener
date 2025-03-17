const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url");
const urlAnalytics = require("./routes/analytics");
const homeRoute = require("./routes/home");
const userRoute = require("./routes/user");
const {connection} = require("./db");
const cookieParser = require("cookie-parser");
const {restrictToLoggedinUserOnly, checkAuth} = require("./middlewares/auth")



const app = express();

app.set('view engine' , 'ejs');
app.set('views', path.resolve("./views"));



connection("mongodb+srv://aj2005222:gF01TnGQuIjev2eY@mycluster.nmp8l.mongodb.net/");

app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/analytics", checkAuth, urlAnalytics);
app.use("/", checkAuth, homeRoute);
app.use("/user", userRoute);





const PORT = 3000;
app.listen(PORT, () => console.log("server is running"));