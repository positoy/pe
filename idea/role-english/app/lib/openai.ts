import OpenAI from "openai";
import PROMPTS from "./PROMPTS";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const OPENAI_MODEL = "gpt-4o";
const OPENAI_MAX_TOKENS = 4095;
let CACHE: any = {};

const queryEnglishSentences = async (
  occupation: string,
  proficiency: string
) => {
  const completion = await openai.chat.completions.create({
    messages: [
      ...PROMPTS.ask_for_english_job_sentences,
      {
        role: "user",
        content: JSON.stringify({ occupation, proficiency }),
      },
    ],
    response_format: { type: "json_object" },
    model: OPENAI_MODEL,
    max_tokens: OPENAI_MAX_TOKENS,
  });
  return completion.choices[0].message.content;
};

const getCachedEnglishSetence = async (
  occupation: string,
  proficiency: string
) => {
  const hash = `english_sentence:${occupation}:${proficiency}`;
  if (!CACHE.hasOwnProperty(hash)) {
    CACHE[hash] = await queryEnglishSentences(occupation, proficiency);
  }
  return CACHE[hash];
};

export { getCachedEnglishSetence };
