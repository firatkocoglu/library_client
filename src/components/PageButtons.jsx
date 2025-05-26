const PageButtons = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='page-buttons flex gap-5 justify-center items-center mt-4 mb-4 p-4'>
      {currentPage - 1 > 1 && (
        <>
          <button
            className='btn'
            onClick={() => {
              onPageChange(1);
            }}
          >
            1
          </button>
          <span className='text-gray-500'>...</span>
        </>
      )}
      {currentPage > 1 && (
        <button
          className='btn'
          onClick={() => {
            if (currentPage > 1) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          {currentPage - 1}
        </button>
      )}
      <button className='btn font-semibold'>{currentPage}</button>
      {currentPage < totalPages && (
        <button
          className='btn'
          onClick={() => {
            onPageChange(currentPage + 1);
          }}
        >
          {currentPage + 1}
        </button>
      )}
      {currentPage + 2 <= totalPages && (
        <>
          <span className='text-gray-500'>...</span>
          <button
            className='btn'
            onClick={() => {
              onPageChange(totalPages);
            }}
          >
            {totalPages}
          </button>
        </>
      )}
    </div>
  );
};

export default PageButtons;
