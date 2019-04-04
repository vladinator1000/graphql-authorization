import { getAllAuthors } from "../../../models/authorModel";
import { getBooksByAuthorId } from "../../../models/bookModel";

const resolvers = {
  Author: {
    id: author => author.id,
    name: author => author.name,
    books: author => getBooksByAuthorId(author.id)
  },
  Query: {
    authors: () => getAllAuthors()
  }
};

export default resolvers;
