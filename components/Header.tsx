import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className=" fixed h-16 w-full border-b px-5 border-zinc-600 bg-black z-20 ">
      <nav className=" flex justify-between items-center h-full w-full">
        <p className=" text-zinc-300 text-2xl font-bold ">ACM</p>
        <ul className=" flex justify-between items-center h-full w-1/2">
          <Link href={'/'} className=" text-zinc-300 text-lg m-auto  hover:font-semibold">
            Home
          </Link>
          <Link  href={'/about'}  className=" text-zinc-300 text-lg m-auto hover:font-semibold">
            About
          </Link>
          <Link  href={'/events'}  className=" text-zinc-300 text-lg m-auto hover:font-semibold">
            Events
          </Link>
          <Link  href={'/'}  className=" text-zinc-300 text-lg m-auto hover:font-semibold">
            Meet The Team
          </Link>
          <Link href={'/contact'} className=" text-zinc-300 text-lg m-auto hover:font-semibold">
            Contact
          </Link>
          <Link href={'/'}  className="btn" type="button">
            <strong>JOIN US</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
