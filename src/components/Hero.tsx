import React from "react"
import Image from "next/image"

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
      <div className='hero'>
        <div
          className='hero__image-container
        data-scroll-section
        data-scroll
        data-scroll-speed="6"
        '>
          <div className='hero__image'>
            <Image
              src='/r-white.svg'
              alt='hero'
              fill
              className='object-contain'
            />
          </div>
          <div className='hero__image'>
            <Image
              src='/a-white.svg'
              alt='hero'
              fill
              className='object-contain'
            />
          </div>
          <div className='hero__image'>
            <Image
              src='/d-white.svg'
              alt='hero'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
      {/* <div className='animate-bounce relative '>Scroll down!</div> */}
    </>
  )
}

export default Hero
