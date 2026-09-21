import SiteHeader from "./SiteHeader";

function AboutPage() {
  return (
    <main className="welcome-animated-bg min-h-dvh max-w-full overflow-x-hidden px-4 py-4 text-gray-800 sm:px-6 sm:py-6 md:py-8 landscape-phone:h-dvh landscape-phone:overflow-hidden landscape-phone:px-4 landscape-phone:py-2">
      <SiteHeader />
      <section className="mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center gap-5 md:min-h-[80vh] md:flex-row md:items-center md:justify-start md:gap-8 landscape-phone:h-[calc(100dvh-3.25rem)] landscape-phone:!min-h-0 landscape-phone:!flex-row landscape-phone:items-center landscape-phone:justify-start landscape-phone:!gap-4">
        <img
          src="/images/ProfilePicMallorca.jpeg"
          alt="Portrait of Devyn Weir"
          className="profile-photo-frame max-w-full rounded-xl object-cover ring-1 ring-black/10 landscape-phone:shrink-0"
        />
        <div className="flex min-w-0 w-full max-w-prose flex-col justify-center md:ml-0 landscape-phone:flex-1">
          <h1 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl landscape-phone:mb-2 landscape-phone:text-2xl">
            About Me
          </h1>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg landscape-phone:text-sm landscape-phone:leading-snug">
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
