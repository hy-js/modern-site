import React from "react"
import Image from "next/image"
import projects from "../lib/projects"

const Projects = async () => {
  return (
    <div className='p-8 max-w-[1440px] mx-auto'>
      <h2>Selected Works</h2>
      {projects.length > 0
        ? projects.map((project: any, key: number) => (
            <a href={project.link} target='none' key={key}>
                <h2 className="font-medium">
                  {project.name}
                </h2>
                <h5 className='font-medium mt-0'>
                  {project.desc}
                </h5>
                <div className='flex gap-2 mb-3 flex-wrap'>
                  <p className='bg-[#5E6873] rounded-full flex justify-center items-center px-4 py-1'>
                    {project.year}
                  </p>
                  {project.techs?.map((tech: string, i: number) => (
                    <p
                      className='bg-[#A6B2DC] rounded-full flex justify-center items-center px-4 py-1'
                      key={i}>
                      {tech}
                    </p>
                  ))}
                </div>
                <div className='relative mb-[3.157rem]'>
                  <Image
                    src={project.src}
                    alt={project.name}
                    objectFit='contain'
                    className='rounded'
                    sizes='100vw'
                    width={1920}
                    height={1080}
                  />
                </div>
            </a>
          ))
        : null}
    </div>
  )
}

export default Projects
