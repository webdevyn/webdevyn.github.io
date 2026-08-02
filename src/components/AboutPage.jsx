import Header from "./Header";
import SiteHeader from "./SiteHeader";

function AboutPage() {
  return (
    <main className="mx-auto min-h-screen bg-gradient-to-br from-white via-[#fdf7ee] to-[#efe2cc] px-6 py-6 text-gray-800 sm:py-8">
      <SiteHeader />
      <Header />
    </main>
  );
}

export default AboutPage;
