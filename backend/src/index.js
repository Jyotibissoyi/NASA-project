const express = require("express")
const route = require("./router/router")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config();


 

app.use(express.json())


mongoose.set('strictQuery', true)//Deprication error 



mongoose.connect(process.env.DATABASE,
    { useNewUrlParser: true })
    .then(() => console.log(("Connected to MongoDb😎😎😎"))) 
    .catch(err => console.log(err.message))

app.use("/", route)


 



app.listen(process.env.PORT , function () {
    console.log("Express is running on port " + (process.env.PORT )+"🔥🔥")
})
