const axios = require("axios");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const convertToWebP = async (url_gambar) => {
  if (!url_gambar) {
    throw { status: 400, message: "URL gambar tidak boleh kosong" };
  }

  const response = await axios.get(url_gambar, { responseType: "arraybuffer" });
  const imageBuffer = Buffer.from(response.data, "binary");

  // Gunakan timestamp untuk nama file
  const timestamp = Date.now();
  const outputPath = path.join(
    __dirname,
    `../../public/images/output_${timestamp}.webp`
  );
  const quality = 60;

  await sharp(imageBuffer).webp({ quality }).toFile(outputPath);

  const stats = fs.statSync(outputPath);
  return {
    url_webp: outputPath,
    ukuran_webp: stats.size,
    status: "success",
    message: "Konversi berhasil",
  };
};

module.exports = { convertToWebP };
