import React from "react"
import Image from "next/image"

type Props = {}

const About = (props: Props) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 p-8 max-w-[1440px] mx-auto '>
      <div >
        <h1>Rhys Dawson</h1>
        <h3>Web Developer</h3>
        <h5 >
          I am a self-taught web developer, bootcamp instructor and UI/UX designer based in
          Melbourne, Australia.
        </h5>
        <h5>
          I specialize in crafting single page applications with intuitive and
          beautiful designs. I am passionate about making creative and fun web experiences
        </h5>
        <div className='grid grid-cols-2'>
          <div className="">
            <h3 className="underline">Services</h3>
            <h5 className='font-special'>Web Development</h5>
            <h5 className='font-special'>Web Design</h5>
            <h5 className='font-special'>Wireframing</h5>
            <h5 className='font-special'>UI/UX Design</h5>
          </div>
          <div className="">
            <h3 className="underline">Tools</h3>
            <h5 className='font-special'>TypeScript</h5>
            <h5 className='font-special'>NextJS</h5>
            <h5 className='font-special'>Prisma</h5>
            <h5 className='font-special'>Tailwind</h5>
          </div>
        </div>
      </div>
      <div className='relative'>
        <Image
          src='/d-white.svg'
          alt='Letter D'
          objectFit='contain'
          className='rounded'
          fill
        />
      </div>
    </div>
  )
}

export default About
