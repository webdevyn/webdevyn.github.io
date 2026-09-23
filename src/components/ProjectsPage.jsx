import Projects from "./Projects";
import SiteHeader from "./SiteHeader";

function ProjectsPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-full bg-gradient-to-br from-white via-[#fdf7ee] to-[#efe2cc] text-gray-800">
      <SiteHeader />
      <div className="px-4 py-4 sm:px-6 sm:py-6 md:py-8 landscape-phone:px-4 landscape-phone:py-2">
        <div className="mx-auto w-full min-w-0 max-w-5xl">
          <Projects />
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
