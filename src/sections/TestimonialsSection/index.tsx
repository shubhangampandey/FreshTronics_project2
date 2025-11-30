import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    logo: "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000004203.png",
    logoAlt: "Waterfield Advisors logo",
    title: "Provided Excellent Support and Guidance",
    content: "Freshtronics Technologies partnered with us to develop a custom software solution to handle our internal workflow, and the results have exceeded our expectations. Their expertise in understanding our needs and translating them into efficient, user-friendly software has been remarkable. Not only did they deliver a high-quality product, but they also provided excellent support and guidance every step of the way.",
    clientName: "Himanshu Maheshwari",
    clientTitle: "Executive Director - Business Support, Waterfield Advisors",
    clientImage: "https://c.animaapp.com/mi528nt4yktW0u/assets/Mask-group-3.png",
    quoteIcon: "https://c.animaapp.com/mi528nt4yktW0u/assets/Frame.png"
  },
  {
    id: 2,
    logo: "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-1000004203.png",
    logoAlt: "Fintrend logo",
    title: "Freshtronics has been fantastic. We're looking forward to more development opportunities ahead",
    content: "Just wanted to say your team is doing an outstanding job, always prompt, with no need for follow-ups or extra checks. The blogs are well-prepared and sent over on time for review and publishing. Special shoutout to the Team, even without a fintech background, they have been able to understand FinHub and deliver high-quality, relevant blog content.",
    clientName: "Sai Prakash",
    clientTitle: "CEO, Fintrend",
    clientImage: "https://c.animaapp.com/mi528nt4yktW0u/img/group-2085661189.png",
    quoteIcon: "https://c.animaapp.com/mi528nt4yktW0u/assets/Frame.png"
  },
  {
    id: 3,
    logo: "https://icanio.com/wp-content/uploads/2025/10/Group-2085661220.png",
    logoAlt: "Client logo",
    title: "Outstanding Quality and Professional Service",
    content: "Working with Freshtronics has been an exceptional experience. Their team demonstrated deep technical expertise and delivered solutions that exceeded our expectations. The attention to detail and commitment to quality is truly remarkable.",
    clientName: "Michael Roberts",
    clientTitle: "CTO, Tech Innovations Inc",
    clientImage: "https://c.animaapp.com/mi528nt4yktW0u/img/group-2085661188.png",
    quoteIcon: "https://c.animaapp.com/mi528nt4yktW0u/assets/Frame.png"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative text-xs box-border caret-transparent flex flex-col leading-[18px] max-w-full text-start w-full m-[0%] px-[1%] md:text-[15.2px] md:leading-[22.8px]">
      <div className="text-xs box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[18px] max-w-[min(100%,767px)] gap-y-5 w-full mx-auto pt-[6%] pb-[4%] md:text-[15.2px] md:flex-nowrap md:leading-[22.8px] md:max-w-[min(100%,1140px)]">
        <div className="relative text-xs items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[18px] gap-y-5 w-full p-2.5 md:text-[15.2px] md:flex-nowrap md:leading-[22.8px]">
          <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 text-center md:text-[15.2px] md:leading-[22.8px]">
            <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
              <h2 className="text-zinc-900 text-[32px] font-bold box-border caret-transparent clear-both leading-8 font-sf_pro_display_bold">
                What Our Clients Say
              </h2>
            </div>
          </div>
          <div className="relative text-zinc-900 text-base box-border caret-transparent gap-x-5 leading-6 max-w-full gap-y-5 text-center w-[94%] font-sf_pro_display_regular md:w-[58%]">
            <div className="box-border caret-transparent h-full mt-[-8.4px] md:mt-[-10.64px]">
              Don't just take our word for it hear how we've helped businesses
              innovate, scale, and succeed.{" "}
            </div>
          </div>
          <div className="relative text-xs box-border caret-transparent gap-x-5 leading-[18px] max-w-full gap-y-5 md:text-[15.2px] md:leading-[22.8px]">
            <div className="text-xs box-border caret-transparent h-full leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
              <section className="text-neutral-950 text-xs items-center box-border caret-transparent gap-x-7 grid grid-cols-[1fr] leading-[18px] gap-y-7 font-sf_pro_display md:text-[15.2px] md:grid-cols-[2.3fr_1.15fr] md:leading-[22.8px]">
                <div className="text-xs box-border caret-transparent leading-[18px] order-2 mt-0 px-4 md:text-[15.2px] md:leading-[22.8px] md:mt-[-56.24px] md:order-none md:px-0 transition-opacity duration-500">
                  <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                    <img
                      src={currentTestimonial.logo}
                      alt={currentTestimonial.logoAlt}
                      className="text-xs box-border caret-transparent leading-[18px] max-w-full object-contain w-[171px] rounded-[3px] md:text-[15.2px] md:leading-[22.8px]"
                    />
                  </div>
                  <h3 className="text-zinc-900 text-xl font-medium box-border caret-transparent clear-both leading-[30px] text-left my-2.5 md:text-2xl md:text-start">
                    {currentTestimonial.title}
                  </h3>
                  <p className="text-zinc-900/90 text-base box-border caret-transparent leading-[24.8px] text-left mb-3.5 md:text-neutral-700 md:text-[15.2px] md:leading-[23.56px] md:text-start">
                    {currentTestimonial.content}
                  </p>
                  <hr className="text-zinc-500 text-xs border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 box-border caret-transparent h-0 leading-[18px] py-2 border-t-black/10 border-b-0 border-x-0 md:text-[15.2px] md:leading-[22.8px]" />
                  <div className="text-xs items-start box-border caret-transparent gap-x-2.5 flex justify-start leading-[18px] gap-y-2.5 md:text-[15.2px] md:justify-normal md:leading-[22.8px]">
                    <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                      <img
                        src={currentTestimonial.quoteIcon}
                        alt="Quote Icon"
                        className="text-xs box-border caret-transparent h-16 leading-[18px] max-w-full w-16 md:text-[15.2px] md:leading-[22.8px]"
                      />
                    </div>
                    <div className="text-xs box-border caret-transparent leading-[18px] md:text-[15.2px] md:leading-[22.8px]">
                      <div className="text-zinc-900 text-xl font-medium box-border caret-transparent leading-[30px]">
                        {currentTestimonial.clientName}
                      </div>
                      <div className="text-zinc-900/80 text-base box-border caret-transparent leading-6 mt-0.5">
                        {currentTestimonial.clientTitle}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-xs items-center box-border caret-transparent gap-x-3.5 flex flex-col leading-[18px] order-1 gap-y-3.5 text-center md:text-[15.2px] md:items-end md:leading-[22.8px] md:order-none md:text-start">
                  <img
                    src={currentTestimonial.clientImage}
                    alt={`${currentTestimonial.clientName} photo`}
                    className="text-xs bg-gray-50 shadow-[rgba(0,0,0,0.12)_0px_20px_50px_0px] box-border caret-transparent leading-[18px] max-w-[330px] min-h-[250px] object-cover text-center w-full border border-slate-200 mx-auto rounded-xl border-solid md:text-[15.2px] md:leading-[22.8px] md:min-h-[300px] md:text-start md:w-auto md:mx-0 transition-opacity duration-500"
                  />
                  <div className="text-xs items-center box-border caret-transparent gap-x-5 flex justify-center leading-[18px] min-h-0 min-w-0 gap-y-5 w-full mt-4 md:text-[15.2px] md:leading-[22.8px] md:min-h-[auto] md:min-w-[auto] md:w-[min(330px,100%)] md:mt-5">
                    <button
                      onClick={handlePrevious}
                      aria-label="Previous"
                      className="relative text-zinc-800 text-xs items-center bg-white shadow-[rgba(0,0,0,0.1)_0px_2px_8px_0px] caret-transparent flex h-10 justify-center leading-[18px] text-center w-10 z-10 border border-neutral-200 rounded-[50%] border-solid md:text-[15.2px] md:leading-[22.8px] hover:bg-gray-50 hover:shadow-[rgba(0,0,0,0.15)_0px_4px_12px_0px] cursor-pointer transition-all duration-300"
                    >
                      <img
                        src="https://c.animaapp.com/mi528nt4yktW0u/assets/icon-4.svg"
                        alt="Icon"
                        className="text-xs box-border caret-transparent h-[18px] leading-[18px] w-[18px] md:text-[15.2px] md:leading-[22.8px]"
                      />
                    </button>
                    <div className="text-xs items-center box-border caret-transparent gap-x-3 flex h-1 leading-[18px] min-w-[120px] gap-y-3 md:text-[15.2px] md:leading-[22.8px]">
                      {testimonials.map((_, index) => (
                        <span
                          key={index}
                          className={`text-xs box-border caret-transparent block h-1 leading-[18px] w-6 rounded-sm transition-colors duration-300 md:text-[15.2px] md:leading-[22.8px] ${
                            index === currentIndex ? "bg-cyan-800" : "bg-slate-300"
                          }`}
                        ></span>
                      ))}
                    </div>
                    <button
                      onClick={handleNext}
                      aria-label="Next"
                      className="relative text-zinc-800 text-xs items-center bg-white shadow-[rgba(0,0,0,0.1)_0px_2px_8px_0px] caret-transparent flex h-10 justify-center leading-[18px] text-center w-10 z-10 border border-neutral-200 rounded-[50%] border-solid md:text-[15.2px] md:leading-[22.8px] hover:bg-gray-50 hover:shadow-[rgba(0,0,0,0.15)_0px_4px_12px_0px] cursor-pointer transition-all duration-300"
                    >
                      <img
                        src="https://c.animaapp.com/mi528nt4yktW0u/assets/icon-5.svg"
                        alt="Icon"
                        className="text-xs box-border caret-transparent h-[18px] leading-[18px] w-[18px] md:text-[15.2px] md:leading-[22.8px]"
                      />
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
