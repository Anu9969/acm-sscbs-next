"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { BorderBeam } from "./magicui/border-beam";

const Department = () => {
    const people = [
        {
          id: 1,
          name: "Soubhagya Ranjan Mishra",
          designation: "Web Dev Lead",
          image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
          id: 2,
          name: "Deepali Deepak Sharma",
          designation: "Design Lead",
          image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 3,
          name: "Aashi Bansal",
          designation: "PR Lead",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "UX Designer",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 5,
          name: "Sumona Biswas",
          designation: "Web Master",
          image:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",

        },
        {
          id: 6,
          name: "Dora",
          designation: "The Explorer",
          image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",

        },
      ];
  return (
    <section className=" flex flex-col w-full h-screen gap-10">
      <div className=" w-full flex justify-center items-center flex-col gap-3">
        <h1 className=" text-6xl font-bold">Our Departments</h1>
        <h1 className=" text-lg font-medium text-zinc-400">
          Explore the diverse areas of focus within SSCBS - ACM
        </h1>
      </div>

      <div className=" grid grid-cols-3 p-10 gap-8">
        <div className="relative bg-black flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b to-[#f6ea41] via-[#ff2975] from-[#f048c6] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            Web Dev
          </span>
          <div className=" absolute bottom-2 flex gap-4 items-center ">
            <h1>Lead By</h1>
          <AnimatedTooltip className="" items={[people[0],people[4]]} />
          </div>
        <RetroGrid />
        <BorderBeam />
        </div>

        <div className="relative bg-black flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            Graphic Design
          </span>
          <div className=" absolute bottom-2 flex gap-4 items-center ">
            <h1>Lead By</h1>
          <AnimatedTooltip className="" items={[people[1]]} />
          </div>
          <BorderBeam  />
          <RetroGrid />
        </div>

        <div className="relative bg-black flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#9618f7] via-[#ff2975] to-[#5d69e8] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            Public Relations
          </span>
          <div className=" absolute bottom-2 flex gap-4 items-center ">
            <h1>Lead By</h1>
          <AnimatedTooltip className="" items={[people[2]]} />
          </div>
          <RetroGrid />
          <BorderBeam />
        </div>
      </div>
    </section>
  );
};

export default Department;
