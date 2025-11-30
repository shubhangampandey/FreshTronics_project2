import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <div className="relative text-xs bg-[url('https://icanio.com/wp-content/uploads/2025/09/Bottom-nav-2.png')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full mx-auto px-[0%] md:text-[15.2px] md:leading-[22.8px]">
      <div className="text-xs box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-[4%] md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)] md:pt-[3%]">
        <FooterContent />
        <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 w-full md:text-[15.2px] md:leading-[22.8px]">
          <div className="text-xs box-border caret-transparent h-full leading-[18px] ml-[8.4px] -mt-3 md:text-[15.2px] md:leading-[22.8px] md:mt-[-15.2px] md:ml-[10.64px]">
            <div className="text-xs box-border caret-transparent flex leading-[18px] py-[5px] md:text-[15.2px] md:leading-[22.8px]">
              <span className="text-xs border-b-neutral-800 border-l-neutral-800 border-r-neutral-800 border-t-slate-200 box-border caret-transparent flex leading-[18px] w-full border-t md:text-[15.2px] md:leading-[22.8px]"></span>
            </div>
          </div>
        </div>
        <FooterCopyright />
        <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-center md:text-[15.2px] md:leading-[22.8px]">
          <div className="text-xs box-border caret-transparent h-full leading-[18px] pt-[3%] pb-[2%] md:text-[15.2px] md:leading-[22.8px]">
            <img
              src="https://i.ibb.co/q37nK4BY/task-01kaxxx7avevbs1pzxcy9bdwth-1764088584-img-0.jpg"
              alt=""
              sizes="(max-width: 892px) 100vw, 892px"
              className="text-xs aspect-[auto_892_/_178] box-border caret-transparent inline-block leading-[18px] max-w-full w-6/12 md:text-[15.2px] md:leading-[22.8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
