import CertificationCard from "./CertificationCard";
const Certification = () => {
  return (
    <section className="container px-12 lg:px-24 flex flex-col justify-center  mt-16">
      <div className="relative flex justify-start items-start flex-col flex-1  ">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-2 bg-gradient-to-r from-[#007CF0] to-[#00DFD8] top-0 text-transparent bg-clip-text">
          Certifications and Experiences{" "}
        </h1>
        <h3 className="text-gray-600 dark:text-gray-400 mb-2">
          Those are all my certifications and work experinces at the moment:
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-1 lg:gap-2 justify-center items-center w-full mt-8">
        <CertificationCard
          title="Responsive Web Design"
          link="https://www.freecodecamp.org/certification/achaq/responsive-web-design"
          source="FreeCodeCamp 2022"
        />
        <CertificationCard
          title="JavaScript Algorithms and Data Structures"
          link="https://www.freecodecamp.org/certification/achaq/javascript-algorithms-and-data-structures"
          source="FreeCodeCamp 2021"
        />
        <CertificationCard
          title="Front End Development Libraries"
          link="https://www.freecodecamp.org/certification/achaq/front-end-development-libraries"
          source="FreeCodeCamp 2022"
        />
        <CertificationCard
          title="Scientific Computing with Python"
          link="https://www.freecodecamp.org/certification/achaq/scientific-computing-with-python-v7"
          source="FreeCodeCamp 2022"
        />
      </div>
    </section>
  );
};

export default Certification;
