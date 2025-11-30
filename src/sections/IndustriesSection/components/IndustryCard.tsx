import { useEffect } from "react";

export type IndustryCardProps = {
  title: string;
  description: string;
  variant: string;
};

export const IndustryCard = (props: IndustryCardProps) => {
  useEffect(() => {
    const applyFlipOnScroll = () => {
      // detect the element directly under the mouse pointer
      const el = document.elementFromPoint(
        window.event?.clientX ?? 0,
        window.event?.clientY ?? 0
      );
      if (!el) return;

      // find nearest card
      const card = el.closest("[data-flip-card]");

      // remove flip from all cards
      document
        .querySelectorAll("[data-flip-card]")
        .forEach((c) => c.classList.remove("force-flip"));

      // apply force flip to the card under cursor
      if (card) card.classList.add("force-flip");
    };

    window.addEventListener("scroll", applyFlipOnScroll);

    return () => window.removeEventListener("scroll", applyFlipOnScroll);
  }, []);

  return (
    <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px] [perspective:1500px] group">
      <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">

        {/* Card Wrapper */}
        <div
          className="relative text-xs box-border caret-transparent h-[300px] leading-[18px] w-full rounded-[5px] md:text-[15.2px] md:leading-[22.8px] cursor-pointer [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] force-flip:[transform:rotateY(180deg)]"
          style={{ transition: 'transform 1s cubic-bezier(0.4,0,0.2,1)' }}
          data-flip-card
        >

          {/* ▣ FRONT OF CARD (unchanged) */}
          <div className="text-xs box-border caret-transparent h-full leading-[18px] w-full md:text-[15.2px] md:leading-[22.8px] absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-[5px]">
            <div
              className={`absolute text-white text-xs items-end bg-blend-multiply bg-transparent bg-no-repeat bg-cover box-border caret-transparent flex h-full leading-[18px] text-center w-full z-[2] rounded-[5px] left-0 top-0 md:text-[15.2px] md:leading-[22.8px] ${props.variant}`}
            >
              <div className="text-xs box-border caret-transparent leading-[18px] w-full md:text-[15.2px] md:leading-[22.8px]">
                <div className="text-xs box-border caret-transparent leading-[18px] w-full md:text-[15.2px] md:leading-[22.8px]">
                  <div className="text-xs box-border caret-transparent leading-[18px] pb-[5px] px-[30px] md:text-[15.2px] md:leading-[22.8px]">
                    <div className="text-xs box-border caret-transparent inline-block leading-3 mx-auto md:text-[15.2px] md:leading-[15.2px]"></div>

                    <h3 className="text-xl font-semibold box-border caret-transparent clear-both leading-[25px] mt-6 mb-[15px] font-sf_pro_display_regular">
                      {props.title}
                    </h3>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ▣ BACK OF CARD (unchanged) */}
          <div className="text-xs box-border caret-transparent h-full leading-[18px] w-full md:text-[15.2px] md:leading-[22.8px] absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden rounded-[5px]">
            <div className="absolute text-zinc-900 text-xs items-start bg-white bg-[url('https://i.ibb.co/whrFNmz9/Group-1000005531.png')] bg-cover box-border caret-transparent flex flex-col h-full leading-[18px] w-full rounded-[5px] left-0 top-0 p-[30px] md:text-[15.2px] md:leading-[22.8px]">
              <h2 className="text-zinc-900 text-xl font-semibold box-border caret-transparent clear-both leading-[25px] mt-4 mb-3 font-sf_pro_display_regular">
                {props.title}
              </h2>

              <p className="text-zinc-900/90 text-[15px] box-border caret-transparent leading-[22px] mb-4 font-sf_pro_display_regular">
                {props.description}
              </p>

              <a href="#" className="text-sky-700 text-[15px] font-medium box-border caret-transparent mt-auto inline-flex items-center hover:text-sky-800 transition-colors">
                Read More <span className="ml-1">›</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
