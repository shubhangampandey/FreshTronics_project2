import React from "react";
import { Button } from "@/components/ui/button";

export const BuildSomething: React.FC = () => {
  return (
    <section className="relative bg-[#050b14] text-white py-12 md:py-16 overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-[1200px]">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-[42px] lg:text-[48px] font-bold mb-3 md:mb-5 text-white leading-tight">
            Let's Build Something the World Remembers
          </h2>
          <p className="text-[#b8bcc8] text-[15px] md:text-[17px] max-w-3xl mx-auto leading-relaxed px-4">
            Whether you're an idea-stage founder or a tech-savvy enterprise, we're ready to make
            magic with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1150px] mx-auto">
          {/* Resources Card */}
          <div className="group relative bg-[#0d1520] border-2 border-[#ff4444]/40 rounded-[16px] p-5 md:p-7 hover:border-[#ff4444] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,68,68,0.3)] min-h-[280px] flex flex-col">
            <div className="mb-3">
              <span className="inline-block bg-[#ff4444]/15 text-[#ffb3b3] px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide">
                Resources
              </span>
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold mb-2 text-white leading-snug">
              Learn, explore, get inspired
            </h3>
            <p className="text-[#9ca3af] text-[13px] md:text-[14px] mb-5 leading-relaxed flex-grow">
              Explore our library of case studies, and insights.
            </p>
            <Button
              variant="outline"
              className="border-[#4a5568] bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white rounded-[8px] px-5 py-2 text-[13px] font-medium transition-all duration-300 w-fit"
            >
              Browse More
            </Button>
          </div>

          {/* Support Team Card */}
          <div className="group relative bg-[#0d1520] border-2 border-[#ff8c42]/40 rounded-[16px] p-5 md:p-7 hover:border-[#ff8c42] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,140,66,0.3)] min-h-[280px] flex flex-col">
            <div className="mb-3">
              <span className="inline-block bg-[#ff8c42]/15 text-[#ffd4b3] px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide">
                Support Team
              </span>
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold mb-2 text-white leading-snug">
              Talk to a Tech Expert
            </h3>
            <p className="text-[#9ca3af] text-[13px] md:text-[14px] mb-5 leading-relaxed flex-grow">
              Connect with our solutions specialist to explore how Freshtronics can power your vision.
            </p>
            <Button
              variant="outline"
              className="border-[#4a5568] bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white rounded-[8px] px-6 py-2.5 text-[14px] font-medium transition-all duration-300 w-fit"
            >
              Contact Us
            </Button>
          </div>

          {/* Our Services Card */}
          <div className="group relative bg-[#0d1520] border-2 border-[#4ade80]/40 rounded-[16px] p-5 md:p-7 hover:border-[#4ade80] transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] min-h-[280px] flex flex-col">
            <div className="mb-3">
              <span className="inline-block bg-[#4ade80]/15 text-[#bbf7d0] px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide">
                Our Services
              </span>
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold mb-2 text-white leading-snug">
              What We Offer
            </h3>
            <p className="text-[#9ca3af] text-[13px] md:text-[14px] mb-5 leading-relaxed flex-grow">
              Explore cutting-edge IT services crafted to solve real-world challenges.
            </p>
            <Button
              variant="outline"
              className="border-[#4a5568] bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white rounded-[8px] px-5 py-2 text-[13px] font-medium transition-all duration-300 w-fit"
            >
              Browse More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
