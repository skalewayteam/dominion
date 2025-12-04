import React from "react";
import PageTextHero from "../page-hero-text";
import Donate from "../donatebtn";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center px-4 lg:px-8 xl:px-20 pt-32 pb-20 overflow-hidden bg">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-white flex flex-col gap-6">
          <PageTextHero content="What we do" />
          <p className="text-lg lg:text-xl text-neutral-200 leading-relaxed max-w-3xl">
            Put a smile on the faces of these children
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
