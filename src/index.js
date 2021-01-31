const app = require("./app");
require("./database");

const main = () => {
  app.listen(app.get("port"), () => {
    console.log("server on port " + app.get("port"));
  });
};
main();
