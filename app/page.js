"use client";
import { useRef } from "react";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function Home() {
  const languageInputRef = useRef(null);

  function handleClick() {
    // TEST INPUT
    const input = `Give me the JSON for an array object called "ideas" containing ideas that suggest user 10 ideas to work on who know [${languageInputRef.current.value}] which are objects having title, description, skillLevel (0 for beginner, 1 for intermediate and 2 for advanced) and skills as keys.`;
    console.log(input);

    let ideas;

    async function result() {
      await openai.chat.completions
        .create({
          messages: [{ role: "system", content: input }],
          model: "gpt-3.5-turbo",
        })
        .then((res) => {
          ideas = JSON.parse(res.choices[0].message.content);

          console.log(ideas);
          return ideas;
        });
    }

    result().then();
  }

  const inputClass =
    "w-full p-4 bg-gray-200 dark:bg-neutral-900 text-black dark:text-white border-2 border-gray-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 transition-colors";

  return (
    <main className="flex flex-col items-center gap-4 justify-center max-w-7xl mx-auto px-16 w-screen h-screen">
      <input
        ref={languageInputRef}
        type="text"
        className={inputClass}
        placeholder="Languages you know separated by comma ( , )"
      />

      <button
        onClick={handleClick}
        className="px-12 py-4 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-gray-200 font-bold active:scale-[0.98] active:duration-200 transition"
      >
        Get Path
      </button>
    </main>
  );
}
