import { Mdx } from '@/components/Mdx';
import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation';
import React from 'react'

async function getDocFromParams(eventId: string){
      const doc = allDocs.find((doc)=> doc.title === eventId)
      if (!doc){
        notFound(); 
      }

      return doc;
}

async function Page({params}: {params: {eventId: string}}) { 
    const doc = await getDocFromParams(params.eventId);
  return (
    <div className=' min-h-screen w-full py-28 px-56 z-20 '>
      <Mdx code={doc.body.code} />
    </div>
  )
}

export default Page
