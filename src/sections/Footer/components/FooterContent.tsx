import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterContact } from "@/sections/Footer/components/FooterContact";

export const FooterContent = () => {
  return (
    <div className="relative text-xs box-border caret-transparent gap-x-12 flex flex-wrap justify-between leading-[18px] gap-y-12 w-full p-2.5 md:text-[15.2px] md:gap-x-[60.8px] md:flex-nowrap md:leading-[22.8px] md:gap-y-[60.8px]">
      <FooterBrand />
      <FooterLinks />
      <FooterContact />
    </div>
  );
};
