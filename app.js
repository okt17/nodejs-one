const express = require('express');
const applyRouting = require('./routing');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'templates'));

app.set('port', process.env.PORT || 3000);

applyRouting(app);

app.listen(app.get('port'), () => {
  console.log(`Server started on localhost:${app.get('port')}...`);
});
