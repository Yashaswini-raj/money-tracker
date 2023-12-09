const mongoose=require('mongoose')
const colors=require('colors')
const { log, Console } = require('console')

const connectDB=async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server is running on ${mongoose.connection.host}`.bgCyan.white)
    } catch (error) {
        console.log(`${error}`.bgred);
    }
}
module.exports =connectDB