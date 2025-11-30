import { useState } from "react";

const projects = [
  {
    id: 1,
    logo: "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661225.png",
    logoAlt: "PropertyZar logo",
    title: "PropertyZar",
    description: "Rental Property Management Software that streamlines every aspect of your property operations. Making Property Management Simple with PropertyZar, helping you save time, cut costs, and boost efficiency.",
    image: "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005535.png",
  },
  {
    id: 2,
    logo: "https://icanio.com/wp-content/uploads/2025/10/Group-2085661226.png",
    logoAlt: "Waterfield Advisors logo",
    title: "Waterfield Advisors",
    description: "Performance Management Dashboard that streamlines task tracking, team collaboration, and data reconciliation. Empowering businesses with real-time insights and efficient workflow management.",
    image: "https://c.animaapp.com/mi528nt4yktW0u/img/image.png",
  },
  {
    id: 3,
    logo: "https://icanio.com/wp-content/uploads/2025/10/Group-2085661227.png",
    logoAlt: "Fintrend logo",
    title: "Fintrend",
    description: "Comprehensive FinTech platform delivering cutting-edge financial solutions, market insights, and seamless digital banking experiences for modern businesses and consumers.",
    image: "https://icanio.com/wp-content/uploads/2025/10/Group-2085661186.png",
  },
];

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative text-xs box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full mt-[5%] mb-[0%] mx-[0%] px-[1%] md:text-[15.2px] md:leading-[22.8px]">
      <div className="text-xs box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto pt-[6%] pb-[4%] md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)]">
        <div className="relative text-xs items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[18px] gap-y-5 w-full p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
          <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-center md:text-[15.2px] md:leading-[22.8px]">
            <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
              <h2 className="text-zinc-900 text-[32px] font-bold box-border caret-transparent clear-both leading-8 font-sf_pro_display_bold">
                Projects That Speak for Themselves
              </h2>
            </div>
          </div>
          <div className="relative text-zinc-900 text-base box-border caret-transparent gap-x-5 leading-6 max-w-full gap-y-5 text-center w-[94%] font-sf_pro_display_regular md:w-[51%]">
            <div className="box-border caret-transparent h-full mt-[-8.4px] md:mt-[-10.64px]">
              From disruptive startups to global enterprises, we build, we ship,
              we conquer.{" "}
            </div>
          </div>
          <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px]">
            <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
              <section className="text-xs items-center box-border caret-transparent gap-x-12 grid [grid-template-areas:'works''head''device''nav'] grid-cols-[1fr] leading-[18px] gap-y-4 w-full font-sf_pro_display md:text-[15.2px] md:gap-x-[60.8px] md:[grid-template-areas:none] md:grid-cols-[minmax(280px,0.9fr)_minmax(320px,1.1fr)] md:leading-[22.8px] md:gap-y-[60.8px]">
                <div className="text-xs box-border caret-transparent contents leading-[18px] min-h-0 min-w-0 order-2 md:text-[15.2px] md:block md:leading-[22.8px] md:min-h-[auto] md:min-w-[auto] md:order-none">
                  <h6 className="text-zinc-900 text-2xl font-bold box-border caret-transparent clear-both col-end-[works] col-start-[works] row-end-[works] row-start-[works] leading-[28.8px] min-h-[auto] min-w-[auto] text-center mt-2 mb-3.5 md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto md:min-h-0 md:min-w-0 md:text-start">
                    Our Recent Work
                  </h6>
                  <div className="text-xs items-center box-border caret-transparent gap-x-2.5 flex flex-col col-end-[head] col-start-[head] row-end-[head] row-start-[head] leading-[18px] min-h-[auto] min-w-[auto] gap-y-2.5 text-center md:text-[15.2px] md:[align-items:normal] md:gap-x-3 md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto md:leading-[22.8px] md:min-h-0 md:min-w-0 md:gap-y-3 md:text-start">
                    <img
                      src={currentProject.logo}
                      alt={currentProject.logoAlt}
                      className="text-xs box-border caret-transparent leading-[18px] max-w-full text-center w-[400px] mx-auto md:text-[15.2px] md:leading-[22.8px] md:text-start md:w-[223px] md:mx-0 transition-opacity duration-300"
                    />
                    <div className="text-xs box-border caret-transparent leading-[18px] text-center md:text-[15.2px] md:leading-[22.8px] md:text-start">
                      <div className="text-xs font-bold box-border caret-transparent hidden leading-[18px] text-center mb-1.5 md:text-[15.2px] md:leading-[22.8px] md:text-start">
                        PropertyZar
                      </div>
                      <p className="text-zinc-900 text-sm box-border caret-transparent leading-[21.7px] max-w-[432px] text-center mb-0 mx-auto px-3 md:text-base md:leading-6 md:max-w-none md:text-start md:mb-1 md:mx-0 md:px-0 transition-opacity duration-300">
                        {currentProject.description}
                      </p>
                    </div>
                  </div>
                </div>
                  <div className="text-xs items-center box-border caret-transparent gap-x-5 flex flex-col col-end-[device] col-start-[device] row-end-[device] row-start-[device] justify-self-stretch leading-[18px] order-1 gap-y-5 md:text-[15.2px] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto md:leading-[22.8px] md:order-none">
                  <div className="text-xs box-border caret-transparent leading-[18px] w-full md:text-[15.2px] md:leading-[22.8px]">
                    <img
                      alt={`${currentProject.title} screenshot`}
                      src={currentProject.image}
                      className="text-xs box-border caret-transparent leading-[18px] max-w-full object-contain w-full md:text-[15.2px] md:leading-[22.8px] transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-xs items-center box-border caret-transparent gap-x-3 grid col-end-[nav] col-start-[nav] row-end-[nav] row-start-[nav] grid-cols-[40px_1fr_40px] justify-center leading-[18px] gap-y-4 w-[min(320px,92%)] mt-2 mx-auto md:text-[15.2px] md:gap-x-4 md:flex md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto md:grid-cols-none md:leading-[22.8px] md:w-auto md:mt-0 md:mx-0">
                    <button
                      onClick={handlePrevious}
                      aria-label="Previous"
                      className="text-neutral-950 text-xs items-center bg-white caret-transparent flex col-start-1 h-[38px] justify-center leading-[18px] text-center w-[38px] border border-slate-200 rounded-[999px] border-solid md:text-[15.2px] md:col-start-auto md:h-10 md:leading-[22.8px] md:w-10 hover:bg-slate-50 cursor-pointer transition-all"
                    >
                      <img
                        src="https://c.animaapp.com/mi528nt4yktW0u/assets/icon-2.svg"
                        alt="Icon"
                        className="text-xs box-border caret-transparent h-[18px] leading-[18px] w-[18px] md:text-[15.2px] md:leading-[22.8px]"
                      />
                    </button>
                    <div className="text-xs items-center box-border caret-transparent gap-x-3 flex col-start-2 justify-self-center leading-[18px] min-w-[150px] gap-y-3 md:text-[15.2px] md:gap-x-4 md:col-start-auto md:justify-self-auto md:leading-[22.8px] md:min-w-[220px] md:gap-y-4">
                      {projects.map((_, index) => (
                        <span
                          key={index}
                          className={`text-xs shadow-[rgba(0,0,0,0.02)_0px_0px_0px_1px_inset] box-border caret-transparent block h-1 leading-[18px] w-12 rounded-[999px] md:text-[15.2px] md:h-1.5 md:leading-[22.8px] md:w-[72px] transition-colors duration-300 ${
                            index === currentIndex ? "bg-sky-800" : "bg-slate-200"
                          }`}
                        ></span>
                      ))}
                    </div>
                    <button
                      onClick={handleNext}
                      aria-label="Next"
                      className="text-neutral-950 text-xs items-center bg-white caret-transparent flex col-start-3 h-[38px] justify-center leading-[18px] text-center w-[38px] border border-slate-200 rounded-[999px] border-solid md:text-[15.2px] md:col-start-auto md:h-10 md:leading-[22.8px] md:w-10 hover:bg-slate-50 cursor-pointer transition-all"
                    >
                      <img
                        src="https://c.animaapp.com/mi528nt4yktW0u/assets/icon-3.svg"
                        alt="Icon"
                        className="text-xs box-border caret-transparent h-[18px] leading-[18px] w-[18px] md:text-[15.2px] md:leading-[22.8px]"
                      />
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
