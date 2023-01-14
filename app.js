const Bodyparser=require("body-parser")
const Express=require("Express")
const Cors=require("Cors")
const Mongoose=require("Mongoose")

var app=Express()

app.post("/",(req,res)=>{


    res.send("welcome to recipe website")
})

app.post("/add",(req,res)=>{

    res.send("add recipes")
})


app.post("/edit",(req,res)=>{

    res.send("edit receipes")
})

app.post("/delete",(req,res)=>{

    res.send("delete recipes")
})


app.post("/search",(req,res)=>{

    res.send("search recipes")
})

app.get("/viewall",(req,res)=>{


    res.send("view all recipes")
})

app.listen(4000)