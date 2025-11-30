export const FooterCopyright = () => {
  return (
    <div className="relative text-xs items-center box-border caret-transparent gap-x-5 flex flex-wrap justify-center leading-[18px] gap-y-5 w-full -mt-3 p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:mt-[-15.2px]">
      <div className="relative text-xs self-center box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px]">
        <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
          <p className="text-zinc-900 text-base box-border caret-transparent leading-6 font-sf_pro_display">
            © <span className="box-border caret-transparent">2025</span>
          </p>
        </div>
      </div>
      <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px]">
        <div className="text-xs box-border caret-transparent h-full leading-[18px] -ml-3 md:text-[15.2px] md:leading-[22.8px] md:ml-[-15.2px]">
          <h2 className="text-zinc-900 text-base box-border caret-transparent clear-both leading-4 font-sf_pro">
            Freshtronics - All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
};
