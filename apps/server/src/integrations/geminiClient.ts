import { GoogleGenAI } from "@google/genai";
import type { Gemini } from "../interface/gemini.interface.ts";
import dotenv from "dotenv";

dotenv.config();

const config: Gemini = {
  apiKey: process.env.GEMINI_API_KEY!,
};

const ai = new GoogleGenAI({
  apiKey: config.apiKey,
});

export default ai;
