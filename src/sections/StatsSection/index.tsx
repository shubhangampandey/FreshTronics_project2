import React, { useState, useEffect, useRef } from "react";

const CountUp = ({ end, duration = 3000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = 0;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Smoother easing function - easeOutCubic
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * (end - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef} className="box-border caret-transparent block">
      {count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <div className="relative text-xs box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full mt-3 px-2.5 md:text-[15.2px] md:leading-[22.8px] md:mt-[-136.8px]">
      <div className="text-xs items-center box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-center leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)]">
        <div className="relative text-xs box-border caret-transparent gap-x-5 flex flex-col shrink-0 flex-wrap leading-[18px] gap-y-5 w-full p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:w-[77%]">
          <div className="relative text-xs content-start bg-white shadow-[rgb(217,233,243)_0px_4px_8px_0px] box-border caret-transparent gap-x-5 grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(1,1fr)] justify-start leading-[18px] gap-y-5 w-full border-blue-100 p-2.5 rounded-lg border-2 border-solid md:text-[15.2px] md:grid-cols-[repeat(4,1fr)] md:leading-[22.8px] md:px-10 md:py-5">
            <div className="relative text-xs items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[18px] gap-y-5 w-full border-blue-100 p-2.5 border-r-0 border-solid md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:border-r-2">
              <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px]">
                <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                  <div className="text-xs items-stretch box-border caret-transparent flex flex-col-reverse justify-center leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                    <div className="text-zinc-900/80 text-sm items-center box-border caret-transparent flex basis-[0%] grow justify-center leading-5 font-sf_pro_display_regular md:text-base md:leading-10">
                      AI Enabled Engineers
                    </div>
                    <div className="text-zinc-900 text-[32px] font-semibold box-border caret-transparent flex basis-[0%] grow tracking-[-2px] leading-8 text-center font-sf_pro_display_bold">
                      <span className="box-border caret-transparent block grow text-end"></span>
                      <CountUp end={250} suffix=" +" />
                      <span className="box-border caret-transparent block grow text-start"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-xs items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[18px] gap-y-5 w-full border-blue-100 p-2.5 border-r-0 border-solid md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:border-r-2">
              <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px]">
                <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                  <div className="text-xs items-stretch box-border caret-transparent flex flex-col-reverse justify-center leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                    <div className="text-zinc-900/80 text-sm items-center box-border caret-transparent flex basis-[0%] grow justify-center leading-5 font-sf_pro_display_regular md:text-base md:leading-10">
                      Successful Projects
                    </div>
                    <div className="text-zinc-900 text-[32px] font-semibold box-border caret-transparent flex basis-[0%] grow tracking-[-2px] leading-8 text-center font-sf_pro_display_bold">
                      <span className="box-border caret-transparent block grow text-end"></span>
                      <CountUp end={40} suffix=" +" />
                      <span className="box-border caret-transparent block grow text-start"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-xs items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[18px] gap-y-5 w-full p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
              <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px]">
                <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                  <div className="text-xs items-stretch box-border caret-transparent flex flex-col-reverse justify-center leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                    <div className="text-zinc-900/80 text-sm items-center box-border caret-transparent flex basis-[0%] grow justify-center leading-5 font-sf_pro_display_regular md:text-base md:leading-10">
                      Client Satisfaction Rate
                    </div>
                    <div className="text-zinc-900 text-[32px] font-semibold box-border caret-transparent flex basis-[0%] grow tracking-[-2px] leading-8 text-center font-sf_pro_display_bold">
                      <span className="box-border caret-transparent block grow text-end"></span>
                      <CountUp end={93} suffix=" %" />
                      <span className="box-border caret-transparent block grow text-start"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-xs items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[18px] gap-y-5 w-full border-blue-100 p-2.5 border-l-0 border-solid md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:border-l-2">
              <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px]">
                <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                  <div className="text-xs items-stretch box-border caret-transparent flex flex-col-reverse justify-center leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                    <div className="text-zinc-900/80 text-sm items-center box-border caret-transparent flex basis-[0%] grow justify-center leading-5 font-sf_pro_display_regular md:text-base md:leading-10">
                      Years in service
                    </div>
                    <div className="text-zinc-900 text-[32px] font-semibold box-border caret-transparent flex basis-[0%] grow tracking-[-2px] leading-8 text-center font-sf_pro_display_bold">
                      <span className="box-border caret-transparent block grow text-end"></span>
                      <CountUp end={6} suffix=" +" />
                      <span className="box-border caret-transparent block grow text-start"></span>
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
