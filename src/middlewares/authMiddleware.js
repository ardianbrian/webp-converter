const generateHMAC = require("../utils/hmacGenerator");

const authMiddleware = (req, res, next) => {
  const secret = process.env.SECRET_KEY; // Ambil secret key dari env
  const hash = req.headers["auth-hash"];

  // Generate hash dari body request
  const generatedHash = generateHMAC(req.body, secret);

  console.log("URL Gambar:", req.body);
  console.log("Hash dari Header:", hash);
  console.log("Generated Hash:", generatedHash);

  if (hash !== generatedHash) {
    return res.status(401).json({ status: "error", message: "Unauthorized" });
  }

  next(); // Jika otentikasi berhasil, lanjutkan ke controller
};

module.exports = authMiddleware;
