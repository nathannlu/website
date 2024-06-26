import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/workData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { ProjectCard } from '@/components/ProjectCard';
import Link from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';
//import ProjectCard from '@/components/Portfolio/ProjectCard';

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="pt-6">
          <h1 className="text-6xl mb-6">
            Work
          </h1>
          <div>
            <Paragraph>
              I have founded my own Web3 company, worked at startups, and freelanced.
            </Paragraph>
          </div>

          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/*
            Showcase your projects with a hero image (16 x 9)
            */}
          </p>
        </div>

        <div className="grid grid-cols-1 py-12">
          {projectsData.map((project, i) => (
            <ProjectCard 
              key={project.title}
              href={project.link}
              video={project.video} 
              src={project.src} 
              backupSrc={project.backupSrc} 
              title={project.title} 
              description={project.description} 
              subtitle={project.subtitle} 
            />
          ))}
        </div>
      </div>
    </>
  )
}
