import React from "react"
import Image from "next/image"
import projects from "../lib/projects"
import moment from "moment"


async function getLatest() {
  const reposResponse = await fetch(
    "https://api.github.com/users/hy-js/repos?sort=pushed&per_page=1&direction=desc"
  );
  const repos = await reposResponse.json();

  return repos;
}

const Projects = async () => {
  const repos = await getLatest();
  const latest = repos[0]
  return (
    <div className='p-8 max-w-[1440px] mx-auto'>
      <h2>Selected Works</h2>
      {latest &&
        <div>
          <h3>
            {latest.name} ({latest.updated_at.substring(0, 4)})
          </h3>
          <a href={latest.html_url} target='none'>
            <div className="w-full bg-gray-200 rounded-full h-2.5 ">
              <div className="bg-[#C7B0B1] h-2.5 rounded-full w-[50%]" ></div>
            </div>
          </a>
          <h4>Latest Project - Updated {moment(latest.pushed_at).fromNow()}</h4>

        </div>
      }
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
