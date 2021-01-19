const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    req.isAdmin = false;
    return next();
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = await jwt.verify(token.toString(), "genbirahasianegara");
    if (!decodedToken) {
      req.isAuth = false;
      req.isAdmin = false;
    }
    if (decodedToken.admin) {
      req.adminId = decodedToken.adminId;
      req.isAdmin = true;
    } else {
      req.userId = decodedToken.userId;
      req.isAuth = true;
    }
    return next();
  } catch (err) {
    req.isAuth = false;
    req.isAdmin = false;
    return next();
  }
};
