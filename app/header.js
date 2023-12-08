export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-16 w-screen h-24 flex items-center justify-between">
      <p className="font-bold text-xl text-gray-800 dark:text-gray-200">AI Path Gen</p>
      <a
        href="https://github.com/dilpreetsinghaulakh/ai-path-gen"
        target="blank"
        // className="flex items-center px-4 rounded-lg py-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
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
          {/* <g id="Arrow / Arrow_Up_Right_MD"> */}
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          {/* </g> */}
        </svg>
      </a>
    </header>
  );
}
