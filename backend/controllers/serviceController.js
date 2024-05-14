const Services = require("../models/serviceModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

// Create Product -- Admin
exports.createService = catchAsyncErrors(async (req, res, next) => {
  // let images = [];

  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // const imagesLinks = [];

  // for (let i = 0; i < images.length; i++) {
  //   const result = await cloudinary.v2.uploader.upload(images[i], {
  //     folder: "pentesting",
  //   });

  //   imagesLinks.push({
  //     public_id: result.public_id,
  //     url: result.secure_url,
  //   });
  // }

  // req.body.images = imagesLinks;
  req.body.user = req.user.id;


  const service = await Services.create(req.body);

  res.status(201).json({
    success: true,
    service,
  });
});

// Get All Product
exports.getAllServices = catchAsyncErrors(async (req, res, next) => {

  let service = await Services.find();

  res.status(200).json({
    success: true,
    service,
  });
});


// Get Product Details
exports.getServiceDetails = catchAsyncErrors(async (req, res, next) => {
  const service = await Services.findById(req.params.id);

  if (!service) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    service,
  });
});

// Update Product -- Admin

exports.updateService = catchAsyncErrors(async (req, res, next) => {
  let service = await Services.findById(req.params.id);

  if (!service) {
    return next(new ErrorHander("Product not found", 404));
  }

  // // Images Start Here
  // let images = [];

  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // if (images !== undefined) {
  //   // Deleting Images From Cloudinary
  //   for (let i = 0; i < product.images.length; i++) {
  //     await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  //   }

  //   const imagesLinks = [];

  //   for (let i = 0; i < images.length; i++) {
  //     const result = await cloudinary.v2.uploader.upload(images[i], {
  //       folder: "products",
  //     });

  //     imagesLinks.push({
  //       public_id: result.public_id,
  //       url: result.secure_url,
  //     });
  //   }

  //   req.body.images = imagesLinks;
  // }

  service = await Services.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    service,
  });
});

// Delete Product

exports.deleteService = catchAsyncErrors(async (req, res, next) => {
  const service = await Services.findById(req.params.id);

  if (!service) {
    return next(new ErrorHander("Product not found", 404));
  }

  // // Deleting Images From Cloudinary
  // for (let i = 0; i < product.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  // }

  await service.remove();

  res.status(200).json({
    success: true,
    message: "Service Delete Successfully",
  });
});
