import React from "react"
import Image from "next/image"
import projects from "../lib/projects"
import GithubProjects from "./GithubProjects"

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='p-8 max-w-[1440px] mx-auto'>
      <h2>Selected Works</h2>
      {projects.length > 0
        ? projects.map((project: any, key: number) => (
            <div key={key}>
              <div>
                <h3>
                  {project.name} ({project.year})
                </h3>
                <a href={project.link} target='none'>
                  <div className='relative'>
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
                <h4>{project.desc}</h4>
                <div className='flex flex-wrap gap-2'>
                  {project.techs?.map((tech: string, i: number) => (
                    <p className='underline ' key={i}>
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  )
}

export default Projects
