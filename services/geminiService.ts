
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getDogTrainingAdvice = async (userPrompt: string): Promise<string> => {
  if (!API_KEY) {
    return "Desculpe, o serviço de consultoria IA não está configurado corretamente (API Key ausente).";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Você é o "Rex", um especialista em adestramento canino da plataforma 'Cão Sábio'. 
        Seu tom é amigável, encorajador e profissional. 
        Responda a perguntas sobre comportamento canino (latidos, xixi no lugar errado, ansiedade, comandos básicos).
        Sempre que possível, mencione que nossos cursos completos podem resolver esses problemas definitivamente. 
        Mantenha as respostas curtas e focadas em dicas práticas.`,
        temperature: 0.7,
      },
    });

    return response.text || "Não consegui processar sua dúvida agora. Tente novamente!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao consultar o especialista. Por favor, tente mais tarde.";
  }
};
