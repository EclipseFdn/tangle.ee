import React from 'react'
import Fade from 'react-reveal/Fade'

import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Landing from '@sections/working-group/Landing'
import Topics from '@sections/working-group/Topics'
import TopicAnimationWrapper from '@sections/TopicAnimationWrapper'

import LinkAction from '@components/LinkAction'

import FloatingMan from '@animations/working-group/floatingman/FloatingMan'
import IriNode from '@animations/working-group/irinode/IriNode'
import Lock from '@animations/working-group/lock/Lock'
import Tree from '@animations/working-group/tree/Tree'

const Organizations = () => {
  return (
    <>
      <Header />
      <Landing>
        <article>
          <h1>Cutting-edge Task Forces for an IoT era</h1>
          <h3>Build, innovate and collaborate on Decentralized Ledger Technology</h3>
          <p>
            The core mission of our task forces is to build unique innovations based on Tangle Technology, by developing the
            required second-layer libraries, applications, documentation, thought leadership and examples to allow others in the
            ecosystem to harness and deploy for their own needs. All task forces are governed by Eclipse and are open-source by
            default.
          </p>
          <LinkAction to="/">Read the Whitepaper</LinkAction>
          <FloatingMan />
        </article>
      </Landing>
      <Topics>
        <article>
          <aside>
            <TopicAnimationWrapper className="animated">
              <Lock />
            </TopicAnimationWrapper>
          </aside>
          <div>
            <Fade bottom duration={800} distance="10%">
              <h2>Decentralized Identity</h2>
              <p>
                The aim is of this task force is to create an interoperable trust infrastructure that enables identity for people,
                organizations and things. This implementation is called the Unified Identity Protocol (UIP). This includes a
                high-level protocol, interoperability with complementary technologies, and further tools to encourage new
                innovation.
              </p>
            </Fade>
          </div>
        </article>
        <article>
          <aside>
            <TopicAnimationWrapper className="animated">
              <IriNode />
            </TopicAnimationWrapper>
          </aside>
          <div>
            <Fade bottom duration={800} distance="10%">
              <h2>Decentralized Marketplaces</h2>
              <p>
                The aim of this task force is to enable organizations to easily deploy and utilize industry-agnostic decentralized
                marketplaces. This includes developing frameworks, building blocks, API’s and toolboxes which can easily be
                deployed, customized and extended
              </p>
            </Fade>
          </div>
        </article>
        <Tree />
      </Topics>
      <Footer />
    </>
  )
}

export default Organizations
