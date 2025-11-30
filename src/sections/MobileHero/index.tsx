export const MobileHero = () => {
  return (
    <div className="relative text-xs bg-slate-50 box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full mx-0 px-3 md:text-[15.2px] md:hidden md:leading-[22.8px] md:mx-auto md:px-[1%]">
      <div className="text-xs box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto pt-8 pb-6 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)] md:min-h-0 md:min-w-0 md:py-[8.33%]">
        <div className="relative text-xs box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-start leading-[18px] min-h-[auto] gap-y-5 w-full pt-[0%] pb-[3%] px-[0%] md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:min-h-0 md:w-[53%]">
          <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full min-h-[auto] gap-y-5 md:text-[15.2px] md:leading-[22.8px] md:min-h-0">
            <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
              <h1 className="text-zinc-900 text-5xl font-bold box-border caret-transparent clear-both leading-[55.2px] pb-2.5 font-sf_pro_display">
                Empowering Businesses with
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgb(24,127,213)_0%,rgb(46,168,230)_52%,rgb(6,184,189)_100%)] box-border inline-block text-nowrap">
                  AI-Driven
                </span>
                Software Development
              </h1>
            </div>
          </div>
          <div className="relative text-zinc-900/90 text-xl box-border caret-transparent gap-x-5 leading-7 max-w-full min-h-[auto] gap-y-5 font-sf_pro_display_regular md:min-h-0">
            <div className="box-border caret-transparent h-full mt-[-18px] md:mt-[-22.8px]">
              Icanio empowers businesses through custom software development,
              blending AI, Cloud, and Data Engineering for scalable,
              growth-driven solutions{" "}
            </div>
          </div>
          <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full min-h-[auto] gap-y-5 md:text-[15.2px] md:leading-[22.8px] md:min-h-0">
            <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
              <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                <a
                  href="/contact-us"
                  className="text-white text-base font-semibold bg-sky-800 box-border caret-transparent inline-block fill-white leading-6 text-center px-6 py-3 rounded-lg font-sf_pro"
                >
                  <span className="box-border caret-transparent gap-x-[5px] flex fill-white justify-center gap-y-[5px]">
                    <span className="box-border caret-transparent block fill-white min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                      Talk to Our Experts
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
