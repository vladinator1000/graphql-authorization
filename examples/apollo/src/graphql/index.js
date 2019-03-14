import { makeExecutableSchema, mergeSchemas } from "graphql-tools";

import bookTypes from "./books/bookTypes.graphql";
import bookResolvers from "./books/bookResolvers";

const types = [bookTypes];
const resolvers = [bookResolvers];

const schemas = types.map((typeDefs, index) =>
  makeExecutableSchema({
    typeDefs,
    resolvers: resolvers[index]
  })
);

export default mergeSchemas({ schemas });
