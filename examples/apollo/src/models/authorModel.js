// Mocks a relational database
const authors = [
  {
    id: 1,
    bookIds: [1],
    name: "J.K. Rowling"
  },
  {
    id: 2,
    bookIds: [2],
    name: "Michael Crichton"
  }
];

export function getAllAuthors() {
  return authors;
}

export function getAuthorByBookId(bookId = 0) {
  if (bookId > 0) {
    return authors.filter(author => author.bookIds.contains(bookId));
  }

  throw new Error("Missing bookId argument.");
}
