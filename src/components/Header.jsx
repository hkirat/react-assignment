const Header = () => {
  return (
    <header className="p-4 bg-gray-100 text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <a rel="noopener noreferrer" href="/" className="flex items-center p-2">
          <h2 className="text-violet-600 font-extrabold text-xl	">
            Leetcode Clone 🌟
          </h2>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="/problems/all"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Problems List
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="/problem"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Problem
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <a className="self-center px-8 py-3 rounded" href="/login">
            Sign in
          </a>
          <a
            href="/signup"
            className="self-center px-8 py-3 font-semibold rounded bg-indigo-600 text-gray-50"
          >
            Sign up
          </a>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
