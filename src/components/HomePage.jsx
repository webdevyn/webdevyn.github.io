import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import QuoteDisplay from "./QuoteDisplay";

function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    let timeoutId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = window.setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(node);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <main className="mx-auto min-h-screen bg-gradient-to-br from-white via-[#fdf7ee] to-[#efe2cc] px-6 py-12 text-gray-800">
      <FadeInSection delay={100}>
        <Header />
      </FadeInSection>

      <FadeInSection delay={200}>
        <Projects />
      </FadeInSection>

      <FadeInSection delay={400}>
        <Contact />
      </FadeInSection>

      <FadeInSection delay={500}>
        <QuoteDisplay />
      </FadeInSection>
    </main>
  );
}

export default HomePage;
