const http = require("./app");

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:4000",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (client) => {
  console.log("connected");
});
