const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "ihjBLSKHCBLjdfhi");
    req.token = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token." });
  }
}

module.exports = verifyToken;
