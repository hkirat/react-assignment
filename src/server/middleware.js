const JWT_SECRET = "secret";
import jwt from "jsonwebtoken";

export function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ msg: "Missing auth Header" });
  }
  const decoded = jwt.verify(authHeader, JWT_SECRET);
  if (decoded && decoded.id) {
    req.userId = decoded.id;
    next();
  } else {
    return res.status(403).json({ msg: "Incorrect Token" });
  }
}
