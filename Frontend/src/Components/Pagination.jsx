const Pagination = () => {
  return (
    <nav
      aria-label="Page Navigation"
      className="mx-auto my-10 flex max-w-xs justify-between space-x-2 rounded-md bg-white py-2"
    >
      <a
        href="#"
        className="flex items-center space-x-1 font-medium hover:text-blue-600"
        aria-label="First Page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="#"
        className="flex items-center space-x-1 font-medium hover:text-blue-600"
        aria-label="Previous Page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <ul className="flex items-center">
        <li>
          <a
            href="#"
            className="px-2 text-lg font-medium text-gray-400 sm:px-3 hover:text-blue-600"
            aria-label="Page 8"
          >
            8
          </a>
        </li>
        <li>
          <a
            href="#"
            className="rounded-md px-2 text-2xl font-medium text-blue-600 sm:px-3"
            aria-label="Current Page"
          >
            9
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-2 text-lg font-medium text-gray-400 sm:px-3 hover:text-blue-600"
            aria-label="Page 10"
          >
            10
          </a>
        </li>
      </ul>
      <a
        href="#"
        className="flex items-center space-x-1 font-medium hover:text-blue-600"
        aria-label="Next Page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="#"
        className="flex items-center space-x-1 font-medium hover:text-blue-600"
        aria-label="Last Page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </nav>
  );
};

export default Pagination;
