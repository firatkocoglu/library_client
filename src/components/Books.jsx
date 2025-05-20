import { useState } from 'react';
import { useEffect } from 'react';
import BookCard from './BookCard';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <section>
      <div>
        <h1>Books Available</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Books;
