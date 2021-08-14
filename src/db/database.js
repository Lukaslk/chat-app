const mongoose = require('mongoose')
require('dotenv').config()

module.exports = conn = mongoose.connect(process.env.URLCONNECT, {useNewUrlParser: true,useCreateIndex: true}, (err) => {
    if(err) {
        return console.log("unable to connect to Database")
    }
})