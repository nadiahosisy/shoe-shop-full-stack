//@desc       Get all shoes
//@route      GET /api/vi/shoes
//@access     Public
exports.getAllShoes = async (req, res, next) => {
  try {
    res.status(200).json({ success: true });
  } catch (err) {}
};
