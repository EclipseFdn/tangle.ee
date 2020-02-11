import React from 'react'
import Fade from 'react-reveal/Fade'

import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Landing from '@sections/about/Landing'
import Topics from '@sections/about/Topics'
import Meetup from '@sections/about/Meetup'
import Distribution from '@sections/distribution/Distribution'
import TopicAnimationWrapper from '@sections/TopicAnimationWrapper'

import LinkAction from '@components/LinkAction'
import Resources from '@components/Resources'

import RunningWoman from '@animations/about/runningwoman/RunningWoman'
import GrowingTree from '@animations/about/growingtree/GrowingTree'
import Marker from '@animations/about/marker/Marker'

const Organizations = () => {
  const whatWeSayData = [
    {
      img: '/images/people/ham.jpg',
      title: 'Hamoun Karami, CEO & Founder of Lidbot',
      quote:
        "“The IOTA Discord community is more than just an online chat group. It's people coming together to educate, foster growth and help turn ideas into real working products.”"
    },
    {
      img: '/images/people/daniel.jpg',
      title:
        'Daniel Trauth, Division Director Digital Transformation of Manufacturing Technologies WZL of RWTH Aachen University',
      quote:
        '“IOTA is not only a technology, but also an inspiration and motivator for developing the future of a machine economy.”'
    },
    {
      img: '/images/people/nino.png',
      title: 'Nino Ulrich, Co-Founder of AKITA Blockchain Solutions',
      quote:
        "“It is essential for the mass adoption of Distributed Ledger Technologies to make tangible applications that everyone can see, touch and experience. That's exactly what the IOTA community, developers and corporate partners are doing.”"
    },
    {
      img: '/images/people/mathieu.jpg',
      title: 'Mathieu Viossat, Co-Founder of thetangle.org',
      quote: "“I have never seen as many engagements and talents than in the IOTA community. I'm proud to be one of its members”"
    },
    {
      img: '/images/people/Terry_Shane.jpeg',
      title: 'Terry Shane, Founder of bIOTAsphere.com',
      quote:
        '“It’s rare to see the vision & passion personified by the IF team. Focused on advancing the global state of knowledge in DLT and cryptography, they never resort to hype & hyperbole. I am fortunate to have discovered IOTA in its early stages and look forward to contributing to its continued growth & success.”'
    }
  ]
  return (
    <>
      <Header />
      <Landing>
        <article>
          <h1>A Digital Trust Layer</h1>
          <h3>IOTA’s Tangle technology provides truth, reliability and security connecting our digital and physical worlds.</h3>
          <p>
            The Tangle is a permissionless, feeless, scalable distributed ledger, designed to support trustworthy data and value
            transfer between humans and machines.
          </p>
          <LinkAction to="https://www.iota.org/">Visit the IOTA Site</LinkAction>
          <RunningWoman />
        </article>
      </Landing>
      <Topics>
        <article>
          <div>
            <Fade bottom duration={800} distance="10%">
              <h2>Grow and Learn</h2>
              <p>
                Start your journey with IOTA by visiting our documentation portal. Find more information about how IOTA works,
                what it enables and how you can use it.
              </p>
              <LinkAction to="https://docs.iota.org/">IOTA Documentation</LinkAction>
            </Fade>
          </div>
          <aside>
            <TopicAnimationWrapper className="animated">
              <GrowingTree />
            </TopicAnimationWrapper>
          </aside>
        </article>
      </Topics>
      <Meetup>
        <article>
          <div>
            <Fade bottom duration={800} distance="0">
              <h1>
                <small>Network</small>
                Discover the IOTA Ecosystem
              </h1>
              <p>
                Discover IOTA projects, view meet-ups or connect with developers. The IOTA ecosystem is a thriving community of
                developers and technologists committed to innovating with IOTA technologies.
              </p>
              <LinkAction to="https://ecosystem.iota.org/">Visit Ecosystem</LinkAction>
            </Fade>
          </div>
          <aside>
            <TopicAnimationWrapper className="animated">
              <Marker />
            </TopicAnimationWrapper>
          </aside>
        </article>
      </Meetup>
      <Distribution
        title="What we say"
        data={whatWeSayData}
        actionLink={{ to: 'https://discord.iota.org', label: 'Visit our Discord' }}
      />
      <Footer />
    </>
  )
}

export default Organizations
