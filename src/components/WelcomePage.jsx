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
    <main className="welcome-animated-bg min-h-dvh max-w-full overflow-x-hidden px-4 py-4 text-gray-800 sm:px-6 sm:py-6 md:py-8 landscape-phone:h-dvh landscape-phone:overflow-hidden landscape-phone:px-4 landscape-phone:py-2">
      <SiteHeader />
      <section className="welcome-fade-in mx-auto flex w-full min-w-0 max-w-6xl items-center justify-center md:min-h-[80vh] landscape-phone:h-[calc(100dvh-3.25rem)] landscape-phone:!min-h-0">
        <div className="flex w-full min-w-0 flex-col items-center justify-center gap-6 md:flex-row md:justify-center md:gap-12 landscape-phone:h-full landscape-phone:!flex-row landscape-phone:items-center landscape-phone:justify-center landscape-phone:!gap-4">
          <motion.div
            className={`mb-2 flex min-h-0 w-full min-w-0 max-w-full flex-col items-center justify-center text-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] sm:mb-4 sm:-translate-y-8 md:-translate-y-12 landscape-phone:mb-0 landscape-phone:flex-1 landscape-phone:!translate-y-0 landscape-phone:!translate-x-0 ${
              shiftGreetings ? "md:translate-x-0" : "md:translate-x-40"
            }`}
            animate={{
              opacity: isTransitioningToAbout ? 0 : 1,
            }}
            transition={{ duration: 0.18 }}
          >
            <h1
              className={`welcome-greeting-text max-w-full text-balance text-[clamp(1.35rem,6.2vw,3.75rem)] font-light tracking-wide transition-all duration-700 ease-out md:whitespace-nowrap landscape-phone:text-[clamp(1.05rem,4.6vh,1.6rem)] landscape-phone:whitespace-nowrap ${
                showFirstGreeting
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              My name is Devyn Weir.
            </h1>
            <h1
              className={`welcome-greeting-text mt-3 max-w-full text-balance text-[clamp(1.35rem,6.2vw,3.75rem)] font-light tracking-wide transition-all duration-700 ease-out md:whitespace-nowrap sm:mt-4 landscape-phone:mt-2 landscape-phone:text-[clamp(1.05rem,4.6vh,1.6rem)] landscape-phone:whitespace-nowrap ${
                showSecondGreeting
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Welcome to my portfolio.
            </h1>

            <div
              className={`mt-6 flex w-full min-w-0 max-w-md flex-col items-stretch justify-center gap-3 transition-all duration-700 ease-out sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 landscape-phone:mt-3 landscape-phone:max-w-none landscape-phone:flex-row landscape-phone:flex-nowrap landscape-phone:gap-3 ${
                showActionButtons
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              <button
                type="button"
                onClick={handleAboutClick}
                disabled={isTransitioningToAbout}
                className="welcome-cta-gradient flex h-14 w-full items-center justify-center rounded-lg px-5 text-base font-light text-white shadow-sm transition sm:h-20 sm:w-52 sm:text-lg landscape-phone:h-9 landscape-phone:w-36 landscape-phone:px-3 landscape-phone:text-sm"
              >
                About Me
              </button>
              <Link
                to="/projects"
                className="welcome-cta-gradient flex h-14 w-full items-center justify-center rounded-lg px-5 text-base font-light text-white shadow-sm transition sm:h-20 sm:w-52 sm:text-lg landscape-phone:h-9 landscape-phone:w-36 landscape-phone:px-3 landscape-phone:text-sm"
              >
                Projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            ref={profileImageContainerRef}
            className={`profile-photo-frame max-w-full overflow-hidden transition-[opacity,transform,filter] duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] will-change-[opacity,transform,filter] md:shrink-0 landscape-phone:shrink-0 ${
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
              className="profile-image h-full w-full rounded-xl object-cover shadow-2xl ring-1 ring-black/10 transition-opacity duration-500 ease-in-out"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default WelcomePage;
