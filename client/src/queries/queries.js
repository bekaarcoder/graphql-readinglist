import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

export const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export const ADD_AUTHOR = gql`
  mutation AddAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      id
    }
  }
`;

export const GET_BOOK = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
