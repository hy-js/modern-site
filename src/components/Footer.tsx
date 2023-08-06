import React from "react"
import Image from "next/image"
import moment from "moment"
type Props = {}

const Hero = (props: Props) => {
  return (
    <>
      <div className='flex justify-center items-center flex-col'>
        <Image
          priority={true}
          src='/logo-white.svg'
          alt='lgo'
          objectFit='contain'
          width={378}
          height={128}
        />
        <p className='m-0 text-center'>Made with Next.JS and ♥ in Melbourne.</p>
        <p>© Rhys Dawson, {moment().format("YYYY")}</p>
      </div>
    </>
  )
}

export default Hero
