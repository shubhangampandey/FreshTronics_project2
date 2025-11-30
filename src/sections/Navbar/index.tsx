import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";
import { ContactButton } from "@/sections/Navbar/components/ContactButton";

export const Navbar = () => {
  return (
    <div className="relative text-xs bg-white box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full z-[9999] m-[0%] px-[0%] md:text-[15.2px] md:leading-[22.8px]">
      <div className="text-xs box-border caret-transparent gap-x-5 flex flex-row grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-[0%] md:text-[15.2px] md:flex-col md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)]">
        <div className="relative text-xs items-center box-border caret-transparent gap-x-6 flex flex-wrap justify-between leading-[18px] gap-y-6 w-full z-[9999] p-2.5 md:text-[15.2px] md:gap-x-[30.4px] md:flex-nowrap md:leading-[22.8px] md:gap-y-[30.4px]">
          <NavbarLogo />
          <div className="relative text-xs box-border caret-transparent gap-x-5 flex flex-col shrink-0 flex-wrap leading-[18px] gap-y-5 w-6/12 z-[9999] p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:w-[65%]">
            <DesktopMenu />
            <MobileMenu />
          </div>
          <div className="relative text-xs box-border caret-transparent gap-x-5 flex flex-col shrink-0 flex-wrap leading-[18px] mt-[-120px] gap-y-5 w-[1%] z-[9999] p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:w-[0%] md:mt-0">
            <div className="relative text-xs box-border caret-transparent gap-x-5 hidden leading-[18px] max-w-full min-h-0 gap-y-5 md:text-[15.2px] md:block md:leading-[22.8px] md:min-h-[auto]">
              <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]"></div>
            </div>
          </div>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};
