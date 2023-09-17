import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projectsData from '@/data/workData'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  const videoRef = useRef()

  useEffect(() => {
    videoRef.current.play()
  },[videoRef])

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mt-16">

        <h1 className="text-4xl md:text-6xl mb-6">
          Nathan writes code
        </h1>
        <p className="text-gray-600 mb-4">
          In my spare time, I enjoy kickboxing and wrestling.
        </p>
        <p className="text-gray-600">
          I started my software career freelancing before landing a job at a distributed database company, and eventually founding my own web3 startup
        </p>

        <section className="mt-24">
          <h2 className="text-3xl md:text-4xl mb-8">
            Work highlights
          </h2>

          {projectsData.slice(0,3).map((project, i) => (
            <a target="_blank" key={project.title} href={project.link}>
            <div className="mb-12 cursor-pointer project-card">
              <div className="relative bg-blue-500 mb-4 rounded-md overflow-hidden" style={{height:'480px'}}>
                {project.video ? (
                  <video 
                    ref={videoRef}
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

          <span className="link">
            View more
          </span>
        </section>
      </div>
    </>
  )
}

