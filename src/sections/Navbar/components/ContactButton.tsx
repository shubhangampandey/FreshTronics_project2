export const ContactButton = () => {
  return (
    <div className="relative text-xs box-border caret-transparent gap-x-5 hidden flex-col flex-wrap leading-[18px] min-h-0 gap-y-5 w-full z-[9999] mr-0 p-2.5 md:text-[15.2px] md:flex md:flex-nowrap md:leading-[22.8px] md:mr-[-18.24px] md:min-h-[auto]">
      <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full min-h-0 gap-y-5 text-right md:text-[15.2px] md:leading-[22.8px] md:min-h-[auto]">
        <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
          <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
            <a
              href="/contact-us"
              className="text-sky-800 text-[15px] font-medium bg-white box-border caret-transparent inline-block fill-sky-800 leading-[15px] text-center border border-sky-800 px-6 py-3 rounded-[3px] border-solid font-roboto"
            >
              <span className="box-border caret-transparent gap-x-[5px] flex fill-sky-800 justify-center gap-y-[5px]">
                <span className="box-border caret-transparent block fill-sky-800 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                  Contact Us
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
