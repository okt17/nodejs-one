const merge = require('deepmerge');
const { requireIfExists } = require('./utils');
const localSettings = requireIfExists('./localSettings');

const CLIENT = {
  TITLE: 'Express',
};

const settings = {
  CLIENT,
};

module.exports = merge(settings, localSettings);
