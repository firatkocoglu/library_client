function BookCard({ book }) {
  return (
    <div className='book-card border border-solid rounded-lg p-4 m-4 shadow-lg'>
      <img src={book.image_url} alt={book.title} srcSet='' />
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Published: {book.year}</p>
      <p>Genre: {book.genre}</p>
      {book.available > 0 ? (
        <button className='btn'>Loan</button>
      ) : (
        <button className='btn' disabled>
          Not Available
        </button>
      )}
    </div>
  );
}

export default BookCard;
