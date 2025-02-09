import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema} from './graphql/schema.js'

// Create the Apollo Server
const server = new ApolloServer({ schema });

// Start the server
startStandaloneServer(server).then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});
