export type CTACardProps = {
  badgeText: string;
  badgeVariant: string;
  badgeHref: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  cardVariant: string;
};

export const CTACard = (props: CTACardProps) => {
  return (
    <div
      className={`relative text-xs bg-no-repeat bg-contain box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[18px] gap-y-5 w-full pl-6 pr-[50px] pt-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:pt-8 before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-xs before:not-italic before:normal-nums before:font-normal before:h-[max(100%_+_0px,100%)] before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:opacity-50 before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[max(100%_+_0px,100%)] before:border-separate before:left-0 before:top-0 before:font-apple_system before:md:text-[15.2px] before:md:leading-[22.8px] ${props.cardVariant}`}
    >
      <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px]">
        <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
            <a
              href={props.badgeHref}
              className={`text-white text-xs font-semibold box-border caret-transparent inline-block fill-white tracking-[0.4px] leading-3 text-center p-[5px] rounded-bl rounded-br rounded-tl rounded-tr font-sf_pro_display_regular ${props.badgeVariant}`}
            >
              <span className="box-border caret-transparent gap-x-[5px] flex fill-white justify-center gap-y-[5px]">
                <span className="box-border caret-transparent block fill-white">
                  {props.badgeText}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-left md:text-[15.2px] md:leading-[22.8px]">
        <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
          <h2 className="text-white text-xl font-medium box-border caret-transparent clear-both leading-5 font-sf_pro_display_medium">
            {props.title}
          </h2>
        </div>
      </div>
      <div className="relative text-white/80 text-base box-border caret-transparent gap-x-5 leading-6 max-w-full gap-y-5 text-left font-sf_pro_display_regular">
        <div className="box-border caret-transparent h-full mt-[-8.4px] md:mt-[-10.64px]">
          {props.description}
        </div>
      </div>
      <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-left md:text-[15.2px] md:leading-[22.8px]">
        <div className="text-xs box-border caret-transparent h-full leading-[18px] -mt-3 md:text-[15.2px] md:leading-[22.8px] md:mt-0">
          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
            <a
              href={props.ctaHref}
              className="text-white text-base font-semibold box-border caret-transparent inline-block fill-white leading-6 text-center border px-6 py-3 rounded-lg border-solid border-white font-sf_pro_display_regular"
            >
              <span className="box-border caret-transparent gap-x-[5px] flex fill-white justify-center gap-y-[5px]">
                <span className="box-border caret-transparent block fill-white">
                  {props.ctaText}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
