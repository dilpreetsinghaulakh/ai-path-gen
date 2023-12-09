import Link from "next/link";

export default function GettingStarted() {
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
          API is not free and I am currently using the free credits but they are
          limited. So please don&apos;t misuse it. 🙏
        </p>
        <Link
          href={"knowledge"}
          className="px-12 py-4 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-gray-200 font-bold active:scale-[0.98] active:duration-200 transition"
        >
          I will not misuse
        </Link>
      </div>
    </main>
  );
}
