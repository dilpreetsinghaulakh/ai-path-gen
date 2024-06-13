import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="h-16 flex justify-center items-center gap-6">
      <p>© {year} Dilpreet Singh</p>
      <div className="hidden sm:flex text-sm items-center  gap-2 bg-black border border-neutral-700 text-white px-4 py-2 rounded-lg">
        Built with{" "}
        <Image
          className="invert h-3 w-auto"
          src="/next.svg"
          alt="NextJS Logo"
          width={72}
          height={16}
        />
      </div>
    </footer>
  );
}
