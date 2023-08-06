"use client"
import type { NextPage } from "next"
import React, { useLayoutEffect, useRef } from "react"
import Image from "next/image"

import { motion } from "framer-motion"
import { riseWithFade, staggerChildren, disperse } from "../utils/animations"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Hero: NextPage = () => {

  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={staggerChildren}
      className={`mx-auto flex flex-col hero`}>
      <div className='hero__image-container'>
        <motion.div className='hero__image' variants={riseWithFade}>
          <Image
            priority={true}
            src='/r-white.svg'
            alt='hero'
            fill
            className='object-contain'
          />
        </motion.div>

        <motion.div className='hero__image' variants={riseWithFade}>
          <Image
            priority={true}
            src='/a-white.svg'
            alt='hero'
            fill
            className='object-contain'
          />
        </motion.div>
        <motion.div className='hero__image' variants={riseWithFade}>
          <Image
            priority={true}
            src='/d-white.svg'
            alt='hero'
            fill
            className='object-contain'
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero
