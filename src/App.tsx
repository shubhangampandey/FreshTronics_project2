import { Navbar } from "@/sections/navbar";
import { Hero } from "@/sections/hero";
import { MobileHero } from "@/sections/mobileHero";
import { TrustedBrands } from "@/sections/trustedBrands";
import { BuildingFuture } from "@/sections/buildingFuture";
import { IndustriesSection } from "@/sections/industriesSection";
import { ServicesSection } from "@/sections/servicesSection";
import { WhyIcanio } from "@/sections/whyIcanio";
import { StatsSection } from "@/sections/statsSection";
import { ProjectsSection } from "@/sections/projectsSection";
import { TeamSection } from "@/sections/teamSection";
import { BuildSomething } from "@/sections/buildSomething";
import { TestimonialsSection } from "@/sections/testimonialsSection";
import { PartnersCarousel } from "@/sections/partnersCarousel";
import { Footer } from "@/sections/footer";
import { ContactModal } from "@/components/contactModal";

export const App = () => {
  return (
    <body className="text-neutral-800 text-xs not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[18px] list-outside list-disc pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-apple_system md:text-[15.2px] md:leading-[22.8px] overflow-x-hidden">
      <div className="text-xs box-border caret-transparent clear-both leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
        <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
          <Navbar />
        </div>
      </div>
      <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
        <Hero />
        <MobileHero />
        <TrustedBrands />
        <BuildingFuture />
        <IndustriesSection />
        <ServicesSection />
        <WhyIcanio />
        <div className="relative text-xs box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full mt-0 px-2.5 md:text-[15.2px] md:leading-[22.8px] md:mt-[-395.2px]">
          <div className="text-xs items-center box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-center leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)]">
            <div className="relative text-xs box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[18px] gap-y-5 w-full p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
              <div className="relative text-xs box-border caret-transparent gap-x-5 hidden leading-[18px] max-w-full min-h-0 gap-y-5 text-center md:text-[15.2px] md:block md:leading-[22.8px] md:min-h-[auto]">
                <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                  <img
                    src="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005532-1024x942.png"
                    alt="Why Icanio"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="text-xs aspect-[auto_1024_/_942] box-border caret-transparent inline-block leading-[18px] max-w-full w-6/12 md:text-[15.2px] md:leading-[22.8px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-xs box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full mx-0 px-[1%] md:text-[15.2px] md:leading-[22.8px] md:mx-auto">
          <div className="text-xs box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-[3%] md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)]">
            <div className="relative text-xs box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[18px] gap-y-5 w-full p-[0%] md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
              <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-center md:text-[15.2px] md:leading-[22.8px]">
                <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                  <img
                    src="https://c.animaapp.com/mi528nt4yktW0u/assets/Mask-group-4.png"
                    alt="Icanio Group"
                    sizes="(max-width: 2080px) 100vw, 2080px"
                    className="text-xs aspect-[auto_2080_/_800] box-border caret-transparent inline-block leading-[18px] max-w-full w-full md:text-[15.2px] md:leading-[22.8px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <StatsSection />
        <ProjectsSection />
        <TeamSection />
        <BuildSomething />
        <TestimonialsSection />
        <PartnersCarousel />
        <div className="relative text-xs box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full mx-auto px-2.5 md:text-[15.2px] md:leading-[22.8px]">
          <div className="text-xs box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)]">
            <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px]">
              <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]"></div>
            </div>
          </div>
        </div>
        <div className="relative text-xs box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full mx-auto px-2.5 md:text-[15.2px] md:leading-[22.8px]">
          <div className="text-xs box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)]"></div>
        </div>
      </div>
      <div className="text-xs items-start box-border caret-transparent flex leading-[18px] max-w-full w-fit md:text-[15.2px] md:leading-[22.8px]">
        <ul className="relative text-xs box-border caret-transparent flex flex-wrap leading-[18px] list-none text-center w-fit pl-0 md:text-[15.2px] md:leading-[22.8px]"></ul>
      </div>
      <div className="text-xs box-border caret-transparent clear-both leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
        <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
          <Footer />
        </div>
      </div>
      <ContactModal />
    </body>
  );
};
