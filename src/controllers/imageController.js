const imageService = require("../services/imageService");
const generateHMAC = require("../utils/hmacGenerator");

const convertImage = async (req, res) => {
  const { url_gambar } = req.body;
  const secret = process.env.SECRET_KEY;

  const hash = req.headers["auth-hash"];
  const generatedHash = generateHMAC(req.body, secret);

  if (hash !== generatedHash) {
    return res.status(401).json({ status: "error", message: "Unauthorized" });
  }

  try {
    const result = await imageService.convertToWebP(url_gambar);
    return res.json(result);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

module.exports = { convertImage };
