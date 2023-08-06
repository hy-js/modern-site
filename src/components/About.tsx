"use client"
import type { NextPage } from "next"
import React, { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import techs from "../lib/techs"
import { Socials } from "./Socials"
import ScrollButton from "./ScrollButton"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { motion } from "framer-motion"
import { staggerChildren, wordAnimation, fallWithFade } from "../utils/animations"


function AnimatedText({ children }) {
  const text = useRef(null)
  const image = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=400px bottom"
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.Out"
    })
  }, [])

  return <p ref={text}>{children}</p>
}

const phrases = [
  `I am a self-taught web developer, bootcamp instructor and UI/UX
  designer based in Melbourne, Australia.`,
  `I specialise in crafting single page applications with intuitive user flows.`,
  `My passion is exploring language in everyday and innovative web applications
  that keep the web fun.`,
  `Need someone to build your website from idea to deployment? Feel
  free to get in touch!`
]

const About: NextPage = () => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      className='grid grid-cols-1 gap-8 md:grid-cols-2 p-8 max-w-[1440px] mx-auto'>
        <Image
          priority={true}
          src='/profile2.jpg'
          alt='me'
          objectFit='coontain'
          className='rounded'
          width={1512}
          height={2016}
        />
      <div>
        <div>
          <h1 >
            Rhys Dawson
          </h1>
          <h2 className='font-medium'>Web Developer</h2>
          <Socials />
        </div>
        <div className='flex flex-col'>
          <div>
            <h5>
              {" "}
              {phrases.map((phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>
              })}
            </h5>
            <ScrollButton targetSectionId='section5' />
          </div>
          <h3>Skills</h3>
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
    </motion.div>
  )
}

export default About
