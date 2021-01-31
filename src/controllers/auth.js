const { OAuth2Client } = require("google-auth-library");

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
    .then((response) => {
      res.json(response.getPayload());
    })
    .catch((err) => {
      res.json(err);
    });
};
