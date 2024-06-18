'use client'
import React from "react";
import { Fade } from "react-awesome-reveal";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import Image from "next/image";
import Link from "next/link";
import WordFadeIn from "@/components/magicui/word-fade-in";
import Department from "@/components/Departments";

function Page() {
  return (
    <main className=" min-h-screen w-screen scroll-smooth">
      <section className=" relative select-none flex justify-center items-center flex-col h-screen w-screen">
        <Fade triggerOnce={true} duration={1500}>
          <p className=" md:text-9xl text-7xl bg-clip-text text-transparent font-extrabold bg-gradient-to-b from-white to-gray-500/80">
            ACM
          </p>
        </Fade>
        <GradualSpacing
          className="font-display text-center md:text-3xl text-xl font-bold tracking-[-0.1em]  text-zinc-300"
          text=" The Computer Science Chapter of SSCBS"
        />
        <button onClick={()=>{window.scroll({
       top: 750,
       behavior: 'smooth'
    })}} className="button scroll-smooth absolute bottom-4" >
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      </section>
      <section className=" z-20 flex h-screen w-screen flex-col md:flex-row" id="about">
        <div className=" flex flex-col  justify-center items-center md:w-1/2 w-full px-5 h-full">
          <Fade triggerOnce={true} duration={1500}>
            <h1 className=" text-6xl font-bold text-zinc-300">About Us</h1>
          </Fade>
          <Fade triggerOnce={true} duration={1500} delay={500}>
            <WordFadeIn
              className="text-zinc-300 text-lg px-10 text-center"
              words="The Association for Computing Machinery (ACM) is an international learned society for computing. It was founded in 1947, and is the world's largest scientific and educational computing society. The ACM is a non-profit professional membership group, claiming nearly 100,000 student and professional members as of 2019. Its headquarters are in New York City. "
            />
          </Fade>
          <Link href={"/about"} className="boton-elegante mt-5">
            Know More !
          </Link>
        </div>
        <div className=" w-2/5 h-full px-0 hidden md:flex items-center">
          <Image
            src="/images/team.png"
            alt="about"
            className=" object-cover w-full"
            height={1000}
            width={1000}
          />
        </div>
      </section>
      <Department />
    </main>
  );
}

export default Page;
