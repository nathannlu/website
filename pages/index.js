import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projectsData from '@/data/workData'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { Paragraph } from '@/components/Paragraph';
import { ProjectCard } from '@/components/ProjectCard';

export default function Home() {

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mt-8 md:mt-24">
        <h1 className="text-5xl md:text-6xl mb-6">
          I build websites, robust web apps, and drive growth
        </h1>
        <Paragraph>
          I started my software career freelancing before landing a job at a <a target="_blank" href="https://dgraph.io/" className="link">distributed database company</a>, and eventually founding my own <a target="_blank" href="https://ambition.so/" className="link">web3 startup</a>.
        </Paragraph>
        <Paragraph>
          In my spare time, I enjoy kickboxing, wrestling, and studying history.
        </Paragraph>


        <div className="flex flex-wrap mt-18 md:mt-36">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl md:text-3xl mb-4">
              Why you should hire me
            </h2>
            <Paragraph>
              Here's a 1-minute video about me – hope it would persuade you to spend more than 2 minutes reviewing my portfolio.
            </Paragraph>

          </div>
          
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
            <iframe width="100%" height="320" src="https://www.youtube.com/embed/jJi8uYyU9xA" title="Why you should hire me | Nathan Lu" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>

        <section className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl mb-8">
            Work I am proud of
          </h2>

          {projectsData.slice(0,3).map((project, i) => (
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

          <Link href="/work">
          <span className="link">
            View more
          </span>
          </Link>
        </section>

        {/*
        <section className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl mb-8">
            What people are saying
          </h2>
        </section>
        */}
      </div>
    </>
  )
}

