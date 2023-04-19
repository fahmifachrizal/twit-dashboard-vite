import React from 'react'

function LoginPage() {
  return (
    <div className='h-screen w-screen bg-[#1d9bf0] relative'>
      <div className='absolute bg-white max-lg:bottom-0 w-full lg:w-1/4 lg:top-1/2 lg:right-20 lg:-translate-y-1/2 
        '>
        <div className='p-10'>
          <h1 className='text-2xl lg:text-4xl font-extrabold uppercase'>Supercharge Your Social Media Now</h1>
          <h2 className='mt-2 lg:mt-4 text-lg font-medium'>Join and discover your super power</h2>
          <div className='mt-2 lg:mt-4 flex flex-col gap-2 lg:text-lg font-medium'>
            <button className='w-full h-12 bg-black text-white'>Google</button>
            <button className='w-full h-12 bg-black text-white'>Apple</button>
            <button className='w-full h-12 bg-black text-white'>Twitter</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage