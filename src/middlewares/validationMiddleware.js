const validateImageInput = (req, res, next) => {
  const { url_gambar } = req.body;

  if (!url_gambar) {
    return res
      .status(400)
      .json({ status: "error", message: "URL gambar tidak boleh kosong" });
  }

  next();
};

module.exports = validateImageInput;
