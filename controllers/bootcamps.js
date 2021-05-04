// @desc        Get all bootcamps
// @route       Get /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};

// @desc        Get single bootcamp
// @route       Get /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `get single bootcamp${req.params.id}` });
};

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps/
// @access      Private
exports.createBootcamp = (req, res, next) => {
  res.status(201).json({ success: true, msg: "create new bootcamp" });
};

// @desc        Update bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update/ edit bootcamp ${req.params.id}` });
};

// @desc        Delete bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete ${req.params.id}` });
};
