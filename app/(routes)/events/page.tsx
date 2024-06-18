import BlurIn from "@/components/magicui/blur-in";
import BoxReveal from "@/components/magicui/box-reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CgArrowTopRight, CgCalendarDue } from "react-icons/cg";
import { BiCalendarEdit } from "react-icons/bi";
import { BsCalendar2Event, BsCalendarEvent } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbCalendarEvent } from "react-icons/tb";
import { LuCalendarSearch } from "react-icons/lu";
import { FcCalendar, FcCollaboration } from "react-icons/fc";
import EventCard from "@/components/EventCard";

function Page() {
  return (
    <main className=" min-h-screen w-screen pt-16">
      <section className=" h-[60vh] w-full flex flex-col justify-center items-center">
        <h1 className=" ">Tech Fest of SSCBS</h1>
        <h2>Coming Soon...</h2>
      </section>
      <section className="min-h-screen w-full p-20 px-56">
        <BlurIn
          word="Past Events"
          className=" px-16 text-6xl m-4 mb-10 bg-clip-text text-transparent font-extrabold bg-gradient-to-b from-white to-gray-500/80"
        />
        <EventCard
          imgUrl="https://cdn.statically.io/gh/vinitvijal/images-cdn/main/codetwist1.jpeg"
          title="Code Twist 2.0 - Coding Competition"
          date="1st May 2024"
          oraganisers={[
            "Muskan Goyal (Coordinator)",
            "Rishav Raj (President)",
          ]}
          left={true}
        />
        <EventCard
          imgUrl="https://cdn.statically.io/gh/vinitvijal/images-cdn/main/ideagem1.jpg"
          link="/events/Ideagem"
          title="Ideagem 1.0 - Tech Strategic Ideathon"
          date="29th February 2024"
          oraganisers={[
            "Vineet (Coordinator)",
            "Muskan Goyal (Coordinator)",
            "Rishav Raj (President)",
          ]}
          left={false}
        />
        <EventCard
          imgUrl="https://cdn.statically.io/gh/vinitvijal/images-cdn/main/codemystique.png"
          // link="/events/Ideagem"
          title="CodeMystique 1.0 - Coding Supreme Challenge"
          date="23th November 2023"
          oraganisers={[
            "Vineet (Coordinator)",
            "Muskan Goyal (Coordinator)",
          ]}
          left={true}
        />
        <EventCard
          imgUrl="https://cdn.statically.io/gh/vinitvijal/images-cdn/main/ideagem1.jpg"
          // link="/events/Ideagem"
          title="ACM Insider 1.0 - Competitive Coding"
          date="23th November 2023"
          oraganisers={[
            "Vineet (Coordinator)",
            // "Rishav Raj (President)",
          ]}
          left={false}
        />
      </section>
    </main>
  );
}

export default Page;
