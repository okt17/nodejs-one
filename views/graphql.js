const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => 'Hello World',
};

module.exports = graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
});
