import { Link } from "react-router-dom";

function SiteHeader() {
  return (
    <header className="mx-auto mb-8 w-full  px-0 sm:px-0">
      <div className="flex items-center justify-between px-0 py-2">
        <Link
          to="/welcomepage"
          className="text-xl font-semibold uppercase tracking-[0.25em] text-gray-800 transition hover:text-black sm:text-2xl"
        >
          Devyn Weir
        </Link>

        <nav
          className="ml-8 flex flex-1 items-center justify-end gap-5 pr-4 sm:gap-8 sm:pr-6"
          aria-label="Primary navigation"
        >
          <Link
            to="/about"
            className="text-base font-semibold text-gray-700 transition hover:text-black sm:text-lg"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="text-base font-semibold text-gray-700 transition hover:text-black sm:text-lg"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-base font-semibold text-gray-700 transition hover:text-black sm:text-lg"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
