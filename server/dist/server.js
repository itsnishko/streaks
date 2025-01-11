import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js'; // Import the GraphQL schema
const app = express(); // Create an instance of Express
// Add the GraphQL middleware
app.use('/graphql', graphqlHTTP({
    schema: schema, // GraphQL schema
    graphiql: true // Enables the GraphiQL web interface for testing queries
}));
// Export the app instance so it can be used in `index.ts`
export default app;
