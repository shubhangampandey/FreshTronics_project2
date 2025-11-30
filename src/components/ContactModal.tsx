import { ContactForm } from "@/components/ContactForm";

export const ContactModal = () => {
  return (
    <div
      role="dialog"
      className="fixed text-base bg-white box-border caret-transparent hidden h-full leading-[normal] w-full z-[1999999999] bg-[position:0px_0px] inset-0"
    >
      <div className="absolute bg-stone-50 shadow-[rgba(2,2,2,0.23)_1px_1px_3px_0px] box-border caret-transparent ml-[-47.5%] w-[95%] z-[1999999999] bg-[position:0px_0px] mb-12 p-[18px] left-2/4 top-[100px] md:ml-[-30%] md:w-3/5">
        <div className="relative text-neutral-400 box-border caret-transparent z-[1] bg-[position:0px_0px]">
          <ContactForm />
          <p className="box-border caret-transparent"></p>
        </div>
        <button
          type="button"
          aria-label="Close"
          className="absolute text-white text-xs bg-cyan-500 shadow-[rgba(2,2,2,0.23)_1px_1px_3px_0px] caret-transparent block leading-9 min-w-3 text-center z-[2] bg-[position:0px_0px] p-2 right-0 top-0"
        >
          CLOSE{" "}
        </button>
      </div>
    </div>
  );
};
