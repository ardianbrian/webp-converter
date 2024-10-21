const express = require("express");
const { convertImage } = require("../controllers/imageController");
const authMiddleware = require("../middlewares/authMiddleware");
const validateImageInput = require("../middlewares/validationMiddleware");

const router = express.Router();

router.post("/convert", authMiddleware, validateImageInput, convertImage);

module.exports = router;
