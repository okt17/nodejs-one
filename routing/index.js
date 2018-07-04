const express = require('express');
const morgan = require('morgan');
const views = require('../views');

module.exports = (app) => {
  app.use(morgan('[:date[clf]] :remote-addr :method :url :status :res[content-length]'));

  app.get('/', views.index);
  
  app.use('/static', express.static(`${__dirname}/../frontend/build`));
  
  app.get('/headers', views.headers);
  
  app.use('/graphql', views.graphql);
  
  app.use('/force-error', (req, res, next) => {
    lmao; // ReferenceError
  });
  
  app.use(views.notFound404);
  
  app.use(views.internalServerError500);

  return app;
};
