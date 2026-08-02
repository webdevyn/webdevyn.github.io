import Projects from "./Projects";
import SiteHeader from "./SiteHeader";

function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen bg-gradient-to-br from-white via-[#fdf7ee] to-[#efe2cc] px-6 py-6 text-gray-800 sm:py-8">
      <SiteHeader />
      <div className="mx-auto max-w-5xl">
        <Projects />
      </div>
    </main>
  );
}

export default ProjectsPage;
