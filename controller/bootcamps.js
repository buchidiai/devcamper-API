const BootCamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

//  @desc   GET all bootcamps
//  @route  GET /api/v1/bootcamps
//  @access public

exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await BootCamp.find();

  res.status(200).json({
    success: true,
    data: bootcamps,
    count: bootcamps.length
  });
});

//  @desc   GET single bootcamp
//  @route  GET /api/v1/bootcamps/:id
//  @access public

exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.findById(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: bootcamp });
});

//  @desc   Create new bootcamp
//  @route  POST /api/v1/bootcamps
//  @access private

exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.create(req.body);
  res.status(200).json({ success: true, data: bootcamp });
});

//  @desc   Update bootcamp
//  @route  PUT /api/v1/bootcamps/:id
//  @access private

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: bootcamp });
});

//  @desc   Delete bootcamp
//  @route  DELETE /api/v1/bootcamps:id
//  @access private

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});
