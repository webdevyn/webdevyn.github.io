import SiteHeader from "./SiteHeader";

function AboutPage() {
  return (
    <main className="welcome-animated-bg min-h-screen px-6 py-6 text-gray-800 sm:py-8">
      <SiteHeader />
      <section className="-ml-4 flex w-full min-h-[80vh] items-center justify-start">
        <img
          src="/images/ProfilePicMallorca.jpeg"
          alt="Portrait of Devyn Weir"
          className="h-[693px] w-[453px] rounded-xl object-cover ring-1 ring-black/10"
        />
        <div className="ml-8 flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-bold">About Me</h1>
          <p className="text-lg text-gray-600">
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
