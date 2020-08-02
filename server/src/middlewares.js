// Middleware for a not found pages
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Middleware for error handling
// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    // I used it just for the better way to debugg
    stack: process.nextTick.NODE_ENV === 'production' ? '👺' : error.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
