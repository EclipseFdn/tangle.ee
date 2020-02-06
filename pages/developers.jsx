import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Landing from '@sections/developers/Landing'
import Subtopics from '@sections/developers/Subtopics'
import developersFAQs from '@sections/faq/developers'
import FAQ from '@sections/faq/FAQ'

import LinkAction from '@components/LinkAction'

import Tree from '@animations/developers/tree/Tree'
import Github from '@animations/developers/github/Github'
import Proposals from '@animations/developers/proposals/Proposals'
import Lupe from '@animations/developers/lupe/Lupe'

const Developers = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Tree />
        <Landing>
          <article>
            <h1>Make a difference</h1>
            <h3>Contribute to new technologies</h3>
            <p>
              Tangle EE is a developer-friendly environment where you can:
              <ul className="bullet-list">
                <li>Have visibility of strategic discussions on new Task Force initiatives</li>
                <li>Contribute to our task force initiatives as a developer</li>
                <li>Collaborate with enterprise-level organizations and other IOTA community developers</li>
              </ul>
            </p>
            <p>Become a member of the Tangle EE working group to follow progress or get involved.</p>
            <LinkAction to="/">Register now</LinkAction>
          </article>
        </Landing>
        <Subtopics>
          <article>
            <h3>You can participate in different ways</h3>
          </article>
          <article>
            <Fade bottom duration={800} distance="10%">
              <div>
                <Github />
                <h2>Become a Contributor</h2>
                <p>
                  After submitting pull requests on a Tangle EE GitHub repository, Eclipse committers will review your code. In
                  the Tangle EE repositories, you can track changes across different versions and keep up with the latest changes.
                </p>
              </div>
            </Fade>
          </article>
          <article>
            <Fade bottom duration={800} distance="10%">
              <div>
                <Proposals />
                <h2>Submit proposals</h2>
                <p>
                  Create your own projects and propose them for review. If your projects are successful, they’ll be added to the
                  Tangle EE for others to use and contribute to.
                </p>
              </div>
            </Fade>
          </article>
          <article>
            <Fade bottom duration={800} distance="10%">
              <div>
                <Lupe />
                <h2>Report Bugs</h2>
                <p>
                  Community bug reporting is an important part of our software improvement. Be a hero and let the working group
                  know about any bugs you find in a project.
                </p>
              </div>
            </Fade>
          </article>
        </Subtopics>
      </Wrapper>
      <FAQ data={developersFAQs} />
      <Footer />
    </>
  )
}

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`

export default Developers
