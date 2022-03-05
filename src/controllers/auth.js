const { OAuth2Client } = require("google-auth-library");
const user = require("../models/user");
const client = new OAuth2Client(
  "365928965363-tiqenhoq6ifss2r9jighm1d0lhvinnlr.apps.googleusercontent.com"
);

exports.googleLogin = (req, res) => {
  const { idToken } = req.body;
  client
    .verifyIdToken({
      idToken,
      audience:
        "365928965363-tiqenhoq6ifss2r9jighm1d0lhvinnlr.apps.googleusercontent.com",
    })
    .then(async (response) => {
      const id = response.getPayload().sub;
      const userData = await user.findOne({ googleId: id });
      res.json(userData);
    })
    .catch((err) => {
      console.log("asd");

      res.json(err);
    });
};
