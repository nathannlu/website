import React, { useState } from 'react';

import Testimonial from '@/components/Testimonial';
//import {Helmet} from "react-helmet";

const HostGenius = () => {
	const [stylescape, setStylescape] = useState(2);

  /*
	const { 
		allDataJson: { edges } 
	} = data;

	const filterHostGeniusData = edges.filter(edge => edge.node.hostgenius)[0];

	const {
		node: { hostgenius }
	} = filterHostGeniusData;
  */

	return (
    <>
      {/*
			<Helmet>
				<title>
					HostGenius Case Study
				</title>
			</Helmet>
      */}

			<main className="relative">
				<div className="h-screen bg-cover flex items-center" style={{backgroundImage: `url(/static/images/dgraph/hero.png)`}}>
					<div className="container mx-auto px-12">
            <h1 className="text-5xl md:text-6xl mb-6 text-white md:w-2/3">
              Rebuilding website to be optimized for performance
            </h1>
					</div>
				</div>
				<section className="container mx-auto px-12 pt-32">
					<div className="flex flex-wrap mb-16">
						<div className="md:w-1/2 md:pr-16 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl mb-8">
                Intro
              </h2>
								<p className="mb-4">
                  Dgraph Labs, the #1 open source graph database, strives to turn soiled data across complex data structures into real-time intelligence.
                </p>

								<p className="mb-4">
                  I was tasked to migrate the main website from an old technology to modern
                </p>

								<p className="mb-4">
                  This project included collaboration with key stakeholders across the leadership team and other departments, working closely with design and marketing.
                </p>
              <a target="_blank" href="https://dgraph.io/">
              <span className="link">
                View live
              </span>
              </a>

						</div>
            {/*
						<Testimonial
							avatar={hostgenius.introduction.testimonial.avatar}
							content={hostgenius.introduction.testimonial.content}
							author={hostgenius.introduction.testimonial.author}
							authorDescription={hostgenius.introduction.testimonial.authorDescription}
						/>
            */}
					</div>
				</section>

    {/*

					<div className="flex flex-wrap">
						<div className="w-1/3 ml-8 -mr-8">
							<img className="shadow-lg" src={hostgenius.introduction.images[0]} />
						</div>

						<div className="w-1/3 mt-8">
							<img className="shadow-lg" src={hostgenius.introduction.images[1]} />
						</div>

						<div className="w-1/3 mt-16 -ml-8"> 
							<img className="shadow-lg" src={hostgenius.introduction.images[2]} />
						</div>
					</div>
        {/*

				<section className="container mx-auto px-12 pt-32">
					<div className="md:w-2/3 mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-8">
							{hostgenius.stylescapes.title}
						</h2>
						<p>
							{hostgenius.stylescapes.content}
						</p>
					</div>
				</section>

				<div className="w-full container mx-auto">
					<div className="flex justify-center mb-8">
						<div
							style={stylescape == 0 ? {fontSize: '1.4rem', fontWeight: 'bold'} : {fontSize: '1.4rem', opacity: .5}}
							className="mr-8 uppercase cursor-pointer"
							onClick={() => setStylescape(0)}
						>
							Version I
						</div>
						<div 
							style={stylescape == 1 ? {fontSize: '1.4rem', fontWeight: 'bold'} : {fontSize: '1.4rem', opacity: .5}}
							className="mr-8 uppercase cursor-pointer"
							onClick={() => setStylescape(1)}
						>
							Version II
						</div>
						<div 
							style={stylescape == 2 ? {fontSize: '1.4rem', fontWeight: 'bold'} : {fontSize: '1.4rem', opacity: .5}}
							className="uppercase cursor-pointer"
							onClick={() => setStylescape(2)}
						>
							Version III
						</div>
					</div>
					<img 
						className="shadow-lg" 
						src={hostgenius.stylescapes.images[stylescape]} 
					/>
					<p className="text-center italic w-2/3 mx-auto mt-8">
						We explored many options before settling on a brand that imbued the site with professionalism and a hint of youth. (version III)
					</p>
				</div>

				<section className="container mx-auto px-12 pt-32">
					<div className="md:w-1/2 pr-16 mb-16">
            <h2 className="text-3xl md:text-4xl mb-8">
							{hostgenius.branding.title}
						</h2>
						<p>
							{hostgenius.branding.content}
						</p>
					</div>

					<img className="md:w-4/5 -ml-2 md:-ml-6" src={hostgenius.branding.image} />
				</section>

				<section className="container mx-auto px-12 py-32">
					<div className="md:w-1/2 pr-16 mb-16">
            <h2 className="text-3xl md:text-4xl mb-8">
							{hostgenius.deliverables.title}
						</h2>
						<p>
							{hostgenius.deliverables.content}
						</p>
					</div>

					<div className="md:flex flex-wrap md:space-x-8 mb-16">
						<div className="flex-1 flex flex-wrap">
							<div className="mb-8 flex">
								<img className="object-cover" src={hostgenius.deliverables.images[0]} />
							</div>
							<div className="mb-8 md:mb-0 flex">
								<img className="object-cover" src={hostgenius.deliverables.images[1]} />
							</div>
						</div>

						<div className="flex-1 flex bg-blue-500">
							<img src={hostgenius.deliverables.images[2]} />
						</div>
					</div>

					<div className="flex justify-center">
						<Testimonial
							avatar={hostgenius.deliverables.testimonial.avatar}
							content={hostgenius.deliverables.testimonial.content}
							author={hostgenius.deliverables.testimonial.author}
							authorDescription={hostgenius.deliverables.testimonial.authorDescription}
						/>
					</div>
				</section>

				<div classname="" style={{background: '#00161F'}}>
					<section className="text-white container mx-auto px-12 pt-32">
            <h2 className="text-3xl md:text-4xl mb-8 text-white">
							{hostgenius.website.title}
						</h2>
						<img className="shadow-lg" src={hostgenius.website.image} />
					</section>

					<section className="container mx-auto px-12 pt-32 flex flex-wrap relative">
						<div className="text-white md:w-1/2 md:pr-16 mb-16 md:sticky h-full" style={{top: '5rem'}}>
              <h2 className="text-3xl md:text-4xl mb-8 text-white">
								{hostgenius.homepage.title}
							</h2>
							{hostgenius.homepage.content.map(paragraph => (
								<p className="mb-4" style={{opacity: .9}}>{paragraph}</p>
							))}
						</div>
						<div className="md:w-1/2">
							<img className="shadow-lg" src={hostgenius.homepage.image} />
						</div>
					</section>

					<section className="container mx-auto px-12 pt-32 md:pt-64 flex flex-wrap relative">
						<div className="md:w-1/2 md:order-0 order-1">
							<img className="shadow-lg" src={hostgenius.aboutpage.image} />
						</div>
						<div className="text-white md:w-1/2 md:pl-16 mb-16 md:sticky h-full order-0 md:order-1" style={{top: '5rem'}}>
              <h2 className="text-3xl md:text-4xl mb-8 text-white">
								{hostgenius.aboutpage.title}
							</h2>
							{hostgenius.aboutpage.content.map(paragraph => (
								<p className="mb-4" style={{opacity: .9}}>{paragraph}</p>
							))}
						</div>
					</section>
					<section className="text-white container mx-auto px-12 py-32 text-center relative">
            <h2 className="text-3xl md:text-4xl mb-8 text-white">
							View the website live
						</h2>

						<a
							className="text-black bg-white uppercase rounded shadow px-8 py-4 inline-block" 
							href="https://www.hostgenius.ca/" 
							target="_blank"
						>
							View website	
						</a>
					</section>
				</div>


				<section className="container mx-auto px-12 py-32">
					<div className="md:w-2/3 mx-auto md:pr-16 mb-16">
            <h2 className="text-3xl md:text-4xl mb-8">
							{hostgenius.conclusion.title}
						</h2>
						<p>
							{hostgenius.conclusion.content}
						</p>
					</div>

					<div className="w-full mb-16">
						<img src={hostgenius.conclusion.image} />
					</div>

					<div className="flex justify-center">
						<Testimonial
							avatar={hostgenius.conclusion.testimonial.avatar}
							content={hostgenius.conclusion.testimonial.content}
							author={hostgenius.conclusion.testimonial.author}
							authorDescription={hostgenius.conclusion.testimonial.authorDescription}
						/>
					</div>
				</section>
        */}
			</main>
		</>
	)
};

export default HostGenius

