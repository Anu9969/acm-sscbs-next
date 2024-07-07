'use client'
import React from 'react'
import { PacmanLoader } from 'react-spinners';


function Page() {

    return (   
        <main className=' min-h-screen w-full'>
            <section className=' w-full h-screen border flex pt-16'>
                <div className=' border w-1/2 h-full flex-1'>left</div>
                <div className=' border w-1/2 h-full'>right</div>
            </section>
            <section>bottom</section>
        </main>

    )
  
}

export default Page
