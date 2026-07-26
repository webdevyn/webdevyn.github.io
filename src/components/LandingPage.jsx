import { Link } from "react-router-dom";

function LandingPage() {
  const title = "Hello World";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-900">
      <h1
        className="text-4xl font-normal mb-6 landing-typed-title"
        aria-label={title}
      >
        {title.split("").map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="typed-letter"
            style={{ animationDelay: `${index * 0.09}s` }}
            aria-hidden="true"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <Link to="/main" className="text-blue-600 underline hover:text-blue-800">
        click here
      </Link>
    </div>
  );
}

export default LandingPage;
