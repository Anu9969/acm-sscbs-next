import BoxReveal from '@/components/magicui/box-reveal';
import GradualSpacing from '@/components/magicui/gradual-spacing'
import prisma from '@/prisma/prismaclient'
import Image from 'next/image';
import React from 'react'
import { FcElectricity, FcEngineering, FcSportsMode } from 'react-icons/fc';

async function Page({ params }: { params: { memberId: string;} }) {
    const member = await prisma.members.findUnique({
        where: {
            id: parseInt(params.memberId)
        }
    })
  return (
    <main className=' pt-16 min-h-screen w-full'>
        <GradualSpacing
          className="font-display text-center text-6xl mt-10 font-bold tracking-[-0.1em]  text-zinc-300"
          text={`Meet ${member?.nickName ? member.nickName.split("&")[0] + " ✨" : member?.name?.split(' ')[0]} `}
        />
        <div className="flex p-10  min-h-screen justify-center items-center">
          <div className=' h-full flex flex-col gap-4 w-2/3 p-10'>
          <BoxReveal boxColor={"#604CC3"} duration={0.5}>
            <h1 className=' text-[#604CC3] text-8xl font-bold flex gap-4'>{member?.name}</h1>
            </BoxReveal>
            <BoxReveal boxColor={"#604CC3"} duration={0.5}>
                <h1 className=' flex gap-1 text-xl font-light mb-10'>{member?.bio}</h1>
            </BoxReveal>
            <BoxReveal boxColor={"#FFF6E9"} duration={0.5}>
              
            <span className=' flex gap-2 text-2xl font-semibold '><span className=' flex items-start gap-2'><FcEngineering/>Role:</span> <p className=' text-zinc-400'>{member?.role}</p></span>
            </BoxReveal>
            <BoxReveal boxColor={"#FFF6E9"} duration={0.5}>
            <span className=' flex gap-2  text-2xl font-semibold '><span className=' flex text-nowrap items-start gap-2'><FcSportsMode/>Hobbies:</span> <p className=' text-zinc-400'>{member?.hobbies}</p></span>
            </BoxReveal>
            <BoxReveal boxColor={"#FFF6E9"} duration={0.5}>
            <span className=' flex  gap-2  text-2xl font-semibold '><span className=' text-nowrap flex items-startsWith gap-2'><FcElectricity/>Interesting Facts:</span> <p className=' text-zinc-400'>{member?.interests}</p></span>
            </BoxReveal>
          </div>
          <div className=' h-full w-1/3'>
            <Image src={member?.image ? member?.image : "https://cdn.statically.io/gh/vinitvijal/images-cdn/main/11.png" } alt="alt" width={500} height={500} />
          </div>
        </div>
    </main>
  )
}

export default Page




//replaced item center with item start for alignment 