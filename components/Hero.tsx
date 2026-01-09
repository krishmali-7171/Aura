
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#D6D1C7]">
      
      {/* Background Image - 2026 Organic Aesthetic */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2000" 
            alt="Bio-harmonious texture" 
            className="w-full h-full object-cover grayscale contrast-[0.8] brightness-[0.9] scale-110 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        {/* Iridescent Layer for 2026 "Oil-on-Water" trend */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#433E38]/50 via-transparent to-[#2C2A26]/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#F5F2EB]/10 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6">
        <div className="animate-fade-in-up w-full md:w-auto">
          <span className="block text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-white/80 mb-6 backdrop-blur-md bg-white/5 px-6 py-2 rounded-full mx-0 md:mx-auto w-fit border border-white/10">
            Bio-Harmonious 2026
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-white tracking-tight mb-8 drop-shadow-sm leading-[0.9]">
            Grown <br className="md:hidden" /> <span className="italic text-[#F5F2EB] font-light">to flow.</span>
          </h1>
          <p className="max-w-xl mx-0 md:mx-auto text-lg md:text-xl text-white/90 font-light leading-relaxed mb-12 text-shadow-sm">
            Invisible interfaces. Living materials. <br/>
            Technology that doesn't just work, but <span className="italic underline underline-offset-4">breathes</span> with you.
          </p>
          
          <a 
            href="#products" 
            onClick={(e) => handleNavClick(e, 'products')}
            className="group relative px-12 py-5 bg-white text-[#2C2A26] rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-[#F5F2EB] transition-all duration-700 overflow-hidden shadow-2xl hover:shadow-white/20 inline-block"
          >
            <span className="relative z-10 group-hover:tracking-[0.25em] transition-all duration-500">Explore Collection</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
