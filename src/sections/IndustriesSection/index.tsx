import { IndustryCard } from "@/sections/IndustriesSection/components/IndustryCard";

export const IndustriesSection = () => {
  return (
    <div className="relative text-xs bg-[linear-gradient(0deg,rgb(255,255,255)_89.73%,rgb(245,251,255)_99.7%)] box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full mx-auto px-[1%] md:text-[15.2px] md:leading-[22.8px]">
      <div className="text-xs box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-[6%] md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)]">
        <div className="relative text-xs box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[18px] gap-y-5 w-full p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
          <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-center md:text-[15.2px] md:leading-[22.8px]">
            <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
              <h2 className="text-zinc-900 text-[32px] font-bold box-border caret-transparent clear-both leading-8 font-sf_pro_display_bold">
                Startups to Enterprises, We Empower All
              </h2>
            </div>
          </div>
          <div className="relative text-zinc-900/80 text-base box-border caret-transparent gap-x-5 leading-6 max-w-full gap-y-5 text-center font-sf_pro_display_regular">
            <div className="box-border caret-transparent h-full mt-[-8.4px] md:mt-[-10.64px]">
              From disruptive startups to global enterprises, we partner with
              businesses across industries to fuel digital transformation.{" "}
            </div>
          </div>
          <div className="relative text-xs content-start box-border caret-transparent gap-x-5 grid grid-cols-[repeat(1,1fr)] grid-rows-[repeat(2,1fr)] justify-start leading-[18px] gap-y-5 w-full p-2.5 md:text-[15.2px] md:grid-cols-[repeat(3,1fr)] md:leading-[22.8px]">
            <IndustryCard
              title="Education & E-Learning"
              description="Designing engaging, accessible, and adaptive learning platforms powered by AI to make education smarter and scalable."
              variant="bg-[url('https://i.ibb.co/rfMr4tv9/Group-1000005443.png')]"
            />
            <IndustryCard
              title="FinTech & Banking"
              description="From mobile wallets to enterprise-grade banking systems, we craft intelligent platforms that ensure speed, trust, and compliance."
              variant="bg-[url('https://i.ibb.co/Qvr8g50v/Group-1000005444.png')]"
            />
            <IndustryCard
              title="Retail & E-Commerce"
              description="Creating seamless shopping experiences with AI-driven personalization, smart inventory management, and secure payment systems."
              variant="bg-[url('https://i.ibb.co/wF7bqmD2/Group-1000005442.png')]"
            />
            <IndustryCard
              title="Healthcare"
              description="Building secure, AI-powered solutions that enhance patient care, streamline hospital operations, and transform medical data into actionable insights."
              variant="bg-[url('https://i.ibb.co/4gskwyHW/Group-1000005440.png')]"
            />
            <IndustryCard
              title="Transportation & Logistics"
              description="Optimizing supply chains with real-time tracking, predictive analytics, and automation to move businesses forward, faster."
              variant="bg-[url('https://i.ibb.co/B2QWkhnf/Group-1000005439.png')]"
            />
            <IndustryCard
              title="Manufacturing"
              description="Transforming factories into smart ecosystems with IoT, cloud, and AI for efficiency, safety, and predictive maintenance."
              variant="bg-[url('https://i.ibb.co/JR6hYkvT/Group-1000005441.png')]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
