import React, { useState, useEffect } from "react";

const DropdownMenu = ({ onBookChange }) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      const apiKey = "d6ABOtTpsNM0Th0gDAM0sIV6vvK9vi1c";
      const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const booksData = data.results.books.slice(0, 10).map((book) => ({
          id: book.rank,
          title: book.title.toLowerCase(),
          author: book.author.toLowerCase(),
        }));

        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    //console.log("Selected book changed:", selectedBook);
    onBookChange(books[selectedBook]);
  }, [selectedBook, onBookChange, books]);

  const handleSelectionChange = (event) => {
    setSelectedBook(event.target.value);
    onBookChange(books[selectedBook]);
  };

  return (
    <div>
      <select onChange={handleSelectionChange} value={selectedBook}>
        <option key={0} value={0}>
          {" "}
          Select book to edit it's cover page.{" "}
        </option>
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.title}
          </option>
        ))}
      </select>
      {selectedBook > 0 && (
        <>
          <p>
            Selected Book:{" "}
            {books.find((book) => book.id === +selectedBook)?.title}
          </p>
          <p>
            Book's author:{" "}
            {books.find((book) => book.id === +selectedBook)?.author}
          </p>
        </>
      )}
    </div>
  );
};

export default DropdownMenu;
