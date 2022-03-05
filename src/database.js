const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Oinsanex:16481648@debiet.ospzy.mongodb.net/Deviet?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("database connectedd");
});
