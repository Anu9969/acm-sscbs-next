'use client'
import React from 'react'
import { PacmanLoader } from 'react-spinners';


function Page() {
    // make this page 3 second delay to render the page

    return (   
        <section className=' h-screen flex justify-center flex-col text-lg font-bold gap-8 items-center'>
            <PacmanLoader
            className=' w-52 h-10'
        color={'#ffffff'}
        size={40}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      Under Development
        </section>
    //     <div className=" h-screen z-40 w-full flex justify-center items-center">
    //   <div className="loader z-40">
    //     <div className="circle z-40"></div>
    //   </div>
    // </div>
    )
  
}

export default Page
