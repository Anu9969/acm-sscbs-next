import React from 'react'
import Link from 'next/link';
import BoxReveal from './magicui/box-reveal';
import { CardTitle, Card } from './ui/card';
import Image from 'next/image';
import { FcCalendar, FcCollaboration } from 'react-icons/fc';
import { CgArrowTopRight } from 'react-icons/cg';
import { cn } from '@/lib/utils';

function EventCard({imgUrl, title, date, oraganisers, link, left}: { imgUrl: string, title: string, date: string, oraganisers: string[], link?: string, left: boolean}) {
  return (
    <Card className={cn('flex min-h-60 w-full hover:-translate-y-1 border-none my-4 hover:shadow-lg duration-200 hover:shadow-zinc-800 relative rounded-xl from-zinc-950 to-zinc-900 ', left ? ' bg-gradient-to-r': ' flex-row-reverse bg-gradient-to-l ')}>
                <Image src={imgUrl} alt="alt" width={1000} height={1000} className={cn(' object-cover w-2/5 ', left ? 'rounded-l-2xl': 'rounded-r-2xl')} />
            <div className='w-3/5 h-full p-8 relative'>
              <BoxReveal boxColor={"#604CC3"} duration={0.5}>
                <CardTitle className=' text-3xl mb-4'>{title}</CardTitle>
              </BoxReveal>
              <BoxReveal boxColor={"#604CC3"} duration={0.5}>
                <CardTitle className=' flex text-neutral-300 items-center gap-2 my-2'> <FcCollaboration/>Event Organisers</CardTitle>
              </BoxReveal>
              {oraganisers.map((organiser, idx) => (
                <BoxReveal boxColor={"#604CC3"} key={idx} duration={0.5}>
                     <h1  className='pl-4 hover:text-zinc-200 hover:font-semibold duration-200 text-lg flex text-zinc-400 items-center gap-2'><span className="flex h-2 w-2  rounded-full bg-sky-500" />
                    {organiser} </h1>
                </BoxReveal>
              ))}
              <p className=' text-2xl font-medium mt-4 text-neutral-300 flex gap-2 items-center'> <FcCalendar/> Date: <span className='font-light '>{date}</span></p>
              <div className='absolute bottom-5 right-5'>
              {link && <Link href={link} className=' font-bold text-xl flex items-center text-zinc-500 hover:text-zinc-100 duration-200'>Read More <CgArrowTopRight size={30} /></Link>}
            </div>
            </div>
            
          </Card>
  )
}

export default EventCard
