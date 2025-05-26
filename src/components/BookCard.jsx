function BookCard({ book }) {
  return (
    <div className='w-64 h-128 book-card border border-solid rounded-lg p-4 m-4 shadow-lg flex flex-col items-center justify-center'>
      <img src={book.image_url} alt={book.title} className='h-64 w-48 m-4' />
      <h2 className='font-semibold text-center italic'>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Published: {book.year}</p>
      <p>Genre: {book.genre}</p>
      {book.available > 0 ? (
        <button
          type='button'
          className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-large rounded-xl text-lg px-5 py-1 text-center m-4'
        >
          Loan
        </button>
      ) : (
        <button className='button' disabled>
          Not Available
        </button>
      )}
    </div>
  );
}

export default BookCard;
