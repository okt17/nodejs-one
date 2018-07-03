const SETTINGS = require('../settings').CLIENT;

const indexView = (req, res) => {
  res.render('index', {
    title: SETTINGS.TITLE,
    settings: JSON.stringify(SETTINGS),
  });
};

module.exports = {
  index: indexView,
  headers: require('./headers'),
  graphql: require('./graphql'),
  notFound404: require('./notFound404'),
  internalServerError500: require('./internalServerError500'),
};
