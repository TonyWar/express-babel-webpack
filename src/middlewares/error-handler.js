const errorHandler = fn => (req, res, next) => {
  try {
    fn(req, res, next);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
}
export default errorHandler