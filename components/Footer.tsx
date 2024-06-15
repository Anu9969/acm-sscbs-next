import React from 'react'
import Wave from 'react-wavify'

function Footer() {
  return (
    <div className=' h-[50vh] relative'>
          <Wave fill='#f5f5f5'
        paused={false}
        style={{ display: 'flex' }}
        className='absolute bottom-0 h-full'
        options={{
          height: 10,
          amplitude: 40,
          speed: 0.20,
          points: 3
        }}
  /> 
      
    </div>
  )
}

export default Footer
