import { getAuthorByBookId } from "../../../models/authorModel";
import { getAllBooks } from "../../../models/bookModel";

const resolvers = {
  Book: {
    id: book => book.id,
    title: book => book.title,
    author: book => getAuthorByBookId(book.id)
  },
  Query: {
    books: () => getAllBooks()
  }
};

export default resolvers;
