import { useState } from "react";

export default function Header() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="mb-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="shrink-0">
          {!imageError ? (
            <img
              src="/profilepic.jpg"
              alt="Portrait of Devyn Weir"
              className="h-64 w-64 rounded-2xl object-cover shadow-md ring-1 ring-gray-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-64 w-64 items-center justify-center rounded-2xl bg-gray-200 text-3xl font-semibold text-gray-600 shadow-md ring-1 ring-gray-300">
              DW
            </div>
          )}
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2">Devyn Weir</h1>
          <p className="text-lg text-gray-600">
            I'm a Software Developer with a passion for building full-stack
            applications that solve real-world problems. I've developed
            responsive web and mobile applications, REST APIs, and cloud-based
            solutions using JavaScript, Python, Java, React, React Native,
            Next.js, Express, FastAPI, SQL, PostgreSQL, MongoDB, Firebase,
            Supabase, Docker, and Azure.
          </p>
          <p className="text-lg text-gray-600">
            Through academic and personal projects, I've built enterprise-style
            scheduling systems, mobile expense tracking applications, and
            full-stack web platforms while collaborating with teammates using
            Git and working directly with stakeholders to translate requirements
            into practical software solutions. I enjoy designing intuitive user
            experiences, building scalable backend systems, and writing clean,
            maintainable code.
          </p>
          <p className="text-lg text-gray-600">
            Currently, I'm particularly interested in full-stack software
            engineering, cloud technologies, and consulting roles where I can
            continue learning while helping organizations and people solve
            complex technical challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
