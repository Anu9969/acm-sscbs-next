"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <main className=" min-h-screen w-screen">
      
      <section className=" select-none flex justify-center items-center flex-col h-screen w-screen">
        <Fade triggerOnce={true} duration={1500}>
          <p className=" text-9xl bg-clip-text text-transparent font-extrabold bg-gradient-to-b from-white to-gray-500/80">ACM</p>
        </Fade>
        <GradualSpacing
          className="font-display text-center text-3xl font-bold tracking-[-0.1em]  text-zinc-300"
          text=" The Computer Science Chapter of SSCBS"
        />
      </section>
      <section className=" z-20 flex h-screen w-screen " id="about">
        <div className=" flex flex-col justify-center items-center w-1/2 px-5 h-full">
          <Fade triggerOnce={true} duration={1500}>
            <h1 className=" text-6xl font-bold text-zinc-300">About Us</h1>
          </Fade>
          <Fade triggerOnce={true} duration={1500} delay={500}>
            <p className=" text-zinc-300 text-lg text-center">
              The Association for Computing Machinery (ACM) is an international learned society for computing. It was founded in 1947, and is the world&apos;s largest scientific and educational computing society. The ACM is a non-profit professional membership group, claiming nearly 100,000 student and professional members as of 2019. Its headquarters are in New York City.
            </p>
          </Fade>
          <Link href={'/about'} className="boton-elegante mt-5">Know More !</Link>
        </div>
        <div className=" w-2/5 h-full px-0 flex items-center">
          <Image src="/images/team.png" alt="about" className=" object-cover w-full" height={1000} width={1000}  />
        </div>
      </section>
    </main>
  );
}

export default Page;
