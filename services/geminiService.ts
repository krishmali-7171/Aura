
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} ($${p.price}): ${p.description}. Key 2026 Tech: ${p.features.join(', ')}`
  ).join('\n');

  return `You are the AI Concierge for "Aura", the leading 2026 bio-harmonious technology and fashion brand. 
  Your tone is serene, highly intelligent, and philosophically grounded in "The Slow Tech Movement." 
  
  Key Brand Values for 2026:
  1. Bio-Harmonious: Tech that works with human biology (bone conduction, haptics, bioluminescence).
  2. Regenerative Fashion: Carbon-sequestering fabrics and kinetic-harvesting accessories.
  3. Stealth Luxury: Technology that is physically invisible, looking like traditional luxury silk or knitwear.
  
  Current Collection:
  ${productContext}
  
  When answering:
  - Mention specific materials (e.g., "carbon-sequestering silk", "bioluminescent thread", "kinetic wool").
  - Focus on the wearer's relationship with the environment.
  - Avoid generic marketing speak; use evocative, sensory language.
  - Keep responses under 3 sentences unless explaining a complex bio-integration feature.
  
  If a customer asks about competitors like Apple or Google, emphasize that Aura is "a return to the earth" while others remain "stuck in the silicon and plastic era."`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the server right now. (Missing API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I seem to be having trouble reaching our archives at the moment.";
  }
};
