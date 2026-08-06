import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SiteHeader from "./SiteHeader";

function WelcomePage() {
  const ABOUT_IMAGE_TARGET_MARGIN_LEFT_PX = 8;
  const ABOUT_IMAGE_SLIDE_DURATION_SECONDS = 0.85;
  const ABOUT_IMAGE_SETTLE_BUFFER_MS = 1100;
  const ABOUT_NAV_DELAY_MS =
    Math.round(ABOUT_IMAGE_SLIDE_DURATION_SECONDS * 1000) +
    ABOUT_IMAGE_SETTLE_BUFFER_MS;

  const navigate = useNavigate();
  const aboutNavigationTimeoutRef = useRef(null);
  const profileImageContainerRef = useRef(null);
  const [showFirstGreeting, setShowFirstGreeting] = useState(false);
  const [showSecondGreeting, setShowSecondGreeting] = useState(false);
  const [shiftGreetings, setShiftGreetings] = useState(false);
  const [showProfileImage, setShowProfileImage] = useState(false);
  const [showActionButtons, setShowActionButtons] = useState(false);
  const [isTransitioningToAbout, setIsTransitioningToAbout] = useState(false);
  const [aboutImageSlideX, setAboutImageSlideX] = useState(-420);

  const handleAboutClick = (event) => {
    event.preventDefault();

    if (isTransitioningToAbout) {
      return;
    }

    const imageRect = profileImageContainerRef.current?.getBoundingClientRect();

    if (imageRect) {
      const targetLeft = ABOUT_IMAGE_TARGET_MARGIN_LEFT_PX;
      const deltaX = targetLeft - imageRect.left;
      setAboutImageSlideX(deltaX);
    }

    setIsTransitioningToAbout(true);
    aboutNavigationTimeoutRef.current = window.setTimeout(() => {
      navigate("/about");
    }, ABOUT_NAV_DELAY_MS);
  };

  useEffect(() => {
    const firstTimer = window.setTimeout(() => setShowFirstGreeting(true), 300);
    const secondTimer = window.setTimeout(
      () => setShowSecondGreeting(true),
      1100,
    );
    const thirdTimer = window.setTimeout(() => setShiftGreetings(true), 1900);
    const fourthTimer = window.setTimeout(
      () => setShowProfileImage(true),
      2400,
    );
    const fifthTimer = window.setTimeout(
      () => setShowActionButtons(true),
      3700,
    );

    return () => {
      window.clearTimeout(firstTimer);
      window.clearTimeout(secondTimer);
      window.clearTimeout(thirdTimer);
      window.clearTimeout(fourthTimer);
      window.clearTimeout(fifthTimer);
      if (aboutNavigationTimeoutRef.current) {
        window.clearTimeout(aboutNavigationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <main className="welcome-animated-bg min-h-screen px-6 py-6 text-gray-800 sm:py-8">
      <SiteHeader />
      <section className="welcome-fade-in mx-auto flex w-full max-w-6xl min-h-[80vh] items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:justify-center md:gap-12">
          <motion.div
            className={`mb-4 flex min-h-[6rem] -translate-y-8 flex-col items-center justify-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] sm:-translate-y-12 ${
              shiftGreetings ? "md:translate-x-0" : "md:translate-x-40"
            }`}
            animate={{
              opacity: isTransitioningToAbout ? 0 : 1,
            }}
            transition={{ duration: 0.18 }}
          >
            <h1
              className={`welcome-greeting-text whitespace-nowrap text-[clamp(1.75rem,4.4vw,3.75rem)] font-light tracking-wide transition-all duration-700 ease-out ${
                showFirstGreeting
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              My name is Devyn Weir.
            </h1>
            <h1
              className={`welcome-greeting-text mt-4 whitespace-nowrap text-[clamp(1.75rem,4.4vw,3.75rem)] font-light tracking-wide transition-all duration-700 ease-out ${
                showSecondGreeting
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Welcome to my portfolio.
            </h1>

            <div
              className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 ease-out ${
                showActionButtons
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              <button
                type="button"
                onClick={handleAboutClick}
                disabled={isTransitioningToAbout}
                className="welcome-cta-gradient flex h-20 w-52 items-center justify-center rounded-lg px-5 text-lg font-light text-white shadow-sm transition"
              >
                About Me
              </button>
              <Link
                to="/projects"
                className="welcome-cta-gradient flex h-20 w-52 items-center justify-center rounded-lg px-5 text-lg font-light text-white shadow-sm transition"
              >
                Projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            ref={profileImageContainerRef}
            className={`h-[693px] w-[453px] overflow-hidden transition-[opacity,transform,filter] duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] will-change-[opacity,transform,filter] md:shrink-0 ${
              showProfileImage
                ? "scale-100 opacity-100 blur-0"
                : "scale-[0.985] opacity-0 blur-[2px]"
            }`}
            animate={{
              x: isTransitioningToAbout ? aboutImageSlideX : 0,
            }}
            transition={{
              duration: ABOUT_IMAGE_SLIDE_DURATION_SECONDS,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src="/images/ProfilePicMallorca.jpeg"
              alt="Devyn Weir in Mallorca"
              className="h-full w-full rounded-xl object-cover shadow-2xl ring-1 ring-black/10 profile-image transition-opacity duration-500 ease-in-out"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default WelcomePage;
