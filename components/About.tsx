
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE]">
      
      {/* Introduction / 2026 Philosophy */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] leading-[1.1]">
            Grown in the lab, <br/> polished by the hand.
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            In 2026, we have moved beyond sustainable. Aura is now a <strong>regenerative</strong> brand. We believe technology shouldn't just minimize harm; it should actively heal.
          </p>
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            Our latest collection uses mycelium cultures that sequester carbon and bone-conduction interfaces that respect your biological rhythms. We design objects that feel like an extension of your own skin.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=1260&h=750&dpr=1" 
            alt="Bio-fabrication lab" 
            className="w-full h-[500px] object-cover grayscale brightness-110 mt-12 hover:grayscale-0 transition-all duration-1000"
          />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#A8A29E] mt-6">
            Aura Bio-Foundry, Zurich
          </p>
        </div>
      </div>

      {/* Philosophy Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200" 
             alt="Oxidized Textures" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
           />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#D6D1C7]">
           <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#5D5A53] mb-6">Materiality 2.0</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C2A26] leading-tight">
             Embracing the Patina.
           </h3>
           <p className="text-lg text-[#5D5A53] font-light leading-relaxed mb-12 max-w-md">
             We use raw copper, porous sandstone, and unbleached silk. These materials don't stay perfect; they evolve with you, gaining a story and a soul as they age.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#2C2A26] text-[#F5F2EB]">
           <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#A8A29E] mb-6">Bio-Feedback</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] leading-tight">
             Sentient Interfaces.
           </h3>
           <p className="text-lg text-[#A8A29E] font-light leading-relaxed mb-12 max-w-md">
             Our wearables don't just track data; they respond. Feel a gentle warmth when you reach your meditation goal, or a soft tightening of your Aura Wrap when your posture needs correcting.
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1260&h=750&dpr=1" 
             alt="Bio-integrated home office" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-75"
           />
        </div>
      </div>
    </section>
  );
};

export default About;
