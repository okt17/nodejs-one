module.exports = (req, res) => {
  res.type('text/plain');
  res.send(
    Object.keys(req.headers)
      .map(key => `${key}: ${req.headers[key]}`)
      .join('\n')
  );
};
