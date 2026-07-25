import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import QuoteDisplay from "./QuoteDisplay";

function HomePage() {
  return (
    <main className="w-auto mx-auto px-6 py-12 bg-gray-300 text-gray-800 min-h-screen">
      <Header />
      <Projects />
      <QuoteDisplay />
      <Contact />
    </main>
  );
}

export default HomePage;
