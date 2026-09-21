import { useEffect, useRef, useState } from "react";

const AUTO_ROTATE_MS = 3000;
const RESUME_AFTER_CLICK_MS = 3000;

function buildSlides(images, projectTitle) {
  if (images.length > 0) {
    return images.map((image, index) => {
      const src = typeof image === "string" ? image : image.src;
      const alt =
        (typeof image === "object" && image.alt) ||
        `${projectTitle} screenshot ${index + 1}`;
      return { type: "image", src, alt };
    });
  }

  return [1, 2, 3].map((n) => ({
    type: "placeholder",
    label: `Screenshot ${n}`,
    hint: "Add an image file to this project’s screenshot folder.",
  }));
}

export default function ProjectSlideshow({ images = [], projectTitle }) {
  const slides = buildSlides(images, projectTitle);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimeoutRef = useRef(null);
  const slideCount = slides.length;
  const current = slides[index];

  useEffect(() => {
    setIndex(0);
  }, [projectTitle]);

  useEffect(() => {
    if (paused || slideCount < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % slideCount);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(intervalId);
  }, [paused, slideCount]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const goTo = (nextIndex) => {
    setIndex((nextIndex + slideCount) % slideCount);
    setPaused(true);
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      setPaused(false);
    }, RESUME_AFTER_CLICK_MS);
  };

  const showPrevious = () => goTo(index - 1);
  const showNext = () => goTo(index + 1);

  return (
    <div
      className="project-slideshow mt-4 w-full min-w-0 landscape-phone:mt-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-md bg-stone-100 ring-1 ring-black/10">
        <div className="relative flex h-[min(24rem,58vh)] w-full items-center justify-center landscape-phone:h-[32vh]">
          {current.type === "image" ? (
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div
              className="flex h-full w-full flex-col items-center justify-center px-4 text-center"
              aria-label={`${projectTitle} ${current.label} placeholder`}
            >
              <p className="text-sm font-semibold text-gray-700 sm:text-base">
                {current.label}
              </p>
              <p className="mt-1 max-w-sm text-xs text-gray-500 sm:text-sm">
                {current.hint}
              </p>
            </div>
          )}
        </div>

        {slideCount > 1 ? (
          <>
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-black text-sm text-white shadow-sm transition hover:bg-gray-900 landscape-phone:h-7 landscape-phone:w-7"
              aria-label={`Previous ${projectTitle} screenshot`}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-black text-sm text-white shadow-sm transition hover:bg-gray-900 landscape-phone:h-7 landscape-phone:w-7"
              aria-label={`Next ${projectTitle} screenshot`}
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {slideCount > 1 ? (
        <div
          className="mt-2 flex items-center justify-center gap-2 landscape-phone:mt-1"
          role="tablist"
          aria-label={`${projectTitle} screenshots`}
        >
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src || slide.label}
              type="button"
              role="tab"
              aria-selected={slideIndex === index}
              aria-label={`Show screenshot ${slideIndex + 1}`}
              onClick={() => goTo(slideIndex)}
              className={`h-2 w-2 rounded-full transition ${
                slideIndex === index ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
