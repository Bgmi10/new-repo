const Texts = require("../models/homeModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");


exports.createText = catchAsyncErrors(async (req, res, next) => {

    const text = await Texts.create(req.body);

    res.status(201).json({
      success: true,
      text,
    });
  });
// Get All Product
exports.getAllTexts = catchAsyncErrors(async (req, res, next) => {

  let texts = await Texts.find();

  res.status(200).json({
    success: true,
    texts,
  });
});


