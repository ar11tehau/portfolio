import express from 'express';

const PORT = 3100

const app = express()

// Use Static data
app.use(express.static('public'));


// Set EJS as templating engine
app.set('view engine', 'ejs')

app.get("/", function(req, res) {
    res.render("index", { title: "Portfolio" })
})

app.get("/cv/fr", function(req, res) {
    res.render("cv_fr")
})

app.get("/cv/en", function(req, res) {
    res.render("cv_en")
})


app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`)
})