'use client'
import React from 'react'
import { PacmanLoader } from 'react-spinners';


function Page() {

    return (   
        <main className=' min-h-screen w-full pt-16'>
            <section className=' w-full min-h-screen flex flex-col items-center py-16 border-b border-gray-500 '>
                <h1 className=' text-6xl font-bold'>Orientation <span className=' text-amber-400'>2024</span></h1>
                <h2 className=' text-xl text-zinc-200/50 mb-24'>Welcome to SSCBS, Batch &apos;27 & &apos;28 – where innovation meets ambition. Get ready to redefine the future!</h2>
                <iframe className=' aspect-video md:w-2/3 rounded-md z-10 w-full px-5' src="https://www.youtube.com/embed/fOsA4HcDGtE" title="ACM Orientation" frameBorder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope;  web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </section>
            <section className=' w-full min-h-screen flex flex-col items-center py-16 '>
                <h1 className=' text-6xl font-bold'>Orientation <span className=' text-green-500'>2023</span></h1>
                <h2 className=' text-xl text-zinc-200/50 mb-24'>Welcome, Batch &apos;27 & &apos;28 – your journey to excellence starts now. Let&apos;s make history together at SSCBS!</h2>
                <iframe className=' aspect-video md:w-2/3 rounded-md z-10 w-full px-5' src="https://www.youtube.com/embed/fOsA4HcDGtE" title="ACM Orientation" frameBorder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope;  web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </section>
        </main>

    )
  
}

export default Page
