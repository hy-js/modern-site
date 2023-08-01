import About from "@/components/About"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import PageWrapper from "@/components/PageWrapper"
import LatestWork from "@/components/LatestWork"



export default function Home() {
  return (
    <main className='overflow-hidden'>
      {/* <Navbar /> */}
      <PageWrapper>
        <section className='bg-[#A6B2DC]'>
          <Hero />
        </section>
        <section className='bg-[#C2C0B0]'>
          <About />
        </section>
        <section className='bg-[#C7B0B1]'>
          <LatestWork />
        </section>
        <section className='bg-[#DCC7A6]'>
          <Projects />
        </section>
        <section className='bg-[#5E6873]'>
          <Contact />
        </section>
      </PageWrapper>
    </main>
  )
}
