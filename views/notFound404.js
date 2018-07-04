module.exports = (req, res) => {
  res.status(404);
  // res.type('text/plain');
  // res.send('404 - Not Found');
  res.render('notFound');
};
