const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
require("dotenv").config();

//Settings
app.set("port", process.env.PORT || 4000);
//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/deveet", require("./routes/deveet"));
app.use("/api/comment", require("./routes/comment"));
app.use("/api/auth", require("./routes/auth"));
module.exports = app;
