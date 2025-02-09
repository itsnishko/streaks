import path from "path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";
import { activityResolver } from "./resolvers/activity.resolver.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = loadFilesSync(path.join(__dirname, "./schema/**/*.graphql"), {
  extensions: ["graphql"]
});

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: activityResolver,
});
