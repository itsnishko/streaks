import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";
import { recordResolvers } from "./resolvers/record.resolver.js";  // Ensure it has `.js`

// Load `.graphql` files from `dist/graphql/schema`
const typeDefs = loadFilesSync(path.join(__dirname, "./schema/**/*.graphql"), {
  extensions: ["graphql"]
});

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: recordResolvers, // Ensure it has Query and Mutation
});
