import { projects } from "../data/projects";
import ProjectSlideshow from "./ProjectSlideshow";

export default function Projects() {
  return (
    <section className="mb-12 w-full min-w-0 landscape-phone:mb-0">
      <h2 className="mb-4 text-2xl font-semibold landscape-phone:mb-2 landscape-phone:text-xl">
        Projects
      </h2>

      <div className="w-full space-y-6 landscape-phone:space-y-3">
        {projects.map((project) => (
          <div
            key={project.id || project.title}
            className="w-full max-w-full rounded-md bg-white p-4 shadow sm:p-6 landscape-phone:p-3"
          >
            <h3 className="text-xl font-semibold break-words landscape-phone:text-lg">
              {project.title}
            </h3>

            <p className="mt-2 text-gray-600 break-words landscape-phone:mt-1 landscape-phone:text-sm">
              {project.description}
            </p>

            <ProjectSlideshow
              images={project.images || []}
              projectTitle={project.title}
            />

            <a
              href={project.streamlit}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block break-words text-black hover:underline landscape-phone:mt-2"
            >
              View on Streamlit →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
