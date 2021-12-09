const mongoose = require('mongoose')
const config = require('config')
const url = config.get("DB_CONFIG.URL")



const connectDB = () => {
    mongoose.connect(url, (err) => {
        if (err)
            throw err
        console.log("DB connected")
    })
}

module.exports = connectDB