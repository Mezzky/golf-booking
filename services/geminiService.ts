
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the GoogleGenAI client using the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Creates a chat session with the specified system instruction.
 * The instruction is passed as a parameter since SYSTEM_INSTRUCTION was not exported from data.tsx.
 * @param systemInstruction The prompt guiding the model's behavior.
 */
export const createChatSession = (systemInstruction: string): Chat => {
  return ai.chats.create({
    // Using gemini-3-flash-preview for general assistant tasks as per guidelines.
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
    },
  });
};

/**
 * Sends a message to an existing chat session and returns the text response.
 * @param chat The Chat object created by createChatSession.
 * @param message The user's message.
 */
export const sendMessage = async (chat: Chat, message: string): Promise<string> => {
  try {
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    // Access the .text property directly from the response (not as a method call).
    return result.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm having trouble connecting to the tour database right now. Please try again later.";
  }
};
