import { Link, useLocation, useNavigate } from "react-router-dom";
import { isDesktopViewport } from "../utils/viewport";

const ABOUT_SECTION_ID = "about-me";

function scrollToAboutSection() {
  document
    .getElementById(ABOUT_SECTION_ID)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SiteHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = (event) => {
    if (isDesktopViewport()) {
      return;
    }

    event.preventDefault();

    if (location.pathname === "/welcomepage") {
      scrollToAboutSection();
      return;
    }

    navigate("/welcomepage#about-me");
  };

  return (
    <header className="site-header w-full max-w-full px-4 py-2 sm:px-6 landscape-phone:px-4 landscape-phone:py-1">
      <div className="flex min-w-0 flex-col gap-3 py-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4 landscape-phone:flex-row landscape-phone:items-center landscape-phone:gap-3 landscape-phone:py-0">
        <Link
          to="/welcomepage"
          className="max-w-full shrink-0 text-base font-semibold uppercase tracking-[0.12em] text-gray-800 transition hover:text-black sm:text-xl sm:tracking-[0.25em] md:text-2xl landscape-phone:text-sm landscape-phone:tracking-[0.14em]"
        >
          Devyn Weir
        </Link>

        <nav
          className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 sm:ml-8 sm:flex-1 sm:justify-end sm:gap-5 sm:pr-4 md:gap-8 md:pr-6 landscape-phone:ml-4 landscape-phone:flex-nowrap landscape-phone:gap-4 landscape-phone:pr-0"
          aria-label="Primary navigation"
        >
          <Link
            to="/about"
            onClick={handleAboutClick}
            className="whitespace-nowrap text-sm font-semibold text-gray-700 transition hover:text-black sm:text-base md:text-lg landscape-phone:text-sm"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="whitespace-nowrap text-sm font-semibold text-gray-700 transition hover:text-black sm:text-base md:text-lg landscape-phone:text-sm"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="whitespace-nowrap text-sm font-semibold text-gray-700 transition hover:text-black sm:text-base md:text-lg landscape-phone:text-sm"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
