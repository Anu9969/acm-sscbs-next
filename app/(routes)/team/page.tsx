'use client'
import React, { useEffect, useState } from "react";
import TextReveal from "@/components/magicui/reveal";
import IconCloud from "@/components/magicui/icon-cloud";
import { Fade } from "react-awesome-reveal";
import { HoverEffect } from "@/components/ui/card-hover";
import { Members } from "@prisma/client";
import { fetchMembers } from "@/actions/members";



function Page() {
  const [allMembers, setallMembers] = useState<Members[]>();
  async function getMembers() {
    const response = await fetchMembers();
    console.log(response);
    setallMembers(response);
  }
  useEffect(() => {
    console.log("object")
    getMembers();
  }, []);


  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  return (
    <main className="z-30 min-h-screen ">
      <div className=" h-[200vh] w-full flex justify-between relative ">
        <TextReveal text="Introducing the Wizards of Code: Meet Our Brilliant Computer Science Team! " />
        <div className=" flex h-screen w-1/2 max-w-[32rem] items-center justify-center flex-col gap-20 overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
          <button onClick={()=>{window.scroll({
       top: 1000,
       behavior: 'smooth'
    })}} className="button scroll-smooth before:content-['Meet'] bottom-4 " >
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
        </div>
      </div>
      <section className=" min-h-screen w-full">
        <Fade  duration={1500}>
          <p className=" px-16 text-9xl bg-clip-text text-transparent font-extrabold bg-gradient-to-b from-white to-gray-500/80">
            Advisory Committee Team
          </p>
        </Fade>
        <div className="max-w-7xl mx-auto px-8">
      <HoverEffect members={allMembers?.filter((e)=>{return e.batch==="2025"})} />
    </div>
      </section>

      <section className=" mt-24 min-h-screen w-full">
        <Fade  duration={1500}>
          <p className=" px-16 text-9xl bg-clip-text text-transparent font-extrabold bg-gradient-to-b from-white to-gray-500/80">
            Core Committee Team
          </p>
        </Fade>
        <div className="max-w-7xl mx-auto px-8">
        <HoverEffect members={allMembers?.filter((e)=>{return e.batch==="2026"})} />
        </div>
      </section>
    </main>
  );
}

export default Page;
