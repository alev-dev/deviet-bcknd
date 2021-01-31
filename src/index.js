const app = require("./app");
require("./database");

const main = () => {
  app.listen(process.env.PORT || 4000, () => {
    console.log("server on port 4000");
  });
};
main();
