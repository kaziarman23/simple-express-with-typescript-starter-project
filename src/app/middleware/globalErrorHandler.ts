import { ErrorRequestHandler } from 'express';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  // Mongoose validation error handling
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: err,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }

  res.status(statusCode).json({
    message: err.message || 'Something went wrong!',
    success: false,
    error: err,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

export default globalErrorHandler;