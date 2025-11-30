export const DesktopMenu = () => {
  return (
    <div className="relative text-xs box-border caret-transparent gap-x-5 hidden leading-[18px] max-w-full min-h-0 gap-y-5 md:text-[15.2px] md:block md:leading-[22.8px] md:min-h-[auto]">
      <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
        <nav className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
          <button
            type="button"
            aria-label="hamburger-icon"
            className="relative text-black text-xs bg-transparent caret-transparent block float-right leading-[18px] text-center w-[45px] z-10 border p-2 rounded-[3px] border-solid border-black/20 md:static md:text-[15.2px] md:bg-zinc-100 md:hidden md:leading-[22.8px] md:w-auto md:z-auto md:px-1.5 md:py-px md:rounded-none md:border-2 md:border-black"
          >
            <img
              src="https://c.animaapp.com/mi528nt4yktW0u/assets/icon-1.svg"
              alt="Icon"
              className="text-black/50 text-xs box-border caret-transparent h-3 leading-[18px] w-3 md:text-[15.2px] md:h-[15.2px] md:leading-[22.8px] md:w-[15.2px]"
            />
          </button>
          <div className="fixed text-xs bg-neutral-100 bg-[linear-gradient(0deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0)_100%)] shadow-[rgba(255,165,0,0)_0px_10px_30px_0px] box-border caret-transparent flex flex-col-reverse h-full justify-end left-[-375px] leading-[18px] max-w-[350px] overflow-x-hidden overflow-y-auto w-full z-[1000] pb-2.5 top-0 md:relative md:text-[15.2px] md:bg-transparent md:shadow-none md:block md:flex-row md:h-[30px] md:justify-normal md:leading-[22.8px] md:max-w-none md:overflow-x-visible md:overflow-y-visible md:w-auto md:pb-0 md:left-auto md:top-auto">
            <ul className="text-xs box-border caret-transparent block flex-wrap h-full justify-center leading-[18px] list-none overflow-auto pl-0 md:text-[15.2px] md:flex md:leading-[22.8px] md:overflow-visible">
              <li className="relative text-xs box-border caret-transparent leading-[18px] min-h-0 min-w-0 md:text-[15.2px] md:leading-[22.8px] md:min-h-[auto] md:min-w-[auto]">
                <a
                  href="/"
                  className="relative text-sky-800 text-base font-extrabold items-center box-border caret-transparent flex h-full leading-6 px-[15px] py-2.5 font-sf_pro_display_regular md:py-0"
                >
                  Home
                </a>
              </li>
              <li className="relative text-xs box-border caret-transparent leading-[18px] min-h-0 min-w-0 md:text-[15.2px] md:leading-[22.8px] md:min-h-[auto] md:min-w-[auto]">
                <a
                  href="/services"
                  className="relative text-black text-base font-medium items-center box-border caret-transparent flex h-full leading-6 px-[15px] py-2.5 font-sf_pro_display_regular md:text-zinc-900 md:py-0 hover:text-sky-800 hover:border-sky-800"
                >
                  Services
                  <i className="relative text-stone-950 text-[11px] font-black box-border caret-transparent block fill-stone-950 float-right leading-[11px] min-h-0 min-w-0 order-2 border border-stone-950 ml-auto mr-1.5 px-[15px] py-1 rounded-[30px] border-solid font-elementskit md:min-h-[auto] md:min-w-[auto] md:order-none md:ml-1.5 md:p-0 md:rounded-none md:border-0 md:border-none before:accent-auto before:box-border before:caret-transparent before:text-stone-950 before:fill-stone-950 before:text-[11px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[11px] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-elementskit"></i>
                </a>
              </li>
              <li className="relative text-xs box-border caret-transparent leading-[18px] min-h-0 min-w-0 md:text-[15.2px] md:leading-[22.8px] md:min-h-[auto] md:min-w-[auto]">
                <a
                  href="/careers"
                  className="relative text-black text-base font-medium items-center box-border caret-transparent flex h-full leading-6 px-[15px] py-2.5 font-sf_pro_display_regular md:text-zinc-900 md:py-0 hover:text-sky-800 hover:border-sky-800"
                >
                  Careers
                </a>
              </li>
              <li className="relative text-xs box-border caret-transparent leading-[18px] min-h-0 min-w-0 md:text-[15.2px] md:leading-[22.8px] md:min-h-[auto] md:min-w-[auto]">
                <a
                  href="https://icanio.com/blogs"
                  className="relative text-black text-base font-medium items-center box-border caret-transparent flex h-full leading-6 px-[15px] py-2.5 font-sf_pro_display_regular md:text-zinc-900 md:py-0 hover:text-sky-800 hover:border-sky-800"
                >
                  Blogs
                </a>
              </li>
            </ul>
            <div className="relative text-xs box-border caret-transparent block leading-[18px] w-full z-[5] py-2.5 md:static md:text-[15.2px] md:hidden md:leading-[22.8px] md:w-auto md:z-auto md:py-0">
              <button
                type="button"
                className="relative text-zinc-800 text-xs bg-transparent caret-transparent block float-right leading-[18px] text-center w-[45px] z-10 border m-3 p-2 rounded-[3px] border-solid border-black/50 md:static md:text-[15.2px] md:bg-zinc-100 md:hidden md:leading-[22.8px] md:w-auto md:z-auto md:m-5 md:px-1.5 md:py-px md:rounded-none hover:text-black/50"
              >
                X
              </button>
            </div>
          </div>
          <div className="fixed text-xs bg-zinc-800/50 box-border caret-transparent block h-full leading-[18px] w-full z-[14] pb-2.5 -left-full top-0 md:static md:text-[15.2px] md:bg-transparent md:hidden md:h-auto md:leading-[22.8px] md:w-auto md:z-auto md:pb-0 md:left-auto md:top-auto"></div>
        </nav>
      </div>
    </div>
  );
};
