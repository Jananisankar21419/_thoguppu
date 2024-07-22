import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Container 269.svg"; // Adjust path as needed
import Content from "../Content";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#C6BEAC]">
      {/* Logo on the top left */}
      <div className="absolute top-0 left-0 p-10">
        <Image
          src={Logo}
          alt="Logo"
          width={50} // Adjust width as needed
          height={50} // Adjust height as needed
          style={{ objectFit: "contain" }} // Ensure logo scales correctly
        />
      </div>

      {/* Logo on the top right */}
      <div className="absolute top-0 right-0 p-8">
        <Image
          src={Logo}
          alt="Logo"
          width={50} // Adjust width as needed
          height={50} // Adjust height as needed
          style={{ objectFit: "contain" }} // Ensure logo scales correctly
        />
      </div>

      {/* Content */}
      <Content />
    </footer>
  );
}
