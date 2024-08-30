'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

function Header() {
  const path = usePathname();
  console.log("path:" + path)
  return (
    <header className="fixed h-16 w-full border-b px-5 border-zinc-600 bg-black z-20">
      <nav className="flex justify-between items-center h-full w-full">
        <p className="text-zinc-300 text-2xl font-bold">ACM</p>
        <ul className="md:flex justify-between hidden items-center gap-4 h-full max-w-1/2 space-x-2">
          <Link href={'/'} className={cn("inline-block min-w-[60px] text-lg m-auto hover:font-semibold", path === '/' ? 'text-pink-400 font-semibold underline underline-offset-8' : 'text-zinc-300')}>
            Home
          </Link>
          
          <Link href={'/about'} className={cn("inline-block min-w-[60px] text-lg m-auto hover:font-semibold", path.startsWith('/about') ? 'text-pink-400 font-semibold underline underline-offset-8' : 'text-zinc-300')}>
            About
          </Link>
          <Link href={'/events'} className={cn("inline-block min-w-[60px] text-lg m-auto hover:font-semibold", path.startsWith('/events') ? 'text-pink-400 font-semibold underline underline-offset-8' : 'text-zinc-300')}>
            Events
          </Link>
          {/* <Link href={'/participations'} className={cn("link-item text-lg m-auto hover:font-semibold", path.startsWith('/participations') ? 'text-pink-400 font-semibold underline underline-offset-8' : 'text-zinc-300')}>
            Participation
          </Link> */}
          <Link href={'/team'} className={cn("inline-block min-w-[150px] text-lg m-auto hover:font-semibold", path.startsWith('/team') ? 'text-pink-400 font-semibold underline underline-offset-8' : 'text-zinc-300')}>
            Meet The Team
          </Link>
          <Link href={'/contact'} className={cn("inline-block min-w-[85px] text-lg m-auto hover:font-semibold", path.startsWith('/contact') ? 'text-pink-400 font-semibold underline underline-offset-8' : 'text-zinc-300')}>
            Contact
          </Link>
          <Link href={'/'} className="btn" type="button">
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
        <Drawer>
          <DrawerTrigger className="md:hidden text-zinc-300 text-2xl font-bold">☰</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <button>Submit</button>
              <DrawerClose>
                <button>Cancel</button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}

export default Header;



//Added inline block and min - width to the links for better alignment