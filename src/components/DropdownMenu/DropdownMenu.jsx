import { useState } from "react";

const tempBookList = [
  { id: 1, title: "The Lord of the Rings", author: "J. R. R. Tolkien" },
  { id: 2, title: "The Harry Potter Series", author: "J. K. Rowling" },
  { id: 3, title: "Dune", author: "Frank Herbert" },
  { id: 4, title: "The Chronicles of Narnia", author: "C. S. Lewis" },
  { id: 5, title: "The Witcher", author: "Andrzej Sapkowski" },
];

const DropdownMenu = () => {
  const [selectedBook, setSelectedBook] = useState(tempBookList[0].id);
  return (
    <div>
      <select onChange={(e) => setSelectedBook(e.target.value)}>
        {tempBookList.map((book) => (
          <option key={book.id} value={book.id}>
            {book.title}
          </option>
        ))}
      </select>
      <p>Selected Book: {tempBookList[selectedBook - 1]?.title}</p>
      <p>Book's author: {tempBookList[selectedBook - 1]?.author}</p>
    </div>
  );
};

export default DropdownMenu;
