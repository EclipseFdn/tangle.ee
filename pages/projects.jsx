import React from 'react'
import Fade from 'react-reveal/Fade'

import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Landing from '@sections/projects/Landing'
import Topics from '@sections/projects/Topics'
import TopicAnimationWrapper from '@sections/TopicAnimationWrapper'

import LinkAction from '@components/LinkAction'
import Resources from '@components/Resources'

import FloatingMan from '@animations/projects/floatingman/FloatingMan'
import IriNode from '@animations/projects/irinode/IriNode'
import Lock from '@animations/projects/lock/Lock'
import Tree from '@animations/projects/tree/Tree'

const Organizations = () => {
  return (
    <>
      <Header />
      <Landing>
        <article>
          <h1>Cutting Edge Projects</h1>
          <h3>Build, innovate and collaborate on Decentralized Ledger Technology</h3>
          <p>
            The Tangle EE working group is comprised of various projects. Each project explores a particular use case on IOTA.
          </p>
          <p>
            Together with our commercial and academic partners, we provide thought-leadership and develop libraries, applications,
            documentation, and examples that allow our ecosystem to build innovative solutions with the Tangle.
          </p>
          <p>All projects are governed by Eclipse and are open-source by default.</p>
          <LinkAction to="https://www.eclipse.org/org/workinggroups/tangle_ee_charter.php">View Our Charter</LinkAction>
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
              <h2>Unified Identity</h2>
              <p>
                This project involves building an interoperable trust infrastructure that enables identity for people,
                organizations and things. We will develop a high-level protocol and further tooling to encourage adoption of
                decentralized identity on IOTA.
              </p>
              <Resources
                data={[
                  { type: 'proposal', to: 'https://files.iota.org/comms/Eclipse_Unified_Identity.pdf', text: 'Proposal' },
                  { type: 'discord', to: 'https://discord.iota.org' }
                ]}
              />
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
                The aim of this project is to enable organizations to easily deploy and participate in decentralized marketplaces.
                We will develop an extendable toolkit to enable real-time trading of data, products, and services.
              </p>
              <Resources
                data={[
                  {
                    type: 'proposal',
                    to: 'https://files.iota.org/comms/Eclipse_IOTA_Decentralized_Marketplace.pdf',
                    text: 'Proposal'
                  },
                  { type: 'discord', to: 'https://discord.iota.org' }
                ]}
              />
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
