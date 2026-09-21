import SiteHeader from "./SiteHeader";

function AboutPage() {
  return (
    <main className="welcome-animated-bg min-h-screen max-w-full overflow-x-hidden px-4 py-4 text-gray-800 sm:px-6 sm:py-6 md:py-8">
      <SiteHeader />
      <section className="mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center gap-6 md:min-h-[80vh] md:flex-row md:items-center md:justify-start md:gap-8">
        <img
          src="/images/ProfilePicMallorca.jpeg"
          alt="Portrait of Devyn Weir"
          className="profile-photo-frame max-w-full rounded-xl object-cover ring-1 ring-black/10"
        />
        <div className="flex min-w-0 w-full max-w-prose flex-col justify-center md:ml-0">
          <h1 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl">
            About Me
          </h1>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            I'm a Full Stack Developer who enjoys building software that solves
            real problems. I love creating intuitive applications, learning new
            technologies, and continuously improving my craft.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
