module.exports = (req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
};
