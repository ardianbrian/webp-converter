const crypto = require("crypto");

const generateHMAC = (url_gambar, secret) => {
  return crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(url_gambar))
    .digest("hex");
};

module.exports = generateHMAC;
