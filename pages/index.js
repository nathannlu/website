import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const [slide, setSlide] = useState(0)
  return (
    <div className="container mx-auto mt-24">

      <section>
        <div style={{ height: '120px' }}>
          {
            {
              0: <Slide0 />,
              1: <Slide1 />,
              2: <Slide2 />,
              3: <Slide3 />,
            }[slide]
          }
        </div>

        <div>
          <button
            style={{
              border: '1px solid black',
              fontSize: '14px',
              letterSpacing: 1.5,
              borderRadius: '4px',
              padding: '4px 16px',
            }}
            onClick={() =>
              setSlide((prevState) => {
                if (prevState == 3) {
                  return 0
                }
                return prevState + 1
              })
            }
          >
            NEXT
          </button>
        </div>
      </section>
    </div>
  )
}

const Slide0 = () => {
  return (
    <div className="mb-8 flex flex-wrap">
      <div className="w-1/2">
        <p>
          Dropped out of university to do{' '}
          <a rel="noreferrer" href="https://imaginelab.io/" target="_blank">
            freelance programming work
          </a>
        </p>
        <p>[2018]</p>
      </div>

      {/*
					<div className="w-1/4">
						<img style={{height: '100px'}} src="https://imaginelab.io/images/logo-dark.svg" />
					</div>
					*/}
    </div>
  )
}

const Slide1 = () => {
  return (
    <div className="mb-8 flex flex-wrap">
      <div className="w-1/2">
        <p>
          Worked as a full stack developer at{' '}
          <a rel="noreferrer" href="https://www.castlelab.ca/" target="_blank">
            Castle Lab
          </a>{' '}
          — an Adobe award winning design studio
        </p>
        <p>[2019]</p>
      </div>

      {/*
					<div className="w-1/4">
						<video autoPlay loop muted>
							<source src="https://uploads-ssl.webflow.com/5fb10838025d14591815e101/5fba868fcb2f3d59cd039d6a_White Background Castle-transcode.mp4" />
						</video>
					</div>
					*/}
    </div>
  )
}

const Slide2 = () => {
  return (
    <div className="mb-8 flex flex-wrap">
      <div className="w-1/2">
        <p>
          Brought websites to life as a front end developer @{' '}
          <a rel="noreferrer" target="_blank" href="https://dgraph.io/">
            Dgraph
          </a>
        </p>
        <p>[2021]</p>
      </div>
      {/*
					<div className="w-1/4">
						<img alt="dgraph" layout="fill" src="https://dgraph.io/wp-content/uploads/2021/07/dgraph-unify-data.png" />
					</div>
					*/}
    </div>
  )
}

const Slide3 = () => {
  return (
    <div className="mb-8 flex flex-wrap">
      <div className="w-1/2">
        <p>
          Founded and lead a team at{' '}
          <a rel="noreferrer" target="_blank" href="https://ambition.so/">
            Ambition
          </a>
          , serving over 14,700 users in creating NFT collections
        </p>
        <p>[2022]</p>
      </div>
      {/*
					<div className="w-1/4">
						<img alt="dgraph" layout="fill" src="https://uploads-ssl.webflow.com/61a5732dd539a17ad13b60fb/61d34ab7c783ea4e08774112_combination-primary-logo.png" />
					</div>
					*/}
    </div>
  )
}
