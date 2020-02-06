import React from 'react'
import Fade from 'react-reveal/Fade'

import Header from '@sections/Header'
import Intro from '@sections/index/Intro'
import Topics from '@sections/index/Topics'
import Principles from '@sections/index/Principles'
import Progress from '@sections/index/Progress'
import SlidingFooter from '@sections/index/SlidingFooter'
import TopicAnimationWrapper from '@sections/TopicAnimationWrapper'

import LinkArrow from '@components/LinkArrow'
import LinkAction from '@components/LinkAction'

import Box from '@animations/index/box/Box'
import Programmer from '@animations/index/programmer/Programmer'
import CodeTree from '@animations/index/codetree/CodeTree'
import StandingProgrammer from '@animations/index/standingprogrammer/StandingProgrammer'
import StandingLady from '@animations/index/standinglady/StandingLady'

const Index = () => {
  return (
    <>
      <Header />
      <Intro>
        <h1>The Center for IOTA Innovation</h1>
        <p>
          Tangle EE is an IOTA working group collaboration with the Eclipse Foundation: A governed environment for organizations
          and contributors to develop new ideas and applications using IOTA technology.
        </p>
        <LinkAction to="/">Learn more</LinkAction>
      </Intro>
      <Topics>
        <article>
          <div>
            <Fade bottom duration={800} distance="10%">
              <h2>Tangle EE increases commercial collaboration</h2>
              <p>
                Tangle EE provides a governed environment for new task forces starting with Digital Identity and Industry
                Marketplaces. Organizations can now join the Tangle EE working group to shape the development of exciting new
                future technologies. CTA: View Task Forces
              </p>
              <LinkAction to="/working-group">View Task Forces</LinkAction>
            </Fade>
          </div>
          <aside>
            <TopicAnimationWrapper className="animated">
              <Box />
            </TopicAnimationWrapper>
          </aside>
        </article>
        <article>
          <div>
            <Fade bottom duration={800} distance="10%">
              <h2>A Governance Framework for Task Forces</h2>
              <p>
                Tangle EE provides a legal and regulatory environment for the development process. This process drives large and
                small projects alike and allows open, governed contributions from a wider range of organisations and individuals.
              </p>
              <LinkAction to="https://www.eclipse.org/projects/dev_process/" target="_blank">
                How it works
              </LinkAction>
            </Fade>
          </div>
          <aside>
            <TopicAnimationWrapper className="animated">
              <Programmer />
            </TopicAnimationWrapper>
          </aside>
        </article>
        <article>
          <div>
            <Fade bottom duration={800} distance="10%">
              <h2>Accelerating Growth in IOTA Innovation</h2>
              <p>
                Tangle EE brings both the existing ecosystems of IOTA and Eclipse together, including development and intellectual
                resource, with the opportunity for project committers to actively participate in groundbreaking decentralised
                technology.
              </p>
              <LinkAction to="https://www.eclipse.org/contribute/" target="_blank">
                How to contribute
              </LinkAction>
            </Fade>
          </div>
          <aside>
            <TopicAnimationWrapper className="animated static last">
              <CodeTree />
            </TopicAnimationWrapper>
          </aside>
        </article>
      </Topics>
      <Principles>
        <h2>
          <small>TANGLE EE</small>
          Our Guiding
          <br />
          Principles
        </h2>
        <ul>
          <Fade bottom duration={800} distance="20%">
            <li>
              <img alt="" src="/images/01_Governance_Icon.svg" />
              <h4>Improved Governance</h4>
              <p>
                Tangle EE gives both industry and our community a{' '}
                <span className="bold">shared legal and licensing framework</span> so they can focus on technology, knowing that
                any projects can be <span className="bold">safely distributed as commercial products</span>.
              </p>
            </li>
          </Fade>
          <Fade bottom duration={800} distance="20%">
            <li>
              <img alt="" src="/images/01_Transparency_Icon.svg" />
              <h4>Transparency</h4>
              <p>
                The Eclipse framework ensures that <span className="bold">development is transparent</span> and that{' '}
                <span className="bold">anyone can participate</span>. Interested parties can choose to contribute or simply
                monitor progress.
              </p>
            </li>
          </Fade>
          <Fade bottom duration={800} distance="20%">
            <li>
              <img alt="" src="/images/01_Open_Source_Icon.svg" />
              <h4>Open Source</h4>
              <p>
                The Eclipse Foundation is a non-profit open-source organization that is{' '}
                <span className="bold"> supported by over 275 organisational members</span>. The foundation is home to frameworks
                for a wide range of technology domains including IoT, automotive, geospatial and systems engineering.
              </p>
            </li>
          </Fade>
          <Fade bottom duration={800} distance="20%">
            <li>
              <img alt="" src="/images/01_Public_Engagement_Icon.svg" />
              <h4>Public Engagement</h4>
              <p>
                The Eclipse and IOTA ecosystems combine to <span className="bold">accelerate awareness of IOTA</span>, actively
                encouraging more developers and organizations to have a{' '}
                <span className="bold">seat at the development table</span>.
              </p>
            </li>
          </Fade>
        </ul>
      </Principles>
      <Progress>
        <Fade bottom duration={800} distance="10%">
          <h2>Tangle EE: enabling a platform for industry contributions using IOTA</h2>
          <p>Tangle EE is already working to develop IOTA technology solutions to accelerate adoption.</p>
          <p>
            Initial target industries for Tangle EE’s commercialization of IoT payments infrastructure include Mobility and
            Automotive, Global Trade and Supply Chain, eHealth, Smart Energy (including Smart Cities), and Industrial IoT.
          </p>
          <p>New uses-cases and projects are in regular development.</p>
          <LinkAction to="/">Register for updates</LinkAction>
        </Fade>
      </Progress>
      <SlidingFooter>
        <h2>
          <small>Next steps</small>
          Join. Be involved.
        </h2>

        <nav>
          <LinkArrow to="/developers">
            <strong>Developers</strong>
            <small>Register your interest in Tangle EE and take part with future proposals.</small>
            <StandingProgrammer />
          </LinkArrow>
          <LinkArrow to="/organizations">
            <strong>Organisations</strong>
            <small>Learn more about the Eclipse Foundation and the benefits it offers.</small>
            <StandingLady />
          </LinkArrow>
        </nav>
      </SlidingFooter>
    </>
  )
}
export default Index
