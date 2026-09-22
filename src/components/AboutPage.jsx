import SiteHeader from "./SiteHeader";
import AboutSection from "./AboutSection";

function AboutPage() {
  return (
    <main className="welcome-animated-bg min-h-dvh max-w-full overflow-x-hidden px-4 py-4 text-gray-800 sm:px-6 sm:py-6 md:py-8 landscape-phone:h-dvh landscape-phone:overflow-hidden landscape-phone:px-4 landscape-phone:py-2">
      <SiteHeader />
      <AboutSection />
    </main>
  );
}

export default AboutPage;
