import { useEffect } from 'react';

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import LatestWork from "@/components/LatestWork"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {

  return (
    <main className='overflow-hidden'>
      {/* <Navbar /> */}
      <section className='bg-[#A6B2DC]' id='section1'>
        <Hero />
      </section>

      <section className='bg-[#C2C0B0]' id='section2'>
        <About />
      </section>
      <section className='bg-[#C7B0B1]' id='section3'>
        <LatestWork />
      </section>
      <section className='bg-[#DCC7A6]' id='section4'>
        <Projects />
      </section>
      <section className='bg-[#5E6873]' id='section5'>
        <Contact />
      </section>
      <section className='bg-[#5E6873]' id='section6'>
        <Footer />
      </section>
    </main>
  )
}
