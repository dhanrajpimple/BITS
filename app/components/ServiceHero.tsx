import React from 'react'
import bg from '~/assests/servicebg.png'

const ServiceHero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-6 py-12 w-full">
      <div
        className="w-full text-center flex flex-col gap-4 rounded-3xl text-white px-8 py-10 shadow-lg"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          The Bits - Services
        </h1>
        <p className="text-lg md:text-xl font-light leading-relaxed">
          Empowering Businesses with Secure & Scalable IT Solutions
        </p>
      </div>
    </div>
  )
}

export default ServiceHero
