import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-4">
      <div className="text-center max-w-xl">
        {/* Icon */}
        <div className="flex justify-center mb-6 animate-bounce">
          <FaExclamationTriangle className="text-6xl text-warning" />
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-base-content">
          Page Not Found
        </h2>

        <p className="mt-3 text-base-content/70">
          Oops! The page you are looking for doesn’t exist or may have been moved.
        </p>

        {/* Action */}
        <div className="mt-8">
          <Link
            to="/"
            className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <FaHome />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
