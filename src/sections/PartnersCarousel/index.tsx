export const PartnersCarousel = () => {
  return (
    <div className="relative text-xs bg-[#2d2557] bg-no-repeat bg-cover box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full mx-auto px-[1%] md:text-[15.2px] md:leading-[22.8px] py-16 md:py-20">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.4 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="text-xs box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)] relative z-10">
        <div className="relative text-xs items-center box-border caret-transparent gap-x-8 flex flex-wrap justify-between leading-[18px] gap-y-8 w-full p-[0%] md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
          <div className="relative text-xs box-border caret-transparent gap-x-5 flex flex-col shrink-0 flex-wrap leading-[18px] gap-y-5 w-full p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:w-[45%]">
            <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-left md:text-[15.2px] md:leading-[22.8px]">
              <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                <h2 className="text-white text-3xl md:text-[40px] font-semibold box-border caret-transparent clear-both leading-[38px] md:leading-[48px] font-sf_pro_display_regular mb-4">
                  Powering Progress, One Solution at a Time
                </h2>
              </div>
            </div>
            <div className="relative text-white/90 text-base md:text-[17px] box-border caret-transparent gap-x-5 leading-6 md:leading-7 max-w-full gap-y-5 text-left font-sf_pro_display_regular">
              <div className="box-border caret-transparent h-full mt-[-8.4px] md:mt-[-10.64px]">
                From India to the USA, Freshtronics delivers AI-native IT services
                that help businesses innovate, scale, and succeed
                effortlessly.{" "}
              </div>
            </div>
          </div>

          {/* Mobile View - Horizontal Scrolling Carousel */}
          <div className="relative w-full p-2.5 md:hidden overflow-hidden">
            <div className="flex animate-mobile-scroll-smooth">
              {/* First set */}
              <div className="flex-shrink-0 w-full flex items-center justify-center px-8">
                <a
                  href="https://www.google.com/maps/place/2093+Philadelphia+Pike,+Claymont,+DE+19703,+USA/@39.7904695,-75.4794227,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6e38488808071:0x3749940e603a7fde!8m2!3d39.7904655!4d-75.4745464!16s/g/11csdh86r5?entry=ttu"
                  className="flex items-center justify-center w-[200px] h-[200px] transition-transform hover:scale-110"
                >
                  <img
                    src="https://i.ibb.co/tpMSkVST/Group-1000005421-1.png"
                    alt="USA"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <div className="flex-shrink-0 w-full flex items-center justify-center px-8">
                <div className="flex items-center justify-center w-[200px] h-[200px] transition-transform hover:scale-110">
                  <img
                    src="https://i.ibb.co/kgDXp1WP/Group-1000005422-1.png"
                    alt="Singapore"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex-shrink-0 w-full flex items-center justify-center px-8">
                <a
                  href="https://www.google.com/maps/place/Icanio+Technologies/@13.0099861,80.2092618,1002m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a525dfbdf1fc893:0x79dec4fb83ce1097!8m2!3d13.0099861!4d80.2092618!16s/g/11jn8thv48?entry=tts&g_ep=EgoyMDI1MTAyOS4xIPu8ASoASAFQAw%3D%3D&skid=da068793-f61c-4023-9686-70ae888f591c"
                  className="flex items-center justify-center w-[200px] h-[200px] transition-transform hover:scale-110"
                >
                  <img
                    src="https://i.ibb.co/84nV6P62/Group-2085661194-1.png"
                    alt="Chennai"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <div className="flex-shrink-0 w-full flex items-center justify-center px-8">
                <a
                  href="https://www.google.com/maps/place/Icanio+Technology+Labs+Private+Limited/@8.6931622,77.7377964,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04130049722b17:0x632c69c7b35fa88a!8m2!3d8.6931622!4d77.7377964!16s/g/11vpkwxklq?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D"
                  className="flex items-center justify-center w-[200px] h-[200px] transition-transform hover:scale-110"
                >
                  <img
                    src="https://i.ibb.co/hTmR3JV/Group-2085661193-1.png"
                    alt="Tirunelveli"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-full flex items-center justify-center px-8">
                <a
                  href="https://www.google.com/maps/place/2093+Philadelphia+Pike,+Claymont,+DE+19703,+USA/@39.7904695,-75.4794227,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6e38488808071:0x3749940e603a7fde!8m2!3d39.7904655!4d-75.4745464!16s/g/11csdh86r5?entry=ttu"
                  className="flex items-center justify-center w-[200px] h-[200px] transition-transform hover:scale-110"
                >
                  <img
                    src="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005421-1.png"
                    alt="USA"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop View - Carousel */}
          <div className="relative text-xs items-center box-border caret-transparent gap-x-5 hidden md:flex flex-wrap justify-center leading-[18px] gap-y-5 w-full md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:w-[50%] overflow-hidden">
            <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 w-full md:text-[15.2px] md:leading-[22.8px]">
              <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                  <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                    <div className="text-xs box-border caret-transparent leading-[18px] list-none z-[1] overflow-hidden md:text-[15.2px] md:leading-[22.8px]">
                      <div className="relative text-xs caret-transparent flex h-full leading-[18px] w-full z-[1] animate-scroll-left md:text-[15.2px] md:leading-[22.8px]">
                        <div
                          role="group"
                          aria-label="1 / 4"
                          className="relative text-xs box-border caret-transparent shrink-0 h-full leading-[18px] w-[180px] mr-[15px] md:text-[15.2px] md:leading-[22.8px]"
                        >
                          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                            <div
                              title="USA"
                              className="relative text-xs items-center bg-white shadow-[rgba(0,0,0,0.1)_5px_10px_15px_0px] box-border caret-transparent flex justify-center leading-[18px] min-h-[170px] z-[5] overflow-hidden rounded-[100px] md:text-[15.2px] md:leading-[22.8px]"
                            >
                              <a
                                href="https://www.google.com/maps/place/2093+Philadelphia+Pike,+Claymont,+DE+19703,+USA/@39.7904695,-75.4794227,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6e38488808071:0x3749940e603a7fde!8m2!3d39.7904655!4d-75.4745464!16s/g/11csdh86r5?entry=ttu"
                                className="text-blue-600 text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px] hover:text-sky-700 hover:border-sky-700"
                              >
                                <span className="relative text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                                  <img
                                    src="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005421-1.png"
                                    alt="USA"
                                    className="text-xs aspect-[auto_560_/_560] box-border caret-transparent leading-[18px] max-w-full w-[560px] md:text-[15.2px] md:leading-[22.8px]"
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-label="2 / 4"
                          className="relative text-xs box-border caret-transparent shrink-0 h-full leading-[18px] w-[180px] mr-[15px] md:text-[15.2px] md:leading-[22.8px]"
                        >
                          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                            <div
                              title="Singapore"
                              className="relative text-xs items-center bg-white shadow-[rgba(0,0,0,0.1)_5px_10px_15px_0px] box-border caret-transparent flex justify-center leading-[18px] min-h-[170px] z-[5] overflow-hidden rounded-[100px] md:text-[15.2px] md:leading-[22.8px]"
                            >
                              <span className="relative text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                                <img
                                  src="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005422-1.png"
                                  alt="Singapore"
                                  className="text-xs aspect-[auto_560_/_560] box-border caret-transparent leading-[18px] max-w-full w-[560px] md:text-[15.2px] md:leading-[22.8px]"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-label="3 / 4"
                          className="relative text-xs box-border caret-transparent shrink-0 h-full leading-[18px] w-[180px] mr-[15px] md:text-[15.2px] md:leading-[22.8px]"
                        >
                          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                            <div
                              title="Chennai"
                              className="relative text-xs items-center bg-white shadow-[rgba(0,0,0,0.1)_5px_10px_15px_0px] box-border caret-transparent flex justify-center leading-[18px] min-h-[170px] z-[5] overflow-hidden rounded-[100px] md:text-[15.2px] md:leading-[22.8px]"
                            >
                              <a
                                href="https://www.google.com/maps/place/Icanio+Technologies/@13.0099861,80.2092618,1002m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a525dfbdf1fc893:0x79dec4fb83ce1097!8m2!3d13.0099861!4d80.2092618!16s/g/11jn8thv48?entry=tts&g_ep=EgoyMDI1MTAyOS4xIPu8ASoASAFQAw%3D%3D&skid=da068793-f61c-4023-9686-70ae888f591c"
                                className="text-blue-600 text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px] hover:text-sky-700 hover:border-sky-700"
                              >
                                <span className="relative text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                                  <img
                                    src="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661194-1.png"
                                    alt="Chennai"
                                    className="text-xs aspect-[auto_560_/_560] box-border caret-transparent leading-[18px] max-w-full w-[560px] md:text-[15.2px] md:leading-[22.8px]"
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-label="4 / 4"
                          className="relative text-xs box-border caret-transparent shrink-0 h-full leading-[18px] w-[180px] mr-[15px] md:text-[15.2px] md:leading-[22.8px]"
                        >
                          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                            <div
                              title="Tirunelveli"
                              className="relative text-xs items-center bg-white shadow-[rgba(0,0,0,0.1)_5px_10px_15px_0px] box-border caret-transparent flex justify-center leading-[18px] min-h-[170px] z-[5] overflow-hidden rounded-[100px] md:text-[15.2px] md:leading-[22.8px]"
                            >
                              <a
                                href="https://www.google.com/maps/place/Icanio+Technology+Labs+Private+Limited/@8.6931622,77.7377964,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04130049722b17:0x632c69c7b35fa88a!8m2!3d8.6931622!4d77.7377964!16s/g/11vpkwxklq?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D"
                                className="text-blue-600 text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px] hover:text-sky-700 hover:border-sky-700"
                              >
                                <span className="relative text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                                  <img
                                    src="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661193-1.png"
                                    alt="Tirunelveli"
                                    className="text-xs aspect-[auto_560_/_560] box-border caret-transparent leading-[18px] max-w-full w-[560px] md:text-[15.2px] md:leading-[22.8px]"
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* Duplicate for infinite scroll */}
                        <div
                          role="group"
                          aria-label="1 / 4"
                          className="relative text-xs box-border caret-transparent shrink-0 h-full leading-[18px] w-[180px] mr-[15px] md:text-[15.2px] md:leading-[22.8px]"
                        >
                          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                            <div
                              title="USA"
                              className="relative text-xs items-center bg-white shadow-[rgba(0,0,0,0.1)_5px_10px_15px_0px] box-border caret-transparent flex justify-center leading-[18px] min-h-[170px] z-[5] overflow-hidden rounded-[100px] md:text-[15.2px] md:leading-[22.8px]"
                            >
                              <a
                                href="https://www.google.com/maps/place/2093+Philadelphia+Pike,+Claymont,+DE+19703,+USA/@39.7904695,-75.4794227,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6e38488808071:0x3749940e603a7fde!8m2!3d39.7904655!4d-75.4745464!16s/g/11csdh86r5?entry=ttu"
                                className="text-blue-600 text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px] hover:text-sky-700 hover:border-sky-700"
                              >
                                <span className="relative text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                                  <img
                                    src="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005421-1.png"
                                    alt="USA"
                                    className="text-xs aspect-[auto_560_/_560] box-border caret-transparent leading-[18px] max-w-full w-[560px] md:text-[15.2px] md:leading-[22.8px]"
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-label="2 / 4"
                          className="relative text-xs box-border caret-transparent shrink-0 h-full leading-[18px] w-[180px] mr-[15px] md:text-[15.2px] md:leading-[22.8px]"
                        >
                          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                            <div
                              title="Singapore"
                              className="relative text-xs items-center bg-white shadow-[rgba(0,0,0,0.1)_5px_10px_15px_0px] box-border caret-transparent flex justify-center leading-[18px] min-h-[170px] z-[5] overflow-hidden rounded-[100px] md:text-[15.2px] md:leading-[22.8px]"
                            >
                              <span className="relative text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                                <img
                                  src="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005422-1.png"
                                  alt="Singapore"
                                  className="text-xs aspect-[auto_560_/_560] box-border caret-transparent leading-[18px] max-w-full w-[560px] md:text-[15.2px] md:leading-[22.8px]"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-label="3 / 4"
                          className="relative text-xs box-border caret-transparent shrink-0 h-full leading-[18px] w-[180px] mr-[15px] md:text-[15.2px] md:leading-[22.8px]"
                        >
                          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                            <div
                              title="Chennai"
                              className="relative text-xs items-center bg-white shadow-[rgba(0,0,0,0.1)_5px_10px_15px_0px] box-border caret-transparent flex justify-center leading-[18px] min-h-[170px] z-[5] overflow-hidden rounded-[100px] md:text-[15.2px] md:leading-[22.8px]"
                            >
                              <a
                                href="https://www.google.com/maps/place/Icanio+Technologies/@13.0099861,80.2092618,1002m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a525dfbdf1fc893:0x79dec4fb83ce1097!8m2!3d13.0099861!4d80.2092618!16s/g/11jn8thv48?entry=tts&g_ep=EgoyMDI1MTAyOS4xIPu8ASoASAFQAw%3D%3D&skid=da068793-f61c-4023-9686-70ae888f591c"
                                className="text-blue-600 text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px] hover:text-sky-700 hover:border-sky-700"
                              >
                                <span className="relative text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                                  <img
                                    src="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661194-1.png"
                                    alt="Chennai"
                                    className="text-xs aspect-[auto_560_/_560] box-border caret-transparent leading-[18px] max-w-full w-[560px] md:text-[15.2px] md:leading-[22.8px]"
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          aria-label="4 / 4"
                          className="relative text-xs box-border caret-transparent shrink-0 h-full leading-[18px] w-[180px] mr-[15px] md:text-[15.2px] md:leading-[22.8px]"
                        >
                          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                            <div
                              title="Tirunelveli"
                              className="relative text-xs items-center bg-white shadow-[rgba(0,0,0,0.1)_5px_10px_15px_0px] box-border caret-transparent flex justify-center leading-[18px] min-h-[170px] z-[5] overflow-hidden rounded-[100px] md:text-[15.2px] md:leading-[22.8px]"
                            >
                              <a
                                href="https://www.google.com/maps/place/Icanio+Technology+Labs+Private+Limited/@8.6931622,77.7377964,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04130049722b17:0x632c69c7b35fa88a!8m2!3d8.6931622!4d77.7377964!16s/g/11vpkwxklq?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D"
                                className="text-blue-600 text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px] hover:text-sky-700 hover:border-sky-700"
                              >
                                <span className="relative text-xs box-border caret-transparent block leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                                  <img
                                    src="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661193-1.png"
                                    alt="Tirunelveli"
                                    className="text-xs aspect-[auto_560_/_560] box-border caret-transparent leading-[18px] max-w-full w-[560px] md:text-[15.2px] md:leading-[22.8px]"
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
