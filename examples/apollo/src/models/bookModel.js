// Mocks a relational database
const books = [
  {
    id: 1,
    authorId: 1,
    title: "Harry Potter and the Chamber of Secrets"
  },
  {
    id: 2,
    authorId: 2,
    title: "Jurassic Park"
  }
];

export function getAllBooks() {
  return books;
}

export function getBooksByAuthorId(authorId = 0) {
  if (authorId > 0) {
    return books.filter(book => book.authorId === authorId);
  }

  throw new Error("Missing authorId argument.");
}
