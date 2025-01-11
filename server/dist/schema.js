import { buildSchema } from 'graphql';
// Define the schema
export const schema = buildSchema(`
  type Query {
    hello: String
    greet(name: String!): String
  }
`);
// Resolvers
export const resolvers = {
    hello: () => {
        return 'Hello, world!';
    },
    greet: ({ name }) => {
        return `Hello, ${name}!`;
    }
};
