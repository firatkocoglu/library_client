import { useLoaderData, Link, useNavigation } from 'react-router-dom';
import BookCard from './BookCard';
import Loading from './Loading';
import { useSearchParams } from 'react-router-dom';

function Books() {
  const { books, page, totalPages } = useLoaderData();
  console.log(books);

  const navigation = useNavigation();
  const loading = navigation.state === 'loading';

  const [searchParams] = useSearchParams();
  const genre = searchParams.get('genre') || '';

  return (
    <section className='books-section flex items-center justify-center'>
      <div>
        {loading ? (
          <div className='loading-container flex items-center justify-center h-screen'>
            <Loading />
          </div>
        ) : (
          <>
            <ul className='books-list flex flex-wrap justify-center gap-4'>
              {books.map((book) => (
                <li key={book.id}>
                  <BookCard book={book} />
                </li>
              ))}
            </ul>
            <div className='flex space-x-2 m-4 justify-center items-center'>
              {page - 1 > 1 && (
                <>
                  <Link
                    to={`?page=1` + (genre && `&genre=${genre}`)}
                    className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'
                  >
                    1
                  </Link>
                  <span className='px-3 py-1'>...</span>
                </>
              )}
              {page > 1 && (
                <Link
                  to={`?page=${page - 1}` + (genre && `&genre=${genre}`)}
                  className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'
                >
                  {page - 1}
                </Link>
              )}
              <Link
                to={`?page=${page}` + (genre && `&genre=${genre}`)}
                className='px-3 py-1 bg-gray-400 rounded hover:bg-gray-300'
              >
                {page}
              </Link>
              {page < totalPages && (
                <Link
                  to={`?page=${page + 1}` + (genre && `&genre=${genre}`)}
                  className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'
                >
                  {page + 1}
                </Link>
              )}
              {page + 1 < totalPages && (
                <>
                  <span className='px-3 py-1'>...</span>
                  <Link
                    to={`?page=${totalPages}` + (genre && `&genre=${genre}`)}
                    className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'
                  >
                    {totalPages}
                  </Link>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Books;
