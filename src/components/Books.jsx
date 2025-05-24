import { useState } from 'react';
import { useEffect } from 'react';
import BookCard from './BookCard';

function Books() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/books?page=${page}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  return (
    <section className='books-section flex flex-col items-center justify-center'>
      <div>
        <h1>Books Available</h1>
        <ul className='books-list'>
          {books.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      </div>
      <div className='page-buttons flex gap-4 justify-center items-center mt-4 mb-4 p-4'>
        {page > 1 && (
          <button
            className='btn'
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            {page - 1}
          </button>
        )}
        <button className='btn'>{page}</button>
        <button
          className='btn'
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {page + 1}
        </button>
      </div>
    </section>
  );
}

export default Books;
