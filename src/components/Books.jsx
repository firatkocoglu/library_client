import { useState } from 'react';
import { useEffect } from 'react';
import BookCard from './BookCard';
import PageButtons from './PageButtons';
import Navbar from './Navbar';
import useStore from '../store';

function Books() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const user = useStore((state) => state.user);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/books?page=${page}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data.books);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className='books-section flex flex-col items-center justify-center'>
      <Navbar />
      <div>
        <h1 className='text-3xl font-bold text-center my-8'>
          {user ? `Welcome, ${user.name}!` : 'Welcome to the Book Store'}
        </h1>
        <ul className='books-list flex flex-wrap justify-center gap-4'>
          {books.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      </div>
      <PageButtons
        currentPage={page}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
    </section>
  );
}

export default Books;
