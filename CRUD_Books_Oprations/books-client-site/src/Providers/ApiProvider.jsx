/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();
const ApiProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, [books]);

  const bookData = {
    books,
    setBooks,
  };

  return (
    <BookContext.Provider value={bookData}>{children}</BookContext.Provider>
  );
};

export default ApiProvider;
