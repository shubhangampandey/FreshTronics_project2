export const NavbarLogo = () => {
  return (
    <div className="relative text-xs box-border caret-transparent gap-x-5 flex flex-col shrink-0 flex-wrap leading-[18px] gap-y-5 w-2/5 z-[9999] -ml-1.5 p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:ml-[-7.6px] md:w-[14%]">
      <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-center md:text-[15.2px] md:leading-[22.8px]">
        <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
          <a
            href="/"
            className="text-blue-600 text-xs box-border caret-transparent inline-block leading-[18px] md:text-[15.2px] md:leading-[22.8px] hover:text-sky-700 hover:underline hover:border-sky-700"
          >
            <img
              src="https://i.ibb.co/DgKdkqv9/task-01kay1mde1fxyrx64zmvf9e7mt-1764092523-img-2.png"
              alt="Icanio Logo"
              className="text-xs aspect-[auto_299_/_105] box-border caret-transparent inline-block leading-[18px] max-w-full w-[299px] md:text-[15.2px] md:leading-[22.8px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
