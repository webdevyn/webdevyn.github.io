import AboutSection from "./AboutSection";

function AboutPage() {
  return (
    <main className="welcome-animated-bg has-fixed-header min-h-dvh max-w-full text-gray-800 landscape-phone:min-h-dvh">
      <div className="px-4 py-4 sm:px-6 sm:py-6 md:py-8 landscape-phone:px-4 landscape-phone:py-2">
        <AboutSection />
      </div>
    </main>
  );
}

export default AboutPage;
