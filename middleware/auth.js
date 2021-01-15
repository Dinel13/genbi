const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    req.isAdmin = false;
    return next();
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  let decodedAdmin;
  try {
    decodedToken = jwt.verify(token, "genbirahasianegara");
    if (!decodedToken) {
      req.isAuth = false;
      decodedAdmin = jwt.verify(token, "adminrahasianegara");
      if (!decodedAdmin) {
        req.isAdmin = false;
        return next();
      }
      req.adminId = decodedAdmin.adminId;
      req.isAdmin = true;
      next();
    }
    req.userId = decodedToken.userId;
    req.isAuth = true;
    next();
  } catch (err) {
    req.isAuth = false;
    req.isAdmin = false;
    return next();
  }
};
