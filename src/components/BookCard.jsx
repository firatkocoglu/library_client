function BookCard({ book }) {
  <div className='book-card'>
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
  </div>;
}

export default BookCard;
