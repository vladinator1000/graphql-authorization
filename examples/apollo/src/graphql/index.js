import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";

const types = fileLoader(path.join(__dirname, "./modules/**/*.gql"), {
  recursive: true
});

const resolvers = fileLoader(
  path.join(__dirname, "./modules/**/*.resolvers.*"),
  {
    recursive: true
  }
);

export default makeExecutableSchema({
  typeDefs: mergeTypes(types),
  resolvers: mergeResolvers(resolvers)
});
