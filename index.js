
const express = require("express");
const app = express();
const PORT = 5000
const mongoose = require("mongoose");
const {userRegister , loginUser} = require("./Controller/userController");
const {addFood , deleteFood, getFood} = require("./Controller/foodController");

app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/hamza" , {useNewUrlParser:true})
mongoose.connection.once("open",()=>{
    console.log("database is connected")
})

app.post("/Sign-Up" , userRegister)
app.post("/login" , loginUser)
app.post("/lunch" , addFood )
app.delete("/deleteFood/:id" , deleteFood )
app.get("/allFood" , getFood )


app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});