const BootCamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");

//  @desc   GET all bootcamps
//  @route  GET /api/v1/bootcamps
//  @access public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await BootCamp.find();

    res
      .status(200)
      .json({ success: true, data: bootcamps, count: bootcamps.length });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//  @desc   GET single bootcamp
//  @route  GET /api/v1/bootcamps/:id
//  @access public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamp.findById(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
};

//  @desc   Create new bootcamp
//  @route  POST /api/v1/bootcamps
//  @access private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamp.create(req.body);

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//  @desc   Update bootcamp
//  @route  PUT /api/v1/bootcamps/:id
//  @access private

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//  @desc   Delete bootcamp
//  @route  DELETE /api/v1/bootcamps:id
//  @access private

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
