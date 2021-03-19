require("dotenv").config(); //replicating env variable for production

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser : true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error",(error)=> {
    console.error(error);
});
db.on("open",()=> {
    console.log("Connected to database");
});

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(3000,()=>{
    console.log("Server Started");
}); 