let param = null;

//  @desc   GET all bootcamps
//  @route  GET /api/v1/bootcamps
//  @access public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

//  @desc   GET single bootcamp
//  @route  GET /api/v1/bootcamps/:id
//  @access public
exports.getBootcamp = (req, res, next) => {
  param = req.params.id;
  res.status(200).json({ success: true, msg: `get bootcamp ${param}` });
};

//  @desc   Create new bootcamp
//  @route  POST /api/v1/bootcamps
//  @access private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create new bootcamp` });
};

//  @desc   Update bootcamp
//  @route  PUT /api/v1/bootcamps/:id
//  @access private
exports.updateBootcamp = (req, res, next) => {
  param = req.params.id;
  res.status(200).json({ success: true, msg: `Update bootcamp ${param}` });
};

//  @desc   Delete bootcamp
//  @route  DELETE /api/v1/bootcamps:id
//  @access private
exports.deleteBootcamp = (req, res, next) => {
  param = req.params.id;
  res.status(200).json({ success: true, msg: `delete bootcamp ${param}` });
};
