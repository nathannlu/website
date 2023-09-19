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
				<div className="h-screen bg-cover flex items-center" style={{backgroundImage: `url(${hostgenius.hero.image})`}}>
					<div className="container mx-auto px-12">
            <h1 className="text-5xl md:text-6xl mb-6 text-white md:w-2/3">
							{hostgenius.hero.title}
            </h1>
					</div>
				</div>
				<section className="container mx-auto px-12 pt-32">
					<div className="flex flex-wrap mb-16">
						<div className="md:w-1/2 md:pr-16 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl mb-8">
								{hostgenius.introduction.title}
              </h2>
							{hostgenius.introduction.content.map(paragraph => (
								<p className="mb-4">{paragraph}</p>
							))}
						</div>
						<Testimonial
							avatar={hostgenius.introduction.testimonial.avatar}
							content={hostgenius.introduction.testimonial.content}
							author={hostgenius.introduction.testimonial.author}
							authorDescription={hostgenius.introduction.testimonial.authorDescription}
						/>
					</div>

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
				</section>

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
							className="text-black bg-white uppercase rounded shadow px-16 py-8 inline-block" 
							style={{fontSize: '1.4rem'}}
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
			</main>
		</>
	)
};

export default HostGenius


const hostgenius = {
		"hero": {
			"title": "A brand revamp that demystifies HostGenius’ mission.",
			"image": "/static/images/hostgenius/hero.jpg"
		},
		"introduction": {
			"title": "Intro",
			"content": [
				"HostGenius is the #1 Vancouver short-term Airbnb rental management service that provides a seamless hosting experience.",
				"As HostGenius is looking to expand their services, there is a mis-match between the company’s current visual identity and the target audience.",
				"We developed the visual identity, website, and media asset with the goal of building a community."
			],
			"testimonial": {
				"content": "“We were thrilled to work with Nathan and Marisa on our rebrand. We knew it would be a challenge to pull off a  new visual identity on a such a short timeline but the process they led was very efficient and extremely collaborative. It felt like one team working toward the same goal and we couldn’t be happier with the result!”",
				"author": "Alex Stewart",
				"authorDescription": "Chief Operating Officer at HostGenius",
				"avatar": "/static/images/hostgenius/stewart.png"
			},
			"images": [
				"/static/images/hostgenius/overview-1.jpg",
				"/static/images/hostgenius/overview-2.jpg",
				"/static/images/hostgenius/overview-3.jpg"
			]
		},

		"stylescapes": {
			"title": "Brand Identity",
			"content": [
				"One of the main challenges we faced was creating a brand that can be scaled to the different service sectors provided by HostGenius including Airbnb management, long-term property management, and realty, as these services serve different user groups.",
				"In order to truly nail down their brand, we made 3 variations of their brand in different styles showcasing their brand in different lights."
			],
			"images": [
				"/static/images/hostgenius/stylescape-1.jpg",
				"/static/images/hostgenius/stylescape-2.jpg",
				"/static/images/hostgenius/stylescape-3.jpg"
			]
		},

		"branding": {
			"title": "Branding",
			"content": "We decided to steer their branding towards professionalism, but keeping their enthusiastic and youthful nature. By bridging between two doors, the logo and identity speaks to endless opportunities and growth. The brand identity exudes a feeling of excitement and optimism for the home-sharing experience.",
			"image": "/static/images/hostgenius/branding.png"
		},

		"deliverables": {
			"title": "Deliverable & hand off to client",
			"content": "A key part of our engagement involved the creation of a comprehensive branding guide and toolkit, to help the brand grow and adapt across any medium. We delivered a branding package with use cases that showed how they can brand assets such as newsletter, business cards, and open house signs.",
			"testimonial": {
				"content": "“Nathan consistently produces extremely high-quality work on time and on budget. I know I can count on them to work with me to find a solution and for that, they will always be my first call.”",
				"author": "Alex McDonagh",
				"authorDescription": "Head of Client Success at HostGenius",
				"avatar": "/static/images/hostgenius/mcdonagh.png"
			},
			"images": [
				"/static/images/hostgenius/cards.jpg",
				"/static/images/hostgenius/banner.jpg",
				"/static/images/hostgenius/newsletter.jpg"
			]
		},

		"website": {
			"title": "Putting it all together",
			"image": "/static/images/hostgenius/website-overview.png"
		},

		"homepage": {
			"title": "Attractive landing page",
			"content": [
				"In addition to expanding into Realty and long term property management, another of Hostgenius’ goals is to attract more customers for their main branch -- AirBnB management. This means their website needs a user experience that leads visitors to contact forms and CTAs. ",
				"With this in mind, we designed a website where CTAs were very obvious. Such as on the home page the page structure puts a lot of emphasis on   the pricing calculator."
			],
			"image": "/static/images/hostgenius/home.png"
		},

		"aboutpage": {
			"title": "Showcasing personality",
			"content": [
				"Having good website structure would be useless without one crucial ingredient -- trust. We know Hostgenius prides themselves in building trustful and long lasting relationships with their clients, and we seek to translate this visually into their website.",
				"We worked with a photographer and developed a layout that tells a story. We emphasized the culture of Hostgenius, and what it is like to work with them."
			],
			"image": "/static/images/hostgenius/about.png"
		},

		"conclusion": {
			"title": "Conclusion",
			"content": [
				"One of the main challenges we faced was creating a brand that can be scaled to the different service sectors provided by HostGenius including Airbnb management, long-term property management, and realty, as these services serve different user groups.",
				"In order to truly nail down their brand, we made 3 variations of their brand in different styles showcasing their brand in different lights."
			],
			"testimonial": {
				"content": "“Nathan and Marisa worked hard to incorporate our ideas into our website. I highly recommend Nathan and Marisa as a reliable and trustworthy pair.”",
				"author": "Charles Mullany",
				"authorDescription": "Chief Executive Officer at HostGenius",
				"avatar": "/static/images/hostgenius/charles.png"
			},
			"image": "/static/images/hostgenius/office.jpg"
		}
}
