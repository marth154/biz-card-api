const UserModel = require("../models/user");

async function authentification(req, res) {
  const { googleId, imagUrl, email, givenName, familyName, name } =
    req.body.googleData.profileObj;
  const accessToken = req.body.googleData.accessToken;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.status(200).json({
        id: user._id,
        googleId,
        imagUrl,
        email,
        givenName,
        familyName,
        name,
        accessToken,
      });
    } else {
      const _user = await UserModel.create({
        googleId,
        imagUrl,
        email,
        givenName,
        familyName,
        name,
        accessToken,
      });
      res.status(200).json({
        id: _user._id,
        googleId,
        imagUrl,
        email,
        givenName,
        familyName,
        name,
        accessToken,
      });
    }
  } catch (error) {
    res.status(404).json();
  }
}

async function getUserId(req, res) {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      res.status(200).json({ id: user._id });
    } else {
      res.status(404).json();
    }
  } catch (error) {
    res.status(404).json();
  }
}

module.exports = {
  authentification,
  getUserId,
};
