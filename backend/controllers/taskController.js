const Tasks = require("../models/taskModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

// Create Product -- Admin
exports.createTask = catchAsyncErrors(async (req, res, next) => {
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


  const task = await Tasks.create(req.body);

  res.status(201).json({
    success: true,
    task,
  });
});

// Get All Product
exports.getAllTasks = catchAsyncErrors(async (req, res, next) => {

  let task = await Tasks.find();

  res.status(200).json({
    success: true,
    task,
  });
});


// Get Product Details
exports.getTaskDetails = catchAsyncErrors(async (req, res, next) => {
  const task = await Tasks.findById(req.params.id);

  if (!task) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    task,
  });
});

// Update Product -- Admin

exports.updateTask = catchAsyncErrors(async (req, res, next) => {
  let task = await Tasks.findById(req.params.id);

  if (!task) {
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

  task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    task,
  });
});

// Delete Product

exports.deleteTask = catchAsyncErrors(async (req, res, next) => {
  const task = await Tasks.findById(req.params.id);

  if (!task) {
    return next(new ErrorHander("Product not found", 404));
  }

  // // Deleting Images From Cloudinary
  // for (let i = 0; i < product.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  // }

  await task.remove();

  res.status(200).json({
    success: true,
    message: "Task Delete Successfully",
  });
});
