// Central error handler. Any thrown error or next(err) call in a route lands here.
function errorHandler(err, _req, res, _next) {
  console.error(err);

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || 'field';
    return res.status(409).json({ message: `That ${field} is already registered.` });
  }

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ message: messages.join(', ') });
  }

  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Server error' });
}

module.exports = errorHandler;
