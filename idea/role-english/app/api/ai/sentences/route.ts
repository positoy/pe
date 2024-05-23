import { NextRequest } from "next/server";

import fs from "fs";
import OpenAI from "openai";
import EXAMPLES from "@/app/lib/EXAMPLES";

console.log(__dirname);
const openai = new OpenAI({
  apiKey: fs
    .readFileSync(`${__dirname}/../../../../../openai/apikey`)
    .toString(),
});

const OPENAI_MODEL = "gpt-4o";
const OPENAI_MAX_TOKENS = 4095;
let CACHE: any = {};

// const queryEnglishSentences = async (
//   occupation: string,
//   proficiency: string
// ) => {
//   console.log(
//     `fetching openai api... occupation:${occupation}, proficiency:${proficiency}`
//   );
//   const completion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: "system",
//         content:
//           "You are an English assistant who helps users learn English. When the user enters their occupation and English proficiency, show them example sentences that could be used in a professional environment. ",
//       },
//       {
//         role: "user",
//         content:
//           "When users enter their job and English skills, you automatically generate sentences that can be used in job situations. The sentences created at this time are created according to the three English proficiency levels.\n \
//               beginner: English level of American kindergarten students\n \
//               intermediate: English level of elementary school students in the United States\n \
//               advanced: English level of American high school students\n \
//               expert: English level of American college students",
//       },
//       {
//         role: "user",
//         content:
//           "The response must include the role that can be assigned to the user, five steps to achieve the purpose of the role, and five specific situations that may occur in each step. Lastly, in utterances, create 5 example sentences that can be used in each situation.\n \
//               role: Role that can be given to the user\n \
//               steps: Steps to achieve the purpose of the role\n \
//               situations: specific situations that may occur at each stage\n \
//               utterance: English sentences that may occur during work in each situation",
//       },
//       {
//         role: "user",
//         content: JSON.stringify(EXAMPLES.job_sentence.input),
//       },
//       {
//         role: "assistant",
//         content: JSON.stringify(EXAMPLES.job_sentence.input),
//       },
//       {
//         role: "user",
//         content:
//           "Now, I will suggest you another request.\
//             My occupation and English proficiency will be suggested.\
//             You respond me with 1 role, 5 steps, 5 situations for each step, 5 utterances for each situation in JSON format. total 125 utterances are expected.\
//             And make it sure the response is perfectly JSON formatted.\
//             The response must be in JSON format.",
//       },
//       {
//         role: "user",
//         content: JSON.stringify({ occupation, proficiency }),
//       },
//     ],
//     model: OPENAI_MODEL,
//     max_tokens: OPENAI_MAX_TOKENS,
//   });
//   return completion.choices[0].message.content;
// };

// const getCachedEnglishSetence = async (
//   occupation: string,
//   proficiency: string
// ) => {
//   console.log(occupation, proficiency);
//   console.log("getCachedEnglishSetence");
//   const hash = `english_sentence:${occupation}:${proficiency}`;
//   return hash;
//   if (!CACHE.hasOwnProperty(hash)) {
//     CACHE[hash] = await queryEnglishSentences(occupation, proficiency);
//   }
//   return CACHE[hash];
// };

export async function GET(request: NextRequest) {
  const occupation = request.nextUrl.searchParams.get("occupation");
  const proficiency = request.nextUrl.searchParams.get("proficiency");
  console.log("occupation:", occupation, "proficiency:", proficiency);

  // const completion = await openai.chat.completions.create({
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "You are an English assistant who helps users learn English. When the user enters their occupation and English proficiency, show them example sentences that could be used in a professional environment. ",
  //     },
  //     {
  //       role: "user",
  //       content:
  //         "When users enter their job and English skills, you automatically generate sentences that can be used in job situations. The sentences created at this time are created according to the three English proficiency levels.\n \
  //             beginner: English level of American kindergarten students\n \
  //             intermediate: English level of elementary school students in the United States\n \
  //             advanced: English level of American high school students\n \
  //             expert: English level of American college students",
  //     },
  //     {
  //       role: "user",
  //       content:
  //         "The response must include the role that can be assigned to the user, five steps to achieve the purpose of the role, and five specific situations that may occur in each step. Lastly, in utterances, create 5 example sentences that can be used in each situation.\n \
  //             role: Role that can be given to the user\n \
  //             steps: Steps to achieve the purpose of the role\n \
  //             situations: specific situations that may occur at each stage\n \
  //             utterance: English sentences that may occur during work in each situation",
  //     },
  //     {
  //       role: "user",
  //       content: JSON.stringify(EXAMPLES.job_sentence.input),
  //     },
  //     {
  //       role: "assistant",
  //       content: JSON.stringify(EXAMPLES.job_sentence.input),
  //     },
  //     {
  //       role: "user",
  //       content:
  //         "Now, I will suggest you another request.\
  //           My occupation and English proficiency will be suggested.\
  //           You respond me with 1 role, 5 steps, 5 situations for each step, 5 utterances for each situation in JSON format. total 125 utterances are expected.\
  //           And make it sure the response is perfectly JSON formatted.\
  //           The response must be in JSON format.",
  //     },
  //     {
  //       role: "user",
  //       content: JSON.stringify({ occupation, proficiency }),
  //     },
  //   ],
  //   model: OPENAI_MODEL,
  //   max_tokens: OPENAI_MAX_TOKENS,
  // });

  // console.log(completion.choices[0].message.content);

  return Response.json({ occupation, proficiency });
  // queryEnglishSentences(occupation, proficiency).then((response) => {
  //   console.log(response);
  //   Response.json(response);
  // });
  // await getCachedEnglishSetence(occupation, proficiency);
  // queryEnglishSentences(occupation, proficiency).then(console.log);
  // return Response.json({});
  // try {
  //   console.log("1111111");
  //   const result = getCachedEnglishSetence(occupation, proficiency);
  //   console.log("222222222");

  //   console.log(result);
  //   return Response.json(result);
  // } catch (e) {
  //   console.error(e);
  // }
}
