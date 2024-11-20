import React from 'react'
// import image import Image from '../assets/img/planet.jpg';

function Header() {
  return (<section className='section bg-gray-100 mt-16'>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-10'>
        <img className='object-cover h-full md:w-[266px] mx-auto rounded-2xl'  src={"Image"} alt='immagine pianeta' />

        <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
                <h1 className='text-gray-800 text-2xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
                  Climate Dashboard
                </h1>
                <hr className='mb-8 opacity-5' />
                <p className='mb-8'>
                  Climate change is an urgent worldwide concern that requires immediate action. It involves the persistent modification of Earth's typical weather patterns, primarily driven by human actions like the burning of fossil fuels and deforestation. The repercussions of climate change are extensive, encompassing elevated global temperatures, increased frequency and severity of extreme weather events, and the gradual melting of polar ice caps. It is imperative for individuals, communities, and nations to collaboratively address this issue, adopt sustainable practices, and safeguard the planet for future generations.
                </p>
            </div>
        </div>
          
      </div>
    </div>
  </section>
  )
}

export default Header