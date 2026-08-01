import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <main className="welcome-animated-bg mx-auto min-h-screen px-6 py-12 text-gray-800">
      <section className="welcome-fade-in mx-auto flex max-w-4xl min-h-[80vh] flex-col items-center justify-center text-center">
        <h1 className="mb-5 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
          Welcome
        </h1>

        <nav className="home-nav" aria-label="Primary navigation">
          <Link to="/about" className="home-nav-link">
            About Me
          </Link>
          <Link to="/projects" className="home-nav-link">
            Projects
          </Link>
        </nav>
      </section>
    </main>
  );
}

export default WelcomePage;
