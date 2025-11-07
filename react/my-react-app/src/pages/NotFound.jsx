import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <Link
          to="/"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
