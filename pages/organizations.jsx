import React from 'react'
import Fade from 'react-reveal/Fade'

import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Landing from '@sections/organizations/Landing'
import Topics from '@sections/organizations/Topics'
import Circle from '@sections/organizations/Circle'
import organizationsFAQs from '@sections/faq/organizations'
import FAQ from '@sections/faq/FAQ'

import LinkAction from '@components/LinkAction'
import Card from '@components/Card'

import WomanOnHand from '@animations/organizations/WomanOnHand'
import FileExplotion from '@animations/organizations/FileExplotion'
import Tree from '@animations/organizations/Tree'

const Organizations = () => {
  return (
    <>
      <Header />
      <Landing>
        <article>
          <h1>Work towards a shared vision</h1>
          <h3>Collaborate in building innovative solutions on IOTA</h3>
          <p>
            Tangle EE provides an opportunity to:
            <ul className="bullet-list">
              <li>Join projects and have your say about the direction of IOTA development</li>
              <li>Network with other member organizations</li>
              <li>Interact with the Eclipse and IOTA developer communities</li>
            </ul>
          </p>
          <p>To join a project and have your say, become a member of the Tangle EE Working Group.</p>
          <LinkAction to="mailto:tangle-ee@iota.org">Contact us</LinkAction>
          <WomanOnHand />
        </article>
      </Landing>
      <Topics>
        <article>
          <div>
            <Fade bottom duration={800} distance="10%">
              <h2>Tangle EE enables an open, governed development process</h2>
              <p>
                Tangle EE projects are governed by the Eclipse Foundation whose open governance allows you to focus on your
                organization’s needs rather than establishing legal and licensing frameworks. All Tangle EE projects are licenced
                under
                {'    '}
                <a className="action-color" href="https://www.apache.org/licenses/LICENSE-2.0.html">
                  Apache version 2.0
                </a>
                .
              </p>
            </Fade>
          </div>
          <aside>
            <FileExplotion />
          </aside>
        </article>
      </Topics>
      <Circle>
        <article>
          <ul>
            <Fade className="custom-position" bottom duration={800} distance="20%">
              <Card
                imagePath="/images/organizations_icon.svg"
                title="Enrich your development team"
                content="Allow your developers to collaborate with experts and reap the benefits of open source."
                className="card custom-position"
              />
            </Fade>
            <div className="break" />
            <Fade className="custom-position" bottom duration={800} distance="20%">
              <Card
                imagePath="/images/fileshare.svg"
                title="Boost your innovation"
                content="Build innovative solutions across data, identity and payments."
                className="card custom-position"
              />
            </Fade>
            <Fade className="custom-position" bottom duration={800} distance="20%">
              <Card
                imagePath="/images/lightbulb.svg"
                title="Improve your reputation"
                content="Show others the quality of your work and the positive impact it provides."
                className="card custom-position"
              />
            </Fade>
          </ul>
          <Tree />
        </article>
      </Circle>
      <FAQ data={organizationsFAQs} />
      <Footer />
    </>
  )
}

export default Organizations
