// pages/projects.tsx

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

interface Project {
  id: number;
  name: string;
  description: string;
  // Add other properties as needed
}

type ProjectsProps = {
  projects: Project[];
};

const GithubProjects = ({
  projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProjectsProps> = async () => {
  try {
    const response = await fetch('/api/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch data from the external API');
    }

    const projects: Project[] = await response.json();

    return {
      props: { projects },
    };
  } catch (error) {
    return {
      props: { projects: [] }, // Return an empty array or handle the error as needed
    };
  }
};

export default GithubProjects;