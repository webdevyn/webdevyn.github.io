import Projects from "./Projects";
import SiteHeader from "./SiteHeader";

function ProjectsPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-full overflow-x-hidden bg-gradient-to-br from-white via-[#fdf7ee] to-[#efe2cc] px-4 py-4 text-gray-800 sm:px-6 sm:py-6 md:py-8 landscape-phone:h-dvh landscape-phone:overflow-hidden landscape-phone:px-4 landscape-phone:py-2">
      <SiteHeader />
      <div className="mx-auto w-full min-w-0 max-w-5xl landscape-phone:h-[calc(100dvh-3.25rem)] landscape-phone:overflow-y-auto">
        <Projects />
      </div>
    </main>
  );
}

export default ProjectsPage;
