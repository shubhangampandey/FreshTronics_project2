import { CTACard } from "@/sections/CTASection/components/CTACard";

export const CTASection = () => {
  return (
    <div className="relative text-xs bg-no-repeat bg-cover box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full mx-auto px-[1%] md:text-[15.2px] md:leading-[22.8px]">
      <div className="text-xs box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto pt-[6%] pb-[4%] md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)]">
        <div className="relative text-xs items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[18px] gap-y-5 w-full p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
          <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-center md:text-[15.2px] md:leading-[22.8px]">
            <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
              <h2 className="text-white text-[32px] font-bold box-border caret-transparent clear-both leading-8 font-sf_pro_display_bold">
                Let’s Build Something the World Remembers
              </h2>
            </div>
          </div>
          <div className="relative text-white/80 text-base box-border caret-transparent gap-x-5 leading-6 max-w-full gap-y-5 text-center w-full font-sf_pro_display_regular md:w-[51%]">
            <div className="box-border caret-transparent h-full mt-[-8.4px] md:mt-[-10.64px]">
              Whether you’re an idea-stage founder or a tech-savvy enterprise,
              we’re ready to make magic with you.{" "}
            </div>
          </div>
          <div className="relative text-xs items-center box-border caret-transparent gap-x-5 flex flex-wrap justify-between leading-[18px] gap-y-5 w-full p-[0%] md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
            <CTACard
              badgeText="Resources"
              badgeVariant="bg-stone-500"
              badgeHref="#"
              title="Learn, explore, get inspired"
              description="Explore our library of case studies,  and insights."
              ctaText="Browse More"
              ctaHref="/healthcare-ai-assistant-for-medical-professionals"
              cardVariant="pb-[35px] md:pb-10"
            />
            <CTACard
              badgeText="Support Team"
              badgeVariant="bg-stone-400"
              badgeHref="#"
              title="Talk to a Tech Expert"
              description="Connect with our solutions specialist to explore how Icanio can power your vision."
              ctaText="Contact Us"
              ctaHref="/contact-us"
              cardVariant="pb-[35px] md:pb-10"
            />
            <CTACard
              badgeText="Our Services"
              badgeVariant="bg-slate-400"
              badgeHref="#"
              title="What We Offer"
              description="Explore cutting-edge IT services crafted to solve real-world challenges."
              ctaText="Browse More"
              ctaHref="/services"
              cardVariant="pb-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
