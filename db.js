const mongoose = require("mongoose");

async function connection(url){
    return mongoose.connect(url).then(()=> console.log("mongodb connected"))
}

module.exports = {
    connection
}