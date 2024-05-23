"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page({
  params: { occupation, proficiency },
}: {
  params: { occupation: string; proficiency: string };
}) {
  const [scene, setScene] = useState(0); // 0~124
  const step = Math.floor(scene / 25); //0~4
  const situation = Math.floor((scene % 25) / 5); //0~4
  const utterance = scene % 5; //0~4

  const [scenario, setScenario] = useState(null);

  useEffect(() => {
    axios
      .get(
        `/api/ai/sentences?occupation=${occupation}&proficiency=${proficiency}`
      )
      .then((response) => response.data)
      .then(setScenario);
  }, []);

  return !scenario ? (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="loader loader-black loader-4" />
    </div>
  ) : (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">{scenario.role}</h1>
        <p className="text-lg">{scenario.occupation}</p>
        <p className="text-lg">{scenario.proficiency}</p>
        <p className="text-lg">역할: {scenario.role}</p>
        <p className="text-lg">{scenario.mission}</p>
      </header>

      <section className="max-w-4xl mx-auto">
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Current Scene : {scene}</h2>
          <button
            className="px-4 py-2 bg-blue-500 text-white text-lg rounded-md mr-2"
            onClick={() => {
              if (scene < 124) setScene(scene + 1);
            }}
          >
            +
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white text-lg rounded-md"
            onClick={() => {
              if (scene > 1) setScene(scene - 1);
            }}
          >
            -
          </button>
        </div>
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Mission Progress</h2>
          <div className="relative pt-1">
            <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{
                  width: `${((step + 1) / scenario.steps.length) * 100}%`,
                }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
            <ul className="list-disc pl-5 mt-4 progress-steps">
              {scenario.steps.map((stepText, index) => (
                <li
                  key={index}
                  className={`${step === index ? "font-bold" : ""}`}
                >
                  {stepText}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded shadow p-6">
          <h2 className="text-2xl font-bold mb-4">{scenario.steps[step]}</h2>
          <ul className="list-disc pl-5 mb-4">
            {scenario.situations[step].map((situationText, index) => (
              <li
                key={index}
                className={
                  "mb-2" + (situation === index ? " font-bold" : " font-normal")
                }
              >
                {situationText}
                {situation === index ? (
                  <ul className="list-disc pl-5">
                    {scenario.utterances[step][situation].map(
                      (utteranceText, uindex) => (
                        <li
                          key={index}
                          className={
                            "mb-2" +
                            (utterance === uindex
                              ? " font-bold"
                              : " font-normal")
                          }
                        >
                          {utteranceText}
                        </li>
                      )
                    )}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
