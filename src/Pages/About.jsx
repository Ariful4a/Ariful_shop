import { Link } from 'react-router';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#32327d] px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">About Page</h1>
        <p className="text-purple-200">This is a simple about page.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg shadow hover:bg-purple-100 transition"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default About;
