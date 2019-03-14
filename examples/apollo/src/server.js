import { ApolloServer, gql } from "apollo-server";

import schema from "./graphql";

const apolloServer = new ApolloServer({ schema });

apolloServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
