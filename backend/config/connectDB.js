const mongoose=require('mongoose')
const colors=require('colors')
const { log, Console } = require('console')

const connectDB=async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
       // console.log(`Server is running on ${mongoose.connection.host}`.bgCyan.white)
        console.log("db connected")
    } catch (error) {
        // console.log(`${error}`.bgred);
        console.log("db not connected")
        console.log(error)
    }
}
module.exports =connectDB