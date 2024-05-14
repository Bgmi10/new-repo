const Courses = require("../models/courseModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

// Create Product -- Admin
exports.createCourse = catchAsyncErrors(async (req, res, next) => {
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


  const course = await Courses.create(req.body);

  res.status(201).json({
    success: true,
    course,
  });
});

// Get All Product
exports.getAllCourses = catchAsyncErrors(async (req, res, next) => {

  let course = await Courses.find();

  res.status(200).json({
    success: true,
    course,
  });
});


// Get Product Details
exports.getCourseDetails = catchAsyncErrors(async (req, res, next) => {
  const course = await Courses.findById(req.params.id);

  if (!course) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    course,
  });
});

// Update Product -- Admin

exports.updateCourse = catchAsyncErrors(async (req, res, next) => {
  let course = await Courses.findById(req.params.id);

  if (!course) {
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

  course = await Courses.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    course,
  });
});

// Delete Product

exports.deleteCourse = catchAsyncErrors(async (req, res, next) => {
  const course = await Courses.findById(req.params.id);

  if (!course) {
    return next(new ErrorHander("Product not found", 404));
  }

  // // Deleting Images From Cloudinary
  // for (let i = 0; i < product.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  // }

  await course.remove();

  res.status(200).json({
    success: true,
    message: "Course Delete Successfully",
  });
});
