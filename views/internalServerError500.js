module.exports = (err, req, res) => {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Internal Server Error');
};
