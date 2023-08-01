"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Socials } from "./Socials"
import   ContactForm   from "./ContactForm"

type Props = {}

const Contact = (props: Props) => {

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 p-8 max-w-[1440px] mx-auto'>
      <div>
        <h2>Contact</h2>
        <h3>
          <Socials />
        </h3>
        <h4>Enough about me, let me hear from you.</h4>
          <ContactForm />
      </div>
      <div>
        <Image
          priority={true}
          src='/profile.jpg'
          alt='me'
          objectFit='contain'
          className='rounded'
          width={3024}
          height={4032}
        />
      </div>
    </div>
  )
}

export default Contact