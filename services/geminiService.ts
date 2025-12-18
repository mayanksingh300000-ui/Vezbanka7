import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getTutorHelp = async (
  problemContext: string,
  userQuestion: string,
  history: { role: string; text: string }[] = []
): Promise<string> => {
  if (!apiKey) {
    return "API Key not configured. Please check your settings.";
  }

  try {
    const model = "gemini-3-flash-preview"; 
    
    // Construct prompt with context
    const systemInstruction = `
      You are a friendly and encouraging math tutor for 7th-grade students in North Macedonia.
      The student is working on a digital workbook about "Numbers and Operations" (Integers, inequalities, number lines).
      
      Rules:
      1. Answer in the Macedonian language (Македонски).
      2. Do not give the direct answer immediately. Guide the student to the solution.
      3. Use LaTeX formatting for math expressions where appropriate (wrapped in single $).
      4. Be concise and helpful.
      
      Current Problem Context:
      ${problemContext}
    `;

    const contents = [
      ...history.map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }]
      })),
      {
        role: 'user',
        parts: [{ text: userQuestion }]
      }
    ];

    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Се извинувам, не можам да го генерирам одговорот во моментов.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Настана грешка при комуникација со AI туторот.";
  }
};
