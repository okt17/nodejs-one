const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.sendFile('templates/index.html', { root: __dirname });
});

app.use('/static', express.static(`${__dirname}/frontend/build`));

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => 'Hello World',
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), () => {
  console.log(`Server started on localhost:${app.get('port')}...`);
});
