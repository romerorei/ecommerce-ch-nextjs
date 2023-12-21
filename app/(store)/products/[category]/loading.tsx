import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='w-full h-full min-h-screen flex justify-center items-center'>
      <Image
      src={"/vercel.svg"}
      alt='vercel logo'
      width={150}
      height={150}
      className='animate-pulse'
      />
    </div>
  )
}

export default loading
