import { Link } from "react-router-dom";

function SiteHeader() {
  return (
    <header className="mx-auto mb-6 w-full max-w-full px-0 sm:mb-8">
      <div className="flex min-w-0 flex-col gap-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Link
          to="/welcomepage"
          className="max-w-full shrink-0 text-base font-semibold uppercase tracking-[0.12em] text-gray-800 transition hover:text-black sm:text-xl sm:tracking-[0.25em] md:text-2xl"
        >
          Devyn Weir
        </Link>

        <nav
          className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 sm:ml-8 sm:flex-1 sm:justify-end sm:gap-5 sm:pr-4 md:gap-8 md:pr-6"
          aria-label="Primary navigation"
        >
          <Link
            to="/about"
            className="whitespace-nowrap text-sm font-semibold text-gray-700 transition hover:text-black sm:text-base md:text-lg"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="whitespace-nowrap text-sm font-semibold text-gray-700 transition hover:text-black sm:text-base md:text-lg"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="whitespace-nowrap text-sm font-semibold text-gray-700 transition hover:text-black sm:text-base md:text-lg"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
