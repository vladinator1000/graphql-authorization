import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";

const typesPath = path.join(__dirname, "./modules/**/*.gql");
const types = fileLoader(typesPath, { recursive: true });

const resolversPath = path.join(__dirname, "./modules/**/*.resolvers.*");
const resolvers = fileLoader(resolversPath, { recursive: true });

export default makeExecutableSchema({
  typeDefs: mergeTypes(types),
  resolvers: mergeResolvers(resolvers)
});
