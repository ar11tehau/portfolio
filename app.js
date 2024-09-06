"use strict"
import express from 'express';
import path from 'path';
import fs from "fs"

const PORT = 3100

const app = express()

const __dirname = import.meta.dirname;

const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));

// Use Static data
app.use(express.static('public'));

// Set EJS as templating engine
app.set('view engine', 'ejs')

app.get("/", function(req, res) {
    res.render("layout", { title: "Portfolio", data: data })
})

app.get("/cv", function(req, res) {
    const filename = path.join(__dirname + '/public/pdf/DOMELIER_ARIITEHAU_CV.pdf')
    res.sendFile(filename)
});

app.get("/cv/fr", function(req, res) {
    res.render("cv_fr")
})

app.get("/cv/en", function(req, res) {
    res.render("cv_en")
})


app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`)
})