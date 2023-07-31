import About from "@/components/About"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Mission from "@/components/Mission"
import Projects from "@/components/Projects"
import Image from "next/image"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Hero />
      <Mission />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
