import React, { useState, useEffect } from 'react';

import Testimonial from '@/components/Testimonial';
//import NFT from '@/components/NFT';
//import {Helmet} from "react-helmet";

const HostGenius = () => {
  const [isNftCompiled, setIsNftCompiled] = useState(false);

  useEffect(() => {
    // Toggle the state every 5 seconds
    const intervalId = setInterval(() => {
      setIsNftCompiled((prevToggle) => !prevToggle);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const layers = ['https://airnfts.s3.amazonaws.com/nft-images/20210814/Cyberpunk_001_1628933289447.png', 'https://airnfts.s3.amazonaws.com/nft-images/20210814/Cyberpunk_001_1628933289447.png', 'https://airnfts.s3.amazonaws.com/nft-images/20210814/Cyberpunk_001_1628933289447.png',]

	return (
    <>

			<main className="relative pb-24">
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
				<section className="container mx-auto px-12 pt-32">
          <div className="w-full md:w-2/3 mb-8">
            <h2 className="text-3xl md:text-4xl mb-4">
              Improving the website performance
            </h2>
            <p className="mb-4">
As a small team, creating elegant designs was a luxury that didn't directly contribute to our growth. Therefore, to expedite the release of A/B test sections, we embarked on a website redesign to streamline the process.
            </p>
            <p className="mb-4">
    During this redesign, we placed a strong emphasis on optimizing performance and SEO. Consequently, we achieved significant improvements in our Google PageSpeed Insight scores.
            </p>
            <p>
      These endeavors led to an increase in our SEO rankings, resulting in a boost in website traffic.
            </p>
          </div>

          <div className="flex md:flex-wrap gap-x-4">
            <div className="flex-1">
              <img src="/static/images/ambition/pagespeed_old.png" />
              <p className="text-gray-500">
                Before
              </p>
            </div>

            <div className="flex-1">
              <img src="/static/images/ambition/pagespeed_new.png" />
              <p className="text-gray-500">
                After
              </p>
            </div>
          </div>
        </section>

        {/*
				<section className="container mx-auto px-12 pt-32">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:pr-24">
              <h2 className="text-3xl md:text-4xl mb-4">
                Intuitive web app design
              </h2>
              <p>
                Since majority of our users are new to crypto, on the frontend we display a visualization that helps users understand what is going on.
              </p>
            </div>
            <div className="w-full md:w-1/2 ml-auto" style={{height: '500px', marginTop: '300px'}}>
              <NFT layers={layers} compiled={isNftCompiled} />
            </div>

          </div>
        </section>
				<section className="container mx-auto px-12 pt-32">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl mb-4">
                Engineering behind our tools
              </h2>
              <p>
                We wanted to prioritze speed with our NFT generator, and robustness.
                In order to support large generations, we engineered an art generator that uses a producer consumer queue pattern. the producer had gpu intensive functions (art compositing) and the consumer has a lot of cpu cycles (zipping), therefor the producer and consumer workers are ran on separate cloud instances. they communicate with eachother using grpc, and the messages are compressed for faster communication.
              </p>
            </div>

          </div>
        </section>
        */}

			</main>
		</>
	)
};

export default HostGenius

