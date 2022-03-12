const express=require("express")
const app = express()

app.get('/', (req, res)=>{
    console.log("Index page logged in the logs")
    res.send("<h1>WELCOME TO THE NODE JS APP</h1>")
})

app.get('/about', (req, res)=>{
    console.log("About Page logged in the logs")
    res.send("<h1>THIS IS THE ABOUT PAGE</h1>")
})

app.get('/home', (req, res)=>{
    console.log("HOME Page logged in the logs")
    res.send("<h1>THIS IS THE HOME PAGE</h1>")
})
app.get('/placement', (req, res)=>{
    console.log("Placement Page logged in the logs")
    res.send("<h1>THIS IS THE placement PAGE</h1>")
})

app.listen(3000)