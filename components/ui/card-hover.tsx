import { cn } from "@/lib/utils";
import { Members } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export const HoverEffect = ({
  members,
  className,
}: {
  members: Members[] | undefined;
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!members) return null;

  return (
    <div className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-4  py-10",
        className
      )}
    >
      {members?.map((item, idx) => (
        <Link
          href={item?.id ? `/team/${item.id}` : "/"}
          key={idx}
          className="relative group block p-1 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className=" z-10">
            <div className=" flex flex-col">
            <h1 className=" flex w-full justify-center"><AnimatedShinyText className=" text-xl font-semibold transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"><span>{item.role}</span></AnimatedShinyText></h1>
                <Image src={item.image ? item.image : "https://cdn.statically.io/gh/vinitvijal/images-cdn/main/11.png"} alt="profile" className=" w-full" width={1000} height={1000} />
                <div className=" font-medium">
                    <h1 className=" flex gap-2">Name:  <AnimatedShinyText className="transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"><span>{item.name} ✨</span></AnimatedShinyText></h1>
                    <h1 className=" flex gap-2">Code Name: <AnimatedShinyText className="transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"><span>{item.nickName ? item.nickName : "🤫 Encrypted"}</span></AnimatedShinyText></h1>
                    <h1 className=" flex w-full mt-2 justify-center"><AnimatedShinyText className="transition font-light ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"><span>{item.email}</span></AnimatedShinyText></h1>
                    <div className=" mt-4 flex gap-5">
                        {item.linkedin && <Link target="_blank" href={item.linkedin}><BsLinkedin size={25}/></Link>}
                        {item.instagram && <Link target="_blank" href={item.instagram}><BsInstagram size={25}/></Link>}
                        {item.github && <Link target="_blank" href={item.github}><BsGithub size={25}/></Link>}

                    </div>
                </div>
            </div>
            
          </Card>
        </Link>
      ))}
    </div>

  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
