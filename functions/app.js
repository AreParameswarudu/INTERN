const express = require("express")
const bodyParser = require("body-parser")


const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))


app.get("/",function(req,res){
    res.render("home")
})







app.listen( 3000,function(req,res){
    console.log("server is initiated in port 3000 sucessfully")
})