
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('campaigns');

  return (
    <div className="min-h-screen bg-[#1A1917] text-[#F5F2EB] pt-24 pb-12 px-6 md:px-12 animate-fade-in-up">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#A8A29E] block mb-2">Internal Access</span>
            <h1 className="text-4xl md:text-5xl font-serif">Growth & Strategy Portal</h1>
          </div>
          
          <div className="flex gap-4 p-1 bg-[#2C2A26] rounded-full border border-white/5">
            {['campaigns', 'targeting', 'analytics'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-500 ${
                  activeTab === tab ? 'bg-[#F5F2EB] text-[#1A1917]' : 'text-[#A8A29E] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'campaigns' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Campaign Summary */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#2C2A26] p-8 border border-white/5 rounded-2xl">
                <h2 className="text-xl font-serif mb-6">Active Campaign Structures</h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div>
                      <p className="text-sm font-medium">Spring Mycelium Launch</p>
                      <p className="text-[10px] uppercase tracking-widest text-[#A8A29E]">Neural-Search Campaign</p>
                    </div>
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div>
                      <p className="text-sm font-medium">Kinetic Nomad Awareness</p>
                      <p className="text-[10px] uppercase tracking-widest text-[#A8A29E]">Ambient-Display</p>
                    </div>
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                  </div>
                </div>
                <button className="w-full mt-8 py-4 border border-[#A8A29E]/30 text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-colors">
                  + Initialise New Campaign
                </button>
              </div>

              <div className="bg-[#D6D1C7] p-8 text-[#1A1917] rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Current Ad Groupings</h3>
                <ul className="space-y-4 text-sm font-light">
                  <li className="flex justify-between border-b border-black/10 pb-2">
                    <span>Regenerative Wear</span>
                    <span className="font-mono">14 Ads</span>
                  </li>
                  <li className="flex justify-between border-b border-black/10 pb-2">
                    <span>Silent Audio Home</span>
                    <span className="font-mono">08 Ads</span>
                  </li>
                  <li className="flex justify-between border-b border-black/10 pb-2">
                    <span>Bio-Luminescent Eve</span>
                    <span className="font-mono">22 Ads</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Targeting Details */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-[#2C2A26] p-8 border border-white/5 rounded-2xl">
                <h2 className="text-2xl font-serif mb-8 text-[#F5F2EB]">Display Network & Contextual Logic</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]">Managed Placements</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Dezeen Bio-Tech', 'Vogue Regenerative', 'Wired Deep-Nature', 'EarthSanctuary.io'].map(p => (
                        <span key={p} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] rounded-full">{p}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#A8A29E]">Audience Groups</h3>
                    <div className="flex flex-wrap gap-2">
                      {['The Regeneratist', 'Post-Plastic Gen', 'Kinetic Nomad', 'Bio-Digital Native'].map(a => (
                        <span key={a} className="px-3 py-1 bg-[#F5F2EB]/10 border border-[#F5F2EB]/20 text-[10px] rounded-full text-[#F5F2EB]">{a}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-8 border border-white/10 rounded-2xl">
                  <h3 className="text-xl font-serif mb-6">Location & Language</h3>
                  <div className="space-y-4">
                    <p className="text-xs text-[#A8A29E] leading-relaxed">Global targeting focused on high-density bio-corridors and regenerative urban hubs.</p>
                    <div className="flex justify-between items-center text-xs">
                      <span>Primary: Zurich, Tokyo, Seattle</span>
                      <span className="text-[#A8A29E]">Active</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span>Languages: EN, DE, JP, FR</span>
                      <span className="text-[#A8A29E]">Active</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1917] p-8 border border-white/20 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5F2EB]/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all duration-1000 group-hover:scale-150"></div>
                  <h3 className="text-xl font-serif mb-4 relative z-10">Neural Matching</h3>
                  <p className="text-xs text-[#A8A29E] relative z-10 font-light">
                    Proprietary 2026 Semantic Engine. Current match efficiency: <span className="text-[#F5F2EB] font-mono">98.4%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'targeting' && (
          <div className="bg-[#2C2A26] p-8 md:p-12 border border-white/5 rounded-3xl animate-fade-in-up">
            <h2 className="text-3xl font-serif mb-12">Keyword Strategy & Exclusions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#A8A29E] border-b border-white/10 pb-2">Targeting Keywords</h3>
                <ul className="space-y-3">
                  {[
                    {t: 'carbon-sequestering silk', m: 'Semantic'},
                    {t: 'mycelium luxury', m: 'Exact'},
                    {t: 'bone conduction headband', m: 'Neural-Broad'},
                    {t: 'regenerative fashion 2026', m: 'Semantic'},
                    {t: 'silent living technology', m: 'Exact'}
                  ].map((kw, i) => (
                    <li key={i} className="flex justify-between items-center text-sm p-3 bg-white/5 rounded-lg border border-white/5">
                      <span className="font-light">{kw.t}</span>
                      <span className="text-[8px] uppercase tracking-tighter bg-[#F5F2EB] text-[#1A1917] px-2 py-0.5 rounded">{kw.m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-red-400 border-b border-red-400/20 pb-2">Negative Keywords</h3>
                <ul className="space-y-3 opacity-60">
                  {['fast fashion', 'plastic apparel', 'polyester', 'disposable tech', 'cheap luxury'].map((kw, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm p-3 border border-white/10 rounded-lg italic">
                      <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                      {kw}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#D6D1C7] p-8 text-[#1A1917] rounded-2xl flex flex-col justify-between">
                <div>
                   <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4">Targeting Logic</h3>
                   <p className="text-sm font-light leading-relaxed">
                     Our keywords focus on "Intent over Identity". We target users looking for a <strong>specific biological harmony</strong>, not just a product category.
                   </p>
                </div>
                <div className="mt-8 pt-8 border-t border-black/10">
                   <p className="text-[10px] uppercase tracking-widest opacity-60">Match Threshold</p>
                   <div className="w-full h-1 bg-black/10 mt-2 rounded-full overflow-hidden">
                     <div className="w-[85%] h-full bg-[#1A1917]"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-[#2C2A26] p-8 md:p-16 border border-white/5 rounded-3xl animate-fade-in-up">
             <div className="max-w-4xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#A8A29E] block mb-8">Project Manifesto</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-12 border-b border-white/10 pb-12">The Aura 2026 Vision</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-[#F5F2EB] font-bold mb-4">Core Objective</h3>
                      <p className="text-sm font-light leading-relaxed text-[#A8A29E]">
                        Aura is a conceptual ecosystem where technology moves from silicon to biology. We represent a paradigm shift: "Invisible Tech" that interacts with human rhythms instead of demanding attention.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-[#F5F2EB] font-bold mb-4">The Collection</h3>
                      <p className="text-sm font-light leading-relaxed text-[#A8A29E]">
                        Our product line utilizes regenerative materials—carbon-sequestering silk, lab-grown mycelium, and bone-conduction interfaces. Every object is designed to age into a unique patina.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-[#F5F2EB] font-bold mb-4">AI Intelligence</h3>
                      <p className="text-sm font-light leading-relaxed text-[#A8A29E]">
                        Driven by Google Gemini 3 Flash, our Brand Concierge acts as a curator of "Slow Tech," providing consultations on mental load reduction and biometric harmony.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-[#F5F2EB] font-bold mb-4">Strategic Logic</h3>
                      <p className="text-sm font-light leading-relaxed text-[#A8A29E]">
                        The Growth Portal utilizes Neural-Sync matching and Circadian targeting to reach global hubs without disrupting the user's digital sanctuary.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-20 p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
                   <div className="text-center md:text-left">
                     <p className="text-[10px] uppercase tracking-widest text-[#A8A29E] mb-1">Architecture Status</p>
                     <p className="text-sm font-mono text-green-400">System Fully Regenerative</p>
                   </div>
                   <div className="text-center md:text-left">
                     <p className="text-[10px] uppercase tracking-widest text-[#A8A29E] mb-1">Stack Integrity</p>
                     <p className="text-sm font-mono">React 19 / Gemini 3 / TW 4</p>
                   </div>
                   <div className="text-center md:text-left">
                     <p className="text-[10px] uppercase tracking-widest text-[#A8A29E] mb-1">2026 Readiness</p>
                     <p className="text-sm font-mono">100% Intent-Synced</p>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
