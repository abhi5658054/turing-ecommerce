import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("HELLO WORLD!!")
})

module.exports = app;