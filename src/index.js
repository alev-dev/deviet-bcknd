const app = require("./app");
require("./database");

const main = () => {
  app.listen(4000, () => {
    console.log("server on port " + "4000");
  });
};

main();
