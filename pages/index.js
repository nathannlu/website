import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projectsData from '@/data/projectsData'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="container mx-auto mt-24">
        <h1 className="text-5xl mb-6">
          Nathan writes code
        </h1>
        <p className="mb-4">
          In my spare time, I enjoy kickboxing and wrestling.
        </p>
        <p>
          I started my software career freelancing before landing a job at a distributed database company, and eventually founding my own web3 startup
        </p>

        <section className="mt-24">
          <h2 className="text-4xl mb-8">
            Work highlights
          </h2>

          {projectsData.map((project, i) => (
            <Link key={i} href={project.title}>
            <div className="mb-12 cursor-pointer">
              <div className="relative bg-blue-500 mb-4 rounded-md overflow-hidden" style={{height:'480px'}}>
                {project.video ? (
                  <video className="absolute w-full h-full" style={{objectFit: 'cover'}} autoPlay muted loop playsInline poster={project.backupSrc}>
                    <source src={project.src} type="video/mp4" />
                  </video>
                ) : (
                  <img className="absolute w-full h-full" style={{objectFit: 'cover'}} src={project.src} />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">
                  {project.title} <span className="text-gray-600 font-normal">— {project.subtitle}</span>
                </h3>
                <p className="text-gray-800">
                  {project.description}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </section>
      </div>
    </>
  )
}

