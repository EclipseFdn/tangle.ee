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
              By contributing to Tangle EE projects you have a chance to work alongside and connect with world-leading companies
              and research departments. Committed developers that demonstrate real value are invited to have a seat at the table
              and join in with discussions.
            </p>
            <p>Learn how the contribution process works and get involved.</p>
            <LinkAction to="https://www.eclipse.org/contribute/">How to Contribute</LinkAction>
          </article>
        </Landing>
        <Subtopics>
          <article>
            <Fade bottom duration={800} distance="10%">
              <div>
                <Github />
                <h2>Become a Contributor</h2>
                <p>
                  After accepting the Eclipse Contribution Agreement you can submit pull requests to Tangle EE projects.
                  Contributors that impress can become committers and have a say in the project.
                </p>
              </div>
            </Fade>
          </article>
          <article>
            <Fade bottom duration={800} distance="10%">
              <div>
                <Proposals />
                <h2>Become a Committer</h2>
                <p>
                  Committers have access to source repositories and can join in with the working group. New committers are
                  nominated based on merit.
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
                  Community bug reporting is an important part of software improvement. Open a pull request or open an issue to
                  report any bugs you find in a project.
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
