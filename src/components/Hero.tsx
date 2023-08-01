import React from "react"
import Image from "next/image"

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
      <div className='hero'>
        <div
          className='hero__image-container

        '>
          <div className='hero__image'>
            <Image
              priority={true}
              src='/r-white.svg'
              alt='hero'
              fill
              className='object-contain'
            />
          </div>
          <div className='hero__image'>
            <Image
              priority={true}
              src='/a-white.svg'
              alt='hero'
              fill
              className='object-contain'
            />
          </div>
          <div className='hero__image'>
            <Image
              priority={true}
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
