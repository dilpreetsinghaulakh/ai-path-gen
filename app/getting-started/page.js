"use client";

import Link from "next/link";

export default function GettingStarted() {
  let apiKey;
  return (
    <main
      className=" max-w-7xl mx-auto px-8 sm:px-16 w-screen"
      id="mainContent"
    >
      <div className="flex flex-col items-center h-full gap-10 justify-center">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Before you continue...
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-3xl">
          This page uses OpenAI&apos;s API to generate the learning paths. The
          API is not free and I used to use the free credits but OpenAI have now
          stopped giving any free credits. 😔
        </p>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-3xl">
          If you want to continue using this page, you will need to create an
          OpenAI account and get your API key. You can then add your API key
          here.
        </p>

        <input
          type="text"
          placeholder="API Key"
          className="w-full xl:w-1/2 text-center p-4 bg-gray-100 dark:bg-neutral-900 text-black dark:text-white border-2 border-gray-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 transition-colors"
          value={apiKey}
          onChange={(value) => (apiKey = value.target.value)}
        />

        <Link
          href={"knowledge"}
          onClick={(e) => {
            if (!apiKey) {
              alert("Please add your API key");
              e.preventDefault();
            } else {
              sessionStorage.setItem("apiKey", apiKey);
            }
          }}
          className="px-12 py-4 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-gray-200 font-bold active:scale-[0.98] active:duration-200 transition"
        >
          Continue
        </Link>
      </div>
    </main>
  );
}
