"use client";
import { useRef } from "react";
import { OpenAI } from "openai";
import Link from "next/link";

// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

export default function Home() {
  // const languageInputRef = useRef(null);
  // const frameworkInputRef = useRef(null);

  // async function makeChatRequest(promptInput) {
  //   return openai.chat.completions.create({
  //     messages: [{ role: "system", content: promptInput }],
  //     model: "gpt-3.5-turbo",
  //   });
  // }

  // async function handleClick() {
  //   // TEST INPUT
  //   let prompt = `Give me the JSON for an array object called "paths" containing 10 learning paths that suggest user for learning new programming skills related to its knowledge which are in form of objects which have title, description and skills (new or old) as keys. The user knows [${languageInputRef.current.value}] languages.`;

  //   if (frameworkInputRef.current.value) {
  //     prompt += ` The user knows [${frameworkInputRef.current.value}] frameworks.`;
  //   }

  //   console.log(prompt);

  //   let ideas;

  //   const paths = await makeChatRequest(prompt)
  //     .then((res) => {
  //       ideas = res.choices[0].message.content;
  //       return Promise.resolve(ideas);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   console.log(paths);
  // }

  // const inputClass =
  //   "w-full p-4 bg-gray-100 dark:bg-neutral-900 text-black dark:text-white border-2 border-gray-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 transition-colors";

  return (
    <main>
      <div className=" max-w-7xl mx-auto px-16 w-screen" id="mainContent">
        <div className="flex flex-col items-center h-full gap-10 justify-center">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
            Learning Path Generator
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-3xl">
            This is an AI powered learning path generator which suggests you the
            best learning path for you to learn new programming skills based on
            your current knowledge. It uses GPT-3.5 to generate the learning
            paths.
          </p>

          <Link
            href="/getting-started"
            className="px-12 py-4 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-gray-200 font-bold active:scale-[0.98] active:duration-200 transition"
          >
            Lets Go!
          </Link>

          <p className="text-center text-gray-500 dark:text-gray-400 max-w-3xl">
            By Continuing you agree to OpenAI and its API{" "}
            <a
              href="https://openai.com/policies/terms-of-use"
              className="text-blue-500"
              target="blank"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://openai.com/policies/privacy-policy"
              className="text-blue-500"
              target="blank"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* <input
          ref={languageInputRef}
          type="text"
          className={inputClass}
          placeholder="Languages you know separated by comma ( , )"
        />

        <input
          ref={frameworkInputRef}
          type="text"
          className={inputClass}
          placeholder="Framework/Libraries you know separated by comma ( , )"
        />

        <button
          onClick={handleClick}
          className="px-12 py-4 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-gray-200 font-bold active:scale-[0.98] active:duration-200 transition"
        >
          Get Path
        </button> */}
      </div>
    </main>
  );
}
