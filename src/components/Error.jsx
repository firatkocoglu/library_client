import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 p-4'>
      <div className='bg-white rounded-2xl shadow-lg p-8 max-w-md text-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='mx-auto h-16 w-16 text-red-500'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <h1 className='mt-4 text-2xl font-bold text-gray-800'>
          Oops! Something went wrong.
        </h1>
        <p className='mt-2 text-gray-600'>
          We&rsquo;re having trouble loading the page. Please try again later.
        </p>
        <Link
          to='/'
          className='inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition'
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
