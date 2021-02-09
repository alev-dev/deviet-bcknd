const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
const chat = require("./models/chat");
const userlogged = require("./models/userlogged");
require("dotenv").config();
const io = require("socket.io")(http, {
  cors: {
    origin: "https://deviet-backend.herokuapp.com",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

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
app.use("/api/chat", require("./routes/chat"));
app.use("/api/userlogged", require("./routes/userlogged"));

var usersOnline = [];

io.on("connection", (socket) => {
  var user_id = socket.id;
  socket.on("login", async (data) => {
    var { username, email, avatar, googleId } = data;
    usersOnline.push({ username, email, avatar, googleId });
    socket.userId = googleId;
    var newUser = new userlogged({
      username,
      email,
      avatar,
      googleId,
    });
    await newUser
      .save()
      .then((res) => {
        console.log("done");
      })
      .catch((err) => {
        console.log("err");
      });
    io.sockets.emit("userslogged", usersOnline);
  });

  socket.on("newMessage", (data) => {
    var { avatar, idUser, message, name } = data;
    const newMessage = new chat({
      avatar,
      idUser,
      message,
      name,
    });
    newMessage.save().then((res) => io.sockets.emit("messageReceived", res));
  });

  socket.on("disconnect", async () => {
    console.log("User Disconnect " + socket.userId);
    let pos = usersOnline.findIndex((item) => item.id === socket.userId);
    pos !== -1 && usersOnline.splice(pos, 1);
    await userlogged.findOneAndRemove({ googleId: socket.userId });
    socket.disconnect(true);
  });
});

module.exports = http;
