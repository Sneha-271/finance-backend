const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
 res.send("Finance Backend Running")
})

app.listen(5000,()=>{
 console.log("Server running on port 5000")
})

require("dotenv").config()

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Database connected"))
.catch(err=>console.log(err))

const dashboardRoutes=require("./routes/dashboardRoutes")

app.use("/dashboard",dashboardRoutes)