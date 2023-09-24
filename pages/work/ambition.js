import React, { useState } from 'react';

import Testimonial from '@/components/Testimonial';
//import {Helmet} from "react-helmet";

const HostGenius = () => {
	const [stylescape, setStylescape] = useState(2);

	return (
    <>

			<main className="relative">
				<div className="h-screen bg-cover flex items-center" style={{backgroundImage: `url(/static/images/ambition/hero.png)`}}>
					<div className="container mx-auto px-12">
            <h1 className="text-5xl md:text-6xl mb-6 text-white md:w-2/3">
              How I helped over 20,000 users launch their NFT collection
            </h1>
					</div>
				</div>
				<section className="container mx-auto px-12 pt-32">
          <div className="md:flex flex-wrap">
            <div className="flex-1 md:pr-8">
              <h2 className="text-3xl md:text-4xl mb-4">
                Intro
              </h2>
              <p>
                Building a community-driven business from the ground up.
              </p>
              <p className="font-bold mt-8 mb-2">
                Platforms
              </p>
              <p className="mb-8">
                Web and mobile
              </p>
              <span className="link">
                <a target="_blank" href="https://ambition.so/">
                  View live
                </a>
              </span>
            </div>

            <div className="flex-1">
              <p className="font-bold mb-4">
                Project overview
              </p>
              <p className="mb-4">
                As the lead web developer for an innovative NFT collection launch platform, I played a pivotal role in revolutionizing the NFT creation process for millions of users worldwide. Our platform empowers creators to bring their unique visions to life without the need for coding skills, ushering in a new era of NFT collection launches.
              </p>
             </div>
          </div>

          <section className="mt-24">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-8">
                Outcome
              </h2>
              <div className="md:flex flex-wrap gap-8">
                <div className="flex-1">
                  <p>
                    Driving 250,000 all time website visitors, 17,000 app sign ups, and over 2,500 paying users
                  </p>
                </div>
                <div className="flex-1">
                  <p>
                    Grew Youtube channel to over 60,000 views and 830 subscribers in 6 months.
                  </p>
                </div>
                <div className="flex-1">
                  <p>
                    Implemented agile and scrum management practices to successfully deliver weekly product releases.
                  </p>
                </div>
              </div>
            </div>
          </section>

				</section>


			</main>
		</>
	)
};

export default HostGenius

