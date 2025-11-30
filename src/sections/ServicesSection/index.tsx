import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <div className="relative text-xs box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full -mt-9 px-[1%] md:text-[15.2px] md:leading-[22.8px] md:mt-0 before:accent-auto before:bg-[url('https://icanio.com/wp-content/uploads/2025/10/Group-2085661191-1.png')] before:bg-top before:bg-no-repeat before:bg-cover before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-xs before:not-italic before:normal-nums before:font-normal before:h-[max(100%_+_0px,100%)] before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:opacity-50 before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[max(100%_+_0px,100%)] before:border-separate before:left-0 before:top-0 before:font-apple_system before:md:text-[15.2px] before:md:leading-[22.8px]">
      <div className="text-xs box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto pt-[6%] pb-[3%] md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)]">
        <div className="relative text-xs box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[18px] gap-y-5 w-full p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
          <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-center md:text-[15.2px] md:leading-[22.8px]">
            <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
              <h2 className="text-zinc-900 text-[32px] font-bold box-border caret-transparent clear-both leading-8 font-sf_pro_display_bold">
                We Code Futures
              </h2>
            </div>
          </div>
          <div className="relative text-zinc-900/80 text-base box-border caret-transparent gap-x-5 leading-6 max-w-full gap-y-5 text-center font-sf_pro_display_regular">
            <div className="box-border caret-transparent h-full mt-[-8.4px] md:mt-[-10.64px]">
              AI-driven Software Development for Smart Business Growth{" "}
            </div>
          </div>
        </div>
        <div className="relative text-xs box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[18px] gap-y-5 w-full -mt-6 p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:mt-[-30.4px]">
          <div className="relative text-xs items-center box-border caret-transparent gap-x-0 flex flex-wrap justify-between leading-[18px] gap-y-0 w-full p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
            <div className="relative text-xs box-border caret-transparent gap-x-0 hidden leading-[18px] max-w-full min-h-0 gap-y-0 text-left md:text-[15.2px] md:block md:leading-[22.8px] md:min-h-[auto]">
              <div className="text-xs box-border caret-transparent h-full leading-[18px] -mr-3 md:text-[15.2px] md:leading-[22.8px] md:mr-[-15.2px]">
                <img
                  src="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005529-820x1024.png"
                  alt="Services"
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="text-xs aspect-[auto_820_/_1024] box-border caret-transparent inline-block leading-[18px] max-w-full w-[820px] md:text-[15.2px] md:leading-[22.8px]"
                />
              </div>
            </div>
            <div className="relative text-xs content-start box-border caret-transparent gap-x-5 grid shrink-0 grid-cols-[repeat(1,1fr)] grid-rows-[repeat(2,1fr)] justify-start leading-[18px] gap-y-5 w-full p-2.5 md:text-[15.2px] md:grid-cols-[repeat(2,1fr)] md:leading-[22.8px] md:w-[64%]">
              <ServiceCard
                imageUrl="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005365-1.png"
                imageAlt="Data and Artificial Intelligence"
                title="Data and Artificial Intelligence"
                description="Leveraging Machine Learning, AI models, and AI Automation, our team of Software Developers enables intelligent business outcomes."
                linkHref="/services"
              />
              <ServiceCard
                imageUrl="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005367.png"
                imageAlt="Mob & Web Application Development"
                title="Mob & Web Application Development"
                description="A trusted software development company in Tamil Nadu, crafting custom software solutions for performance and user excellence."
                linkHref="/application-development"
              />
              <ServiceCard
                imageUrl="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005366.png"
                imageAlt="DevOps and Cloud Engineering"
                title="DevOps and Cloud Engineering"
                description="Our DevOps and Cloud experts streamline delivery with Infrastructure-as-Code, Cloud Migration, and Continuous Integration for faster innovation."
                linkHref="/devops-cloud-engineering"
              />
              <ServiceCard
                imageUrl="https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000005371-1.png"
                imageAlt="Technical Support Engineering"
                imageSizeVariant="aspect-[auto_116_/_116]"
                title="Technical Support Engineering"
                description="Through DevOps Automation and AI-based monitoring, our technical support engineers ensure seamless, secure operations."
                linkHref="/support-engineering"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
