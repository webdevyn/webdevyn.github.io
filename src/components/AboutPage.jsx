import Header from "./Header";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <main className="mx-auto min-h-screen bg-gradient-to-br from-white via-[#fdf7ee] to-[#efe2cc] px-6 py-12 text-gray-800">
      <div className="mx-auto mb-8 max-w-5xl text-left">
        <Link
          to="/welcomepage"
          className="text-sm font-medium text-gray-700 underline hover:text-black"
        >
          Back to Welcome
        </Link>
      </div>
      <Header />
    </main>
  );
}

export default AboutPage;
