import { useEffect, useState, useRef } from "react";

export const TrustedBrands = () => {
  const originalLogos = [
    "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661213.png",
    "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661210.png",
    "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661216.png",
    "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661206.png",
    "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661211.png",
    "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661204.png",
    "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661214.png",
    "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661205.png",
    "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661215.png",
    "https://c.animaapp.com/mi528nt4yktW0u/assets/Group-2085661207.png",
  ];

  const logos = [...originalLogos, ...originalLogos];

  const [index, setIndex] = useState(1);

  // refs
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  // Desktop dimensions
  const LOGO_WIDTH = 180;
  const GAP = 110;
  const STEP = LOGO_WIDTH + GAP;

  // Slide every 1.5s
  useEffect(() => {
    const int = setInterval(() => setIndex((prev) => prev + 1), 1500);
    return () => clearInterval(int);
  }, []);

  useEffect(() => {
    if (index >= originalLogos.length + 1) {
      const el = desktopRef.current;
      if (!el) return;

      setTimeout(() => {
        el.style.transition = "none";
        setIndex(1);
        setTimeout(() => (el.style.transition = "transform 0.6s ease"), 50);
      }, 600);
    }
  }, [index]);

  useEffect(() => {
    if (index >= originalLogos.length + 1) {
      const el = mobileRef.current;
      if (!el) return;

      setTimeout(() => {
        el.style.transition = "none";
        setIndex(1); 
        setTimeout(() => (el.style.transition = "transform 0.6s ease"), 50);
      }, 600);
    }
  }, [index]);

  return (
    <div className="w-full py-16 bg-white">
      <h2 className="text-center text-xl font-semibold mb-10">
        Trusted by 100+ Global Brands
      </h2>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex justify-center">
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div
            ref={desktopRef}
            className="flex transition-transform duration-700"
            style={{
              gap: `${GAP}px`,
              paddingLeft: STEP,
              paddingRight: STEP,
              transform: `translateX(-${index * STEP}px)`,
            }}
          >
            {logos.map((src, i) => (
              <img
                key={i}
                src={src}
                style={{
                  width: LOGO_WIDTH,
                  height: 80,
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block md:hidden overflow-hidden w-full flex justify-center">
        <div
          ref={mobileRef}
          className="flex transition-transform duration-700 w-full"
          style={{
            transform: `translateX(-${(index - 1) * 100}%)`,
          }}
        >
          {logos.map((src, i) => (
            <div key={i} className="w-full flex justify-center shrink-0 px-6">
              <img src={src} className="w-40 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
