import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        The page you're looking for might have been removed, renamed, or
        temporarily unavailable. Please check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        className="bg-[#23BE0A] hover:bg-[#1a9c08] text-white font-semibold px-6 py-2 rounded transition duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
