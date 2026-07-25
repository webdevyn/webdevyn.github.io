import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-900">
      <h1 className="text-4xl font-normal mb-6">Hello World</h1>
      <Link to="/home" className="text-blue-600 underline hover:text-blue-800">
        click here
      </Link>
    </div>
  );
}

export default LandingPage;
