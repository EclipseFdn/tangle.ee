import React from 'react'
import Fade from 'react-reveal/Fade'

import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Landing from '@sections/community/Landing'
import Topics from '@sections/community/Topics'
import Meetup from '@sections/community/Meetup'
import Distribution from '@sections/distribution/Distribution'
import TopicAnimationWrapper from '@sections/TopicAnimationWrapper'

import LinkAction from '@components/LinkAction'
import Resources from '@components/Resources'

import RunningWoman from '@animations/community/runningwoman/RunningWoman'
import GrowingTree from '@animations/community/growingtree/GrowingTree'
import Marker from '@animations/community/marker/Marker'

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
        'Daniel Trauth, Founder of Industrial IOTA Lab Aachen OR Daniel Trauth, Chief Engineer WZL of RWTH Aachen University',
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
    },
    {
      img: '/images/people/user_photo_1.png',
      title: 'Pr Manager at XY  Foundation',
      quote: '“Learn more about the Eclipse Foundation and the benefits it offers”'
    }
  ]
  return (
    <>
      <Header />
      <Landing>
        <article>
          <h1>Community</h1>
          <h3>Passionate developers building commercially friendly projects</h3>
          <p>
            Network with talented developers and learn about IOTA technology to lead the way towards commercial applications of
            Tangle EE projects.
          </p>
          <LinkAction to="/">View Eclipse Hub</LinkAction>
          <RunningWoman />
        </article>
      </Landing>
      <Topics>
        <article>
          <div>
            <Fade bottom duration={800} distance="10%">
              <h2>Let´s collaborate</h2>
              <p>
                Join in community discussions with other like-minded developers. Ask for help, offer advice, or simply spark
                transparent, engaging discussions about technology.
              </p>
              <Resources
                data={[
                  { type: 'github', to: '#' },
                  { type: 'discord', to: '#' },
                  { type: 'report', to: '#' },
                  { type: 'proposal', to: '#' }
                ]}
              />
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
                Join our Meetups
              </h1>
              <p>
                Grow your network and connect with developers in your local area. We’ll be announcing local meet-ups as they
                happen. Be sure to register your interest and stay up-to-date!
              </p>
              <LinkAction to="/">View Eclipse Hub</LinkAction>
            </Fade>
          </div>
          <aside>
            <TopicAnimationWrapper className="animated">
              <Marker />
            </TopicAnimationWrapper>
          </aside>
        </article>
      </Meetup>
      <Distribution title="What we say" data={whatWeSayData} actionLink={{ to: '#', label: 'Request Membership' }} />
      <Footer />
    </>
  )
}

export default Organizations
