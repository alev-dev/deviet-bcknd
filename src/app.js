const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");

//Settings
app.set("port", 4000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/deveet", require("./routes/deveet"));
app.use("/api/comment", require("./routes/comment"));
app.use("/public", express.static(`${__dirname}/storage/media`));

app.use("/api/auth", require("./routes/auth"));
module.exports = app;
