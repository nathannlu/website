import React, { useState } from 'react';

import Testimonial from '@/components/Testimonial';

const HostGenius = () => {

	return (
    <>
			<main className="relative">
				<div className="h-screen bg-cover flex items-center" style={{backgroundImage: `url(/static/images/dgraph/hero.png)`}}>
					<div className="container mx-auto px-12">
            <h1 className="text-5xl md:text-6xl mb-6 text-white md:w-2/3">
              Rebuilding website to be optimized for performance
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
                <a target="_blank" href="https://dgraph.io/">
                  View live
                </a>
              </span>
            </div>

            <div className="flex-1">
              <p className="font-bold mb-4">
                Project overview
              </p>
              <p className="mb-4">
                Dgraph Labs, the #1 open source graph database, strives to turn soiled data across complex data structures into real-time intelligence.
              </p>

              <p className="mb-4">
                I was tasked to migrate the main website from an old technology to modern
              </p>

              <p className="mb-4">
                This project included collaboration with key stakeholders across the leadership team and other departments, working closely with design and marketing.
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
      Increased Google impressions by 161% and organic traffic by 135% in six months.
                </p>
                </div>
                <div className="flex-1">
                <p>
  Increased Dgraph Cloud sign ups by 95% in six months.
                </p>
                </div>
                <div className="flex-1">
                <p>
  Increased enterprise leads by 800% in six months.
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

