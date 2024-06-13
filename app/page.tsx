import Particles from '@/components/magicui/particles'
import React from 'react'

function page() {
  return (
    <div className=' min-h-screen w-screen'>
      <div className='fixed h-screen w-screen flex justify-center items-center '>
        <Particles className=' fixed h-screen w-screen opacity-80' size={1} quantity={500} />
        <h1>Hii</h1>
      </div>
    </div>
  )
}

export default page
