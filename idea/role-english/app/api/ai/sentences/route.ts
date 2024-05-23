import { NextRequest } from "next/server";
import { getCachedEnglishSetence } from "@/app/lib/openai";

export async function GET(request: NextRequest) {
  const occupation = request.nextUrl.searchParams.get("occupation");
  const proficiency = request.nextUrl.searchParams.get("proficiency");
  const sentences = await getCachedEnglishSetence(occupation!, proficiency!);

  console.log("setences", sentences);

  return Response.json(JSON.parse(sentences));
}
