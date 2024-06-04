import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projectsData from '@/data/workData'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { Paragraph } from '@/components/Paragraph';
import { ProjectCard } from '@/components/ProjectCard';
import { Fade } from "react-awesome-reveal";
import { InfiniteMovingCards } from '@/components/InfiniteMovingCards';
import { AiFillGithub, AiFillLinkedin, AiOutlinePaperClip } from 'react-icons/ai';

export default function Home() {

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mt-8 md:mt-24">
        <Fade triggerOnce bottom cascade damping={0.2}>
          <h1 transition={{ duration: .5, ease: 'easeOut'}} className="text-5xl md:text-6xl mb-6">
            I build software, robust web apps, and drive growth
          </h1>
          <div>
            <Paragraph>
              I started my software career freelancing before landing a job at a <a target="_blank" href="https://dgraph.io/" className="link">distributed database company</a>, and eventually founding my own <a target="_blank" href="https://ambition.so/" className="link">web3 startup</a>.
            </Paragraph>
            <Paragraph>
              In my spare time, I enjoy kickboxing, wrestling, and studying history.
            </Paragraph>

            <div className="flex flex-wrap mt-8">
              <Link target="_blank" href="https://github.com/nathannlu" aria-label={siteMetadata.headerTitle}>
                <div className="font-bold text-4xl mr-3">
                  <AiFillGithub />
                </div>
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/nathanlu/" aria-label={siteMetadata.headerTitle}>
                <div className="font-bold text-4xl mr-3">
                  <AiFillLinkedin />
                </div>
              </Link>
              <Link target="_blank" href="https://docs.google.com/document/d/1XQOXOHMt5eVnGsHpmk26LYIWm2ggeaLfNQJatw5nrA0/edit?usp=sharing" aria-label={siteMetadata.headerTitle}>
                <div className="font-bold text-4xl mr-3">
                  <AiOutlinePaperClip />
                </div>
              </Link>
            </div>


            <div className="flex flex-wrap mt-16 md:mt-36">
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
          </div>
        </Fade>


        <InfiniteMovingCards
          items={[
            { name: "Durable", image: "/static/images/logos/logo-durable.png" },
            { name: "iMintify", image: "/static/images/logos/logo-imintify.png" },
            { name: "Castle labs", image: "/static/images/logos/logo-castle.png" },
            { name: "Dgraph", image: "/static/images/logos/logo-dgraph.png" },
            { name: "Blockspace Solutions", image: "/static/images/logos/logo-blockspace.png" },
            { name: "Teamtown", image: "/static/images/logos/logo-teamtown.png" },
            { name: "Hostgenius", image: "/static/images/logos/logo-hostgenius.png" },
          ]}
          speed="normal"
        />


        <section className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl mb-8">
            Work I am proud of
          </h2>

          <ProjectCard 
            key={projectsData[0].title}
            href={projectsData[0].link}
            video={projectsData[0].video} 
            src={projectsData[0].src} 
            backupSrc={projectsData[0].backupSrc} 
            title={"Launching over 20,000+ NFT collections"} 
            description={"I led a team of 5 developers and worked with some of the largest NFT collections in the world."} 
            subtitle={"Ambition NFT launchpad"} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(1,3).map((project, i) => (
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

          <Link href="/work">
          <span className="link">
            View more
          </span>
          </Link>
        </section>

        <div className="flex flex-wrap mt-16 md:mt-36">
          <div className="md:w-2/3 md:pr-8">
            <h2 className="text-2xl md:text-3xl mb-4">
              Blog
            </h2>
            <Paragraph>
              Along with my love for developing cool stuff, I also love to write and share my knowledge. Here are some of the articles I have written.
            </Paragraph>
            <ul className="max-w-md space-y-4 list-disc list-inside">
              <li>
                <Link href="/blog/virtual-machine-from-scratch">
                <span className="link">
                  Building a virtual machine from scratch
                </span>
                </Link>
              </li>
              <li>
                <Link href="/blog/why-did-stripe-pop-off">
                <span className="link">
                  Investigating why Stripe succeeded in its early days
                </span>
                </Link>
              </li>
              <li>
                <Link href="/work/hostgenius">
                <span className="link">
                  A brand revamp that demystifies HostGenius’ mission
                </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

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

