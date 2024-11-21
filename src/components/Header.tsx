import React from 'react';
import Image from '../img/planet.jpg'


function Header() {
  return (<section className='section bg-gray-100 pt-32'>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-10'>
        <img className='object-cover h-full md:w-[266px] mx-auto rounded-2xl' src={Image} alt='immagine pianeta' />
        <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
                <h1 className='text-gray-800 text-2xl lg:text-4xl font-extrabold mb-2 relative'>
                  Climate App
                </h1>
                <hr className='mb-8 opacity-5' />
                <p className='mb-16 px-2'>
                Climate change is a pressing global issue that demands immediate attention. It refers to long-term shifts in the Earth's usual weather patterns, mainly caused by human activities such as burning fossil fuels and cutting down forests. The effects of climate change are significant, including rising global temperatures, more frequent extreme weather events, and the ongoing melting of glaciers and ice caps. To protect our planet for future generations, it is essential for individuals, communities, and governments to work together, embrace eco-friendly practices, and reduce environmental harm.
                </p>
            </div>
        </div>
          
      </div>
    </div>
  </section>
  )
}

export default Header