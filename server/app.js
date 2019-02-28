import path from "path";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const isDist = __dirname.includes("/dist/") ? true : false;

app.use(express.static(path.join(__dirname, isDist ? "../" : "../dist/")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, isDist ? "../index.html" : "../dist/index.html")
  );
});

module.exports = app;
