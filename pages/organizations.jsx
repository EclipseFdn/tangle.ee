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
          <h3>Collaborate towards the future of IOTA innovations</h3>
          <p>
            Tangle EE provides an opportunity to:
            <ul className="bullet-list">
              <li>Join project task forces to have your say about the direction of IOTA development</li>
              <li>Network with other member organizations</li>
              <li>Interact with the Eclipse and IOTA developer communities</li>
            </ul>
          </p>
          <p>
            To join a task force, work on a project, and have your say in the future of IOTA development, become a member of the
            Tangle EE Working Group.
          </p>
          <LinkAction to="mailto:contact@iota.org">Contact us</LinkAction>
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
                title="Grow your development team"
                content="Allow your developers to collaborate with experts and use commercially oriented best practices."
                className="card custom-position"
              />
            </Fade>
            <div className="break" />
            <Fade className="custom-position" bottom duration={800} distance="20%">
              <Card
                imagePath="/images/fileshare.svg"
                title="Make interoperable products"
                content="Develop products that are compatible with each other and more valuable to customers."
                className="card custom-position"
              />
            </Fade>
            <Fade className="custom-position" bottom duration={800} distance="20%">
              <Card
                imagePath="/images/lightbulb.svg"
                title="Improve your reputation"
                content="Show others the quality of your work and the positive impact it has on the technology."
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
