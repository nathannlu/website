import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/workData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
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
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/*
            Showcase your projects with a hero image (16 x 9)
            */}
          </p>
        </div>
        <div className=" py-12">
            {projectsData.map((project, i) => (
              <a target="_blank" key={project.title} href={project.link}>
              <div className="mb-12 cursor-pointer project-card">
                <div className="relative bg-blue-500 mb-4 rounded-md overflow-hidden" style={{height:'480px'}}>
                  {project.video ? (
                    <video 
                      className="absolute w-full h-full"
                      poster={project.backupSrc}
                      style={{objectFit: 'cover'}}
                      preload="auto"
                      autoPlay 
                      muted
                      loop
                      playsInline
                    >
                      <source src={project.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img className="absolute w-full h-full" style={{objectFit: 'cover'}} src={project.src} />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl mb-1">
                    <span className="project-card__title">{project.title}</span> <span className="text-gray-600 font-normal">— {project.subtitle}</span>
                  </h3>
                  <p className="text-gray-800">
                    {project.description}
                  </p>
                </div>
              </div>
              </a>
            ))}
        </div>
      </div>
    </>
  )
}
