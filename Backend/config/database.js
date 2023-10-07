const mongoose = require('mongoose')

//Database connectivity
const configureDB = () => {
    mongoose
        .connect("mongodb://localhost:27017/jobs-db")
        .then(() => {
            console.log("connected to db")
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configureDB