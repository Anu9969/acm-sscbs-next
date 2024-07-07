"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Department = () => {
    const people = [
        {
          id: 1,
          name: "Soubhagya Ranjan Mishra",
          designation: "Web Dev Lead",
          image:
          "https://cdn.statically.io/gh/vinitvijal/images-cdn/main/16.png",
        },
        {
          id: 2,
          name: "Deepali Deepak Sharma",
          designation: "Design Lead",
          image:
          "https://cdn.statically.io/gh/vinitvijal/images-cdn/main/20.png",
        },
        {
          id: 3,
          name: "Aashi Bansal",
          designation: "PR Lead",
          image:
            "https://cdn.statically.io/gh/vinitvijal/images-cdn/main/aashi.png",
        },

        {
          id: 4,
          name: "Sumona Biswas",
          designation: "Web Master",
          image:
          "https://cdn.statically.io/gh/vinitvijal/images-cdn/main/17.png",

        },
      ];
  return (
    <section className=" flex flex-col px-4 w-full min-h-screen gap-10 select-none">
      <div className=" w-full flex justify-center items-center flex-col gap-3">
        <h1 className=" text-6xl font-bold">Our Departments</h1>
        <h1 className=" text-lg font-medium text-zinc-400">
          Explore the diverse areas of focus within SSCBS - ACM
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-8">
        <div className="relative bg-black flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border m-auto bg-background p-20 md:shadow-xl">
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b to-[#f6ea41] via-[#ff2975] from-[#f048c6] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            Web Dev
          </span>
          <div className=" absolute bottom-2 flex gap-4 items-center ">
            <h1>Lead By</h1>
          <AnimatedTooltip className="" items={[people[0],people[3]]} />
          </div>
        <RetroGrid />
        </div>

        <div className="relative bg-black flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border  m-auto bg-background p-20 md:shadow-xl">
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            Graphic Design
          </span>
          <div className=" absolute bottom-2 flex gap-4 items-center ">
            <h1>Lead By</h1>
          <AnimatedTooltip className="" items={[people[1]]} />
          </div>
          <RetroGrid />
        </div>

        <div className="relative bg-black flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border  m-auto bg-background p-20 md:shadow-xl">
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#9618f7] via-[#ff2975] to-[#5d69e8] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            Public Relations
          </span>
          <div className=" absolute bottom-2 flex gap-4 items-center ">
            <h1>Lead By</h1>
          <AnimatedTooltip className="" items={[people[2]]} />
          </div>
          <RetroGrid />
        </div>
      </div>
    </section>
  );
};

export default Department;
