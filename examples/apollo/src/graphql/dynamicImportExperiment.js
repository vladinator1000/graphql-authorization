import path from "path";
import { readdirSync, lstatSync } from "fs";
import { makeExecutableSchema, mergeSchemas } from "graphql-tools";

const graphqlModulesPath = path.join(__dirname, "./modules");

function isGraphqlModuleDirectory(file = "") {
  return lstatSync(path.join(graphqlModulesPath, file)).isDirectory();
}

const graphqlModuleFolders = readdirSync(graphqlModulesPath).filter(
  isGraphqlModuleDirectory
);

const schemas = [];
graphqlModuleFolders.forEach(folder => {
  const folderPath = path.join(graphqlModulesPath, folder);
  const files = readdirSync(folderPath);

  const graphqlRegExp = new RegExp(/\.(gql|graphql)/g);
  const resolverRegExp = new RegExp(/Resolvers/);

  let typeDefs, resolvers;
  files.forEach(file => {
    if (graphqlRegExp.test(file)) {
      typeDefs = import(path.join(folderPath, file));
    }
    if (resolverRegExp.test(file)) {
      resolvers = import(path.join(folderPath, file));
    }
  });

  schemas.append(makeExecutableSchema({ typeDefs, resolvers }));
});

export default mergeSchemas({ schemas });
