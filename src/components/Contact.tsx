"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Socials } from "./Socials"

type Props = {}

const Contact = (props: Props) => {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: any) {
    event.preventDefault()
    setLoading(true)

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value)
    }

    const response = await fetch("https://getform.io/f/0f8bfd77-b619-4c1c-92a1-7f5e1e5c3297", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      console.log("Message sent successfully")
      setLoading(false)
      // reset the form
      event.target.name.value = ""
      event.target.email.value = ""
      event.target.message.value = ""
    }
    if (!response.ok) {
      console.log("Error sending message")
      setLoading(false)
    }
  }

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 p-8 max-w-[1440px] mx-auto'>
      <div>
        <h2>Contact</h2>
        <h3>
          <Socials />
        </h3>
        <h4>Enough about me, let me hear from you.</h4>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className='w-full flex flex-col my-4'>
            <label className='font-bold ' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              minLength={3}
              maxLength={150}
              required
              placeholder="Introduce yourself"
              className=' p-4 bg-gray-50 border border-gray-100 text-black'
              autoComplete='off'
              id='name'
            />
          </div>
          <div className='w-full flex flex-col my-4'>
            <label className='font-bold ' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              minLength={5}
              maxLength={150}
              required
              placeholder="Double check it's correct"
              className=' p-4 bg-gray-50 border border-gray-100 text-black'
              autoComplete='off'
              id='email'
            />
          </div>
          <div>
            <label className='font-bold ' htmlFor='message'>
              Message
            </label>
            <textarea
              rows={4}
              required
              minLength={10}
              maxLength={500}
              name='message'
              placeholder="What's on your mind?"
              className='w-full p-4 bg-gray-50 border border-gray-100 text-black'
            />
          </div>
          <button
            type='submit'
            disabled={loading}
            className='px-4 py-2 w-40 bg-[#C7B0B1] disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 hov'>
            Send Message
          </button>
        </form>
      </div>
      <div>
        <Image
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
