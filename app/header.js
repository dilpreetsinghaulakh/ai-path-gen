import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto  px-8 sm:px-16 w-screen h-24 flex items-center justify-between">
      <Link
        href={"/"}
        className="font-bold text-xl text-gray-800 dark:text-gray-200"
      >
        AI Path Gen
      </Link>
      <a
        href="https://github.com/dilpreetsinghaulakh/ai-path-gen"
        target="blank"
        className="flex items-center px-4 pl-5 rounded-lg py-2 text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-neutral-900 transition-colors"
      >
        Github
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7H9M17 7V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </header>
  );
}
