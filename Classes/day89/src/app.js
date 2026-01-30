/**
 * App Entry Point
 */

const express = require('express');

const app = express();


const notes = [];

app.use(express.json())

app.post("/notes", (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        message: "Note created successfully"
    })
})

app.get("/notes", function(req, res) {
    res.status(200).json({
        notes: notes
    })
})

app.delete("/notes/:mama", (req, res) => {
    delete notes [ req.params.mama ]

    res.status(204).json({
        message: "Note deleted successfully"
    })
})

app.patch("/notes/:index", (req, res) => {
    notes [ req.params.index ].description = req.body.description

    res.status(200).json({
        message: "Note updated successfully."
    })
})

module.exports = app;