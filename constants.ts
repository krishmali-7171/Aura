
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p7',
    name: 'Aura Solar-Silk Slip',
    tagline: 'Light-harvesting elegance.',
    description: 'A carbon-sequestering silk dress with integrated bio-luminescent threads.',
    longDescription: 'The pinnacle of 2026 regenerative fashion. This slip is woven from lab-engineered silk that captures ambient light to power micro-thermal regulators within the seams. The fabric actually sequesters carbon as you wear it, cleaning the air around you. Bioluminescent threads react to your circadian rhythm, glowing softly at dusk.',
    price: 1450,
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000',
    features: ['Carbon-Sequestering Silk', 'Bioluminescent Accents', 'Ambient Light Power']
  },
  {
    id: 'p8',
    name: 'Aura Kinetic Scarf',
    tagline: 'Energy in motion.',
    description: 'A heavy-knit organic wool scarf that converts movement into thermal warmth.',
    longDescription: 'For the Kinetic Nomad of 2026. This scarf utilizes piezo-electric fibers woven into raw, undyed organic wool. As you move through the city, the scarf harvests kinetic energy, storing it to provide gentle haptic warmth when the temperature drops below your set preference.',
    price: 320,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=1000',
    features: ['Kinetic Energy Harvesting', 'Raw Organic Wool', 'Haptic Thermal Sync']
  },
  {
    id: 'p9',
    name: 'Aura Mycelium Cinch',
    tagline: 'Structured bio-growth.',
    description: 'A minimalist belt crafted from high-density mycelium leather with posture-assist haptics.',
    longDescription: 'A stealth-luxury accessory that works on your core health. Crafted from our signature high-density mycelium leather, this cinch features a sub-surface bio-sensor. When it detects prolonged slouching, it emits a subsonic vibration—a gentle reminder to align your spine.',
    price: 285,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000',
    features: ['Zero-Waste Mycelium', 'Posture-Assist Tech', 'Oxidized Brass Buckle']
  },
  {
    id: 'p1',
    name: 'Aura Sonic Bloom',
    tagline: 'Audio through touch.',
    description: 'Bone-conduction audio embedded in a headband of organic, silver-threaded cotton.',
    longDescription: 'Forget the intrusion of earbuds. The Sonic Bloom uses micro-vibrations to deliver high-fidelity sound directly to your inner ear through your temples. Wrapped in a silver-threaded organic cotton that regulates skin temperature, it provides a soundstage that feels like it’s emanating from the air around you.',
    price: 549,
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1590658833571-aa2e72c1ad0d?auto=format&fit=crop&q=80&w=1000',
    features: ['Bone Conduction V4', 'Bio-Cotton Wrap', 'Carbon-Neutral Craft']
  },
  {
    id: 'p2',
    name: 'Aura Mycelium Wrap',
    tagline: 'Living textiles.',
    description: 'A smart wrap crafted from lab-grown mycelium leather with integrated thermal feedback.',
    longDescription: 'The 2026 standard in luxury wearables. This wrap is grown, not manufactured. Using advanced mycelium cultures, we’ve created a leather-alternative that is soft, durable, and sentient. Integrated haptic sensors gently vibrate to notify you of high stress levels, while the material itself tightens or loosens based on your body heat.',
    price: 890,
    category: 'Wearable',
    imageUrl: 'https://images.unsplash.com/photo-1539109132304-39257d2f91c3?auto=format&fit=crop&q=80&w=1000',
    features: ['Regenerative Material', 'Adaptive Thermal UI', 'Sub-dermal Haptics']
  },
  {
    id: 'p3',
    name: 'Aura Optic V3',
    tagline: 'Invisible augmentation.',
    description: 'AR glasses disguised as handcrafted titanium and walnut eyewear.',
    longDescription: 'We believe the digital world should enhance, not replace, the physical. Aura Optic V3 uses ultra-thin light-guide lenses to overlay subtle, paper-white data onto your field of vision. The frame is a masterwork of sandblasted titanium and sustainable American walnut, looking like classic luxury eyewear.',
    price: 1299,
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=1000',
    features: ['Ghost-Lens Tech', 'Binaural Voice-Sync', '48h Active AR']
  },
  {
    id: 'p4',
    name: 'Aura Essence Stone',
    tagline: 'The breath of the home.',
    description: 'A solid sandstone air-purifying sculpture that generates its own forest-microclimate.',
    longDescription: 'Aura Essence is more than a purifier; it’s a living lung for your home. Carved from a single block of porous sandstone, it houses a specialized biome of moss and lichen that scrubs CO2 and releases oxygen. Controlled via a silent haptic base, it diffuses the scent of damp earth and cedarwood.',
    price: 720,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1515814472071-4d632ff5d4a2?auto=format&fit=crop&q=80&w=1000',
    features: ['Bio-Filtration', 'Sandstone Architecture', 'Microclimate Control']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Age of Mycelium",
        date: "May 20, 2026",
        excerpt: "Why the future of fashion isn't sewn—it's grown in a lab.",
        image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "By 2026, the distinction between 'nature' and 'technology' has blurred. We no longer look at a piece of leather and see just a surface; we see a biological interface."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Lab-grown mycelium has moved from experimental niche to the vanguard of high fashion. At Aura, we’ve integrated conductive fungal hyphae into our fabrics, allowing the garment to sense its wearer."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
                "\"The smartest technology isn't silicon—it's carbon based.\""
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "This regenerative approach means our products don't just 'sustain' the environment; they actively repair it, sequestering carbon within the very objects you wear every day."
            )
        )
    },
    {
        id: 4,
        title: "Bioluminescence: The New Evening Wear",
        date: "June 12, 2026",
        excerpt: "Forget sequins. The future of shimmer is cellular.",
        image: "https://images.unsplash.com/photo-1516139008210-96e45dccd83b?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "For centuries, we used light-reflecting materials to stand out in the dark. In 2026, we are using light-emitting biology. Our new Solar-Silk series uses harmless, bioluminescent enzymes integrated into the thread."
            )
        )
    }
];

export const BRAND_NAME = 'Aura';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';
