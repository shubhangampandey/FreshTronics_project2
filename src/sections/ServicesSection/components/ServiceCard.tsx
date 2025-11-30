export type ServiceCardProps = {
  imageUrl: string;
  imageAlt: string;
  imageSizeVariant?: string;
  title: string;
  description: string;
  linkHref: string;
  titleVariant?: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="relative text-xs bg-white shadow-[rgb(217,233,243)_0px_4px_8px_0px] box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[18px] gap-y-5 w-full border border-slate-100 px-4 py-6 rounded-lg border-solid md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
      <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-left md:text-[15.2px] md:leading-[22.8px]">
        <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            sizes="(max-width: 174px) 100vw, 174px"
            className={`text-xs box-border caret-transparent inline-block leading-[18px] max-w-[60px] w-[60px] md:text-[15.2px] md:leading-[22.8px] ${props.imageSizeVariant || "aspect-[auto_174_/_174]"}`}
          />
        </div>
      </div>
      <div
        className={`relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px] ${props.titleVariant || ""}`}
      >
        <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
          <h3 className="text-zinc-900 text-xl font-semibold box-border caret-transparent clear-both leading-6 font-sf_pro_display_regular">
            {props.title}
          </h3>
        </div>
      </div>
      <div
        className={`relative text-neutral-500 text-base box-border caret-transparent gap-x-5 leading-[22px] max-w-full gap-y-5 font-sf_pro_display_regular ${props.titleVariant ? "" : "w-[91%]"}`}
      >
        <div className="box-border caret-transparent h-full">
          {props.description}
        </div>
      </div>
      <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-left md:text-[15.2px] md:leading-[22.8px]">
        <div className="text-xs box-border caret-transparent h-full leading-[18px] ml-[-18px] -mt-1.5 md:text-[15.2px] md:leading-[22.8px] md:ml-[-22.8px] md:mt-[-7.6px]">
          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
            <a
              href={props.linkHref}
              className="text-zinc-900 text-base font-semibold box-border caret-transparent inline-block fill-zinc-900 leading-4 text-center px-6 py-3 rounded-[3px] font-sf_pro_display_regular"
            >
              <span className="box-border caret-transparent gap-x-[5px] flex fill-zinc-900 flex-row-reverse justify-center gap-y-[5px]">
                <span className="items-center box-border caret-transparent flex fill-zinc-900">
                  <i className="font-normal box-border caret-transparent block fill-zinc-900 font-elementskit before:accent-auto before:box-border before:caret-transparent before:text-zinc-900 before:fill-zinc-900 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-elementskit"></i>
                </span>
                <span className="box-border caret-transparent block fill-zinc-900">
                  Read More
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
