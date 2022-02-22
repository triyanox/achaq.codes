import CertificationCard from "./CertificationCard";
const Certifications = () => {
  return (
    <section className="container p-12 flex flex-col justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2  justify-between text-2xl gap-16">
        <div className="w-full text-black dark:text-white">
          <h1 className="text-2xl mb-4 mt-4">Certifications</h1>
          <h2 className="text-lg">
            I'm always exited to start and build new projects, and during this
            process I've managed to collect these certifications and experiences
            !
          </h2>
        </div>
        <div className="grid grid-cols-1  gap-2 justify-center items-center w-full mt-8">
          <CertificationCard
            title="Responsive Web Design"
            link="https://www.freecodecamp.org/certification/achaq/responsive-web-design"
          />
          <CertificationCard
            title="JavaScript Algorithms and Data Structures"
            link="https://www.freecodecamp.org/certification/achaq/javascript-algorithms-and-data-structures"
          />
          <CertificationCard
            title="Front End Development Libraries"
            link="https://www.freecodecamp.org/certification/achaq/front-end-development-libraries"
          />
          <CertificationCard
            title="Scientific Computing with Python"
            link="https://www.freecodecamp.org/certification/achaq/scientific-computing-with-python-v7"
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
