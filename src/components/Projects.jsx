import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="mb-12 w-full min-w-0">
      <h2 className="mb-4 text-2xl font-semibold">Projects</h2>

      <div className="w-full space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-full rounded-md bg-white p-4 shadow sm:p-6"
          >
            <h3 className="text-xl font-semibold break-words">
              {project.title}
            </h3>

            <p className="mt-2 text-gray-600 break-words">
              {project.description}
            </p>

            <a
              href={project.streamlit}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block break-words text-black hover:underline"
            >
              View on Streamlit →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
