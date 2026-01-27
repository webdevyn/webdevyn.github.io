import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 bg-gray-50 text-gray-800 min-h-screen">
      <Header />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
