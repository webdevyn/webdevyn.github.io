import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="text-gray-600 mt-2">{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
