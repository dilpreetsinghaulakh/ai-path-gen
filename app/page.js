"use client";
import { useRef } from "react";

export default function Home() {
  const languageInputRef = useRef(null);
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
        // onClick={handleClick}
        className="px-12 py-4 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-gray-200 font-bold active:scale-[0.98] active:duration-200 transition"
      >
        Get Path
      </button>
    </main>
  )
}
