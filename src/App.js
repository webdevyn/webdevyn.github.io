import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import QuoteDisplay from "./components/QuoteDisplay";

function App() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 bg-gray-50 text-gray-800 min-h-screen">
      <Header />
      <Projects />
      <QuoteDisplay/>
      <Contact />
    </main>
  );
}

export default App;
