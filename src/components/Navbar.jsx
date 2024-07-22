import React from "react";

export default function NavBar() {
  return (
    <header className="fixed top-0 right-0 z-50 flex w-full items-center justify-between px-5 py-8">
      <nav className="flex w-full items-center justify-end space-x-7">
        <a
          className="relative group flex items-center hover:bg-transparent font-mono text-bold text-[#ffffff]"
          href="/exhibit"
        >
          <span className="relative flex items-center">
            <span className="absolute bottom-2 h-[0.15em]  w-0 bg-secondary-700 opacity-90 transition-all group-hover:w-full"></span>
            <span className="ml-3 sm:text-[3.5vw] lg:text-[3.5vw] xl:text-[1.5vw]">
              -- thoguppu
            </span>{" "}
          </span>
        </a>
      </nav>
    </header>
  );
}
