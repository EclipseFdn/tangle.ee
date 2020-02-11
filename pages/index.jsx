import React from 'react'
import Fade from 'react-reveal/Fade'

import Header from '@sections/Header'
import Intro from '@sections/index/Intro'
import Members from '@sections/index/Members'
import Topics from '@sections/index/Topics'
import Principles from '@sections/index/Principles'
import Progress from '@sections/index/Progress'
import SlidingFooter from '@sections/index/SlidingFooter'
import TopicAnimationWrapper from '@sections/TopicAnimationWrapper'
import MembersData from '@sections/MembersData'

import LinkArrow from '@components/LinkArrow'
import LinkAction from '@components/LinkAction'
import ModalCard from '@components/ModalCard'

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
        <h1>A New Center for IOTA Innovation</h1>
        <p>
          Tangle EE is a working group collaboration with the Eclipse Foundation. It provides a governed environment for
          organizations and contributors to develop new ideas and applications using IOTA technologies.
        </p>
        <LinkAction to="/projects">Learn more</LinkAction>
      </Intro>
      <Members>
        <h2>
          Our Members <LinkArrow to="/members">View member page</LinkArrow>
        </h2>
        <ul>
          {MembersData.map((member) => {
            return (
              <ModalCard
                key={member.name}
                logo={member.logo}
                title={member.name}
                description={member.description}
                url={member.url}
              />
            )
          })}
        </ul>
        <LinkArrow to="/members">View member page</LinkArrow>
      </Members>
      <Topics>
        <article>
          <div>
            <Fade bottom duration={800} distance="10%">
              <h2>Streamlining Development on IOTA</h2>
              <p>
                Tangle EE provides a governance framework for building projects on IOTA. Organizations can now join the Tangle EE
                working group and shape the development of exciting future technologies, starting with Unified Identity and
                Decentralized Marketplaces.
              </p>
              <LinkAction to="/projects">View Projects</LinkAction>
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
              <h2>Strengthening Commercial Collaboration</h2>
              <p>
                Tangle EE is an environment for organizations from across business and academia to work together. The group will
                develop new open-source solutions and provide thought-leadership in key IOTA use case areas.
              </p>
              <LinkAction to="/organizations">Join as an Organization</LinkAction>
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
              <h2>Growing IOTA's Ecosystem</h2>
              <p>
                Tangle EE brings the IOTA and Eclipse ecosystems together. Combining intellectual and development resources, we
                accelerate IOTA's innovation and adoption.
              </p>
              <LinkAction to="/developers">For Developers</LinkAction>
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
                <span className="bold">shared legal and licensing framework</span> so they can focus on development, knowing that
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
                <span className="bold">supported by over 275 organizational members</span>. The foundation is home to frameworks
                for a wide range of technology domains including IoT, automotive and systems engineering.
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
          <h2>Follow the Progress of Tangle EE as it Develops</h2>
          <p>
            Tangle EE is already working to accelerate commercial adoption of IOTA. We launch with projects for Decentralized
            Identity and Decentralized Marketplaces.
          </p>
          <p>You can follow the ongoing development through the Tangle EE mailing list.</p>
          <LinkAction to="https://accounts.eclipse.org/mailing-list/tangle.ee-wg">Join the mailing list</LinkAction>
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
            <strong>Organizations</strong>
            <small>Learn more about the Eclipse Foundation and the benefits it offers.</small>
            <StandingLady />
          </LinkArrow>
        </nav>
      </SlidingFooter>
    </>
  )
}
export default Index
