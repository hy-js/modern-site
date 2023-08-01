import React from "react"
import Image from "next/image"
import techs from "../lib/techs"
import { Socials } from "./Socials"

type Props = {}

const About = (props: Props) => {
  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 p-8 max-w-[1440px] mx-auto'>
      <div>
        <Image
          src='/profile2.jpg'
          alt='me'
          objectFit='contain'
          className='rounded'
          width={3024}
          height={4032}
        />
      </div>
      <div>
        <div>
          <h1>Rhys Dawson</h1>
          <h2 className='font-medium'>Web Developer</h2>
          <Socials />
        </div>
        <div className='flex flex-col'>
          <div>
            <h5>
              I am a self-taught web developer, bootcamp instructor and UI/UX
              designer based in Melbourne, Australia.
            </h5>
            <h5>
              I specialize in crafting single page applications with intuitive
              and beautiful designs. I am passionate about making creative and
              fun web experiences.
            </h5>
          </div>
          <div className='flex gap-2 mb-3 flex-wrap'>
            {techs.length > 0
              ? techs.map((tech: any, key: number) => (
                  <p
                    key={key}
                    className='bg-[#A6B2DC] rounded-full flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4'>
                    {tech}
                  </p>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
