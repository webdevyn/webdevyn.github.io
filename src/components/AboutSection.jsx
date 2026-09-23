function AboutSection({ id = "about-me" }) {
  return (
    <section
      id={id}
      className="mx-auto flex w-full min-w-0 max-w-6xl scroll-mt-24 flex-col items-center gap-5 md:min-h-[80vh] md:flex-row md:items-center md:justify-start md:gap-8 landscape-phone:!min-h-0 landscape-phone:!flex-row landscape-phone:items-center landscape-phone:justify-start landscape-phone:!gap-4"
    >
      <img
        src="/images/ProfilePicMallorca.jpeg"
        alt="Portrait of Devyn Weir"
        className="profile-photo-frame hidden max-w-full rounded-xl object-cover ring-1 ring-black/10 md:block landscape-phone:shrink-0"
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
  );
}

export default AboutSection;
