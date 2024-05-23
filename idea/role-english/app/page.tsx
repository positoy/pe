"use client";
import { useState } from "react";
import Head from "next/head";
import axios from "axios";

type ProficiencyType = "beginner" | "intermediate" | "advanced" | "expert";

export default function Home() {
  const [occupation, setOccupation] = useState("");
  const [proficiency, setProficiency] = useState<ProficiencyType>("beginner");
  const [response, setResponse] = useState("");

  return response ? (
    <div>{JSON.stringify(response)}</div>
  ) : (
    <div>
      <Head>
        <title>Job and English Skill Form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold text-center">
            직업 및 영어실력 입력
          </h1>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .get(
                  `/api/ai/sentences?occupation=${occupation}&proficiency=${proficiency}`
                )
                .then((response) => setResponse(response.data));
            }}
          >
            <div>
              <label
                htmlFor="occupation"
                className="block text-sm font-medium text-gray-700"
              >
                직업:
              </label>
              <input
                type="text"
                id="occupation"
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="직업을 입력하세요"
              />
            </div>
            <div>
              <label
                htmlFor="englishProficiency"
                className="block text-sm font-medium text-gray-700"
              >
                영어실력:
              </label>
              <select
                id="englishProficiency"
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={proficiency}
                onChange={(e) =>
                  setProficiency(e.target.value as ProficiencyType)
                }
              >
                <option value="">선택하세요</option>
                <option value="beginner">초급</option>
                <option value="intermediate">중급</option>
                <option value="advanced">고급</option>
                <option value="expert">전문가</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              확인
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}