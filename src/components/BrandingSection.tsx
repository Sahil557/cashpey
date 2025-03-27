import { useState, useEffect } from "react";
import SocialTap from "./common/SocialTap";
import AnimatedWaves from "./common/AnimatedWaves";

const BrandingSection: React.FC = () => {
  const texts: string[] = ["CashPey", "कैशपे", "காஷ்பே"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 900);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="hidden xl:block absolute bottom-0 left-40 overflow-hidden">
        <AnimatedWaves/>
      </div>
    <div className="md:w-5/12 w-full px-4 md:px-10 bg-gradient-to-bl from-[#2800ff] to-[#6377ff] text-white flex flex-col text-center md:text-left md:min-h-screen">
      {/* Header */}
      
      <div className="py-4 md:py-16 flex-none">
        <div className="h-8 sm:h-12">
          <h1
            key={currentIndex}
            className={`text-3xl md:text-[2.5rem] font-semibold transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            {texts[currentIndex]}
          </h1>
        </div>
        <p className="text-md md:text-lg">India's Own Loan</p>
      </div>

      {/* Main Content */}
      <div className="md:flex-1 py-2 flex">
        <p className="mx-auto md:mx-0 lg:mr-auto text-xl sm:text-3xl lg:text-5xl leading-[1.2]">
          Take Control <br /> Of Your Finances <br /> Anytime, Anywhere
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="py-4 md:pb-10 flex-none">
        <div className="flex gap-4 justify-center md:justify-start">
          <SocialTap type="facebook" onClick={() => console.log("Facebook clicked")} />
          <SocialTap type="instagram" onClick={() => console.log("Instagram clicked")} />
          <SocialTap type="youtube" onClick={() => console.log("YouTube clicked")} />
        </div>
      </div>
    </div>
    </>
  );
};

export default BrandingSection;
