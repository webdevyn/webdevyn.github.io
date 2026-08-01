import { Link } from "react-router-dom";

function LandingPage() {
  const title = "Hello World";

  return (
    <div className="landing-page-root min-h-screen bg-white text-gray-900">
      <h1
        className="landing-title-wrap text-4xl font-normal landing-typed-title"
        aria-label={title}
      >
        {title}
      </h1>

      <Link
        to="/welcomepage"
        className="landing-center-link text-blue-600 underline hover:text-blue-800"
      >
        click here
      </Link>
    </div>
  );
}

export default LandingPage;
