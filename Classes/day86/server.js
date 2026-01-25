const express = require("express")

const app = express() // server instance create karne ke liye


app.get("/", function (req, res) {
    res.send("Hello World")
})

app.get("/about", (req, res) => {
    res.send("This is about page")
})

app.get("/home", (req, res) => {
    res.send("This is Home page")
})

app.listen(3000) // server start karna