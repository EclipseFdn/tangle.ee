import React from 'react'
import Fade from 'react-reveal/Fade'

import { sortByName } from '../lib/utils'

import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Landing from '@sections/members/Landing'
import MembersSection from '@sections/members/Members'
import Topics from '@sections/members/Topics'
import TopicAnimationWrapper from '@sections/TopicAnimationWrapper'

import MembersData from '@sections/MembersData'
import Team from '@animations/members/team/Team'

import FantasySlider from '@components/FantasySlider'
import LinkAction from '@components/LinkAction'

const Members = () => {
  const members = sortByName(MembersData)
  const sliderSettings = {
    loop: false,
    slidesPerView: 1,
    centeredSlides: true,
    watchOverflow: true,
    // spaceBetween: 20,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   renderBullet: (index, className) => {
    //     return `<button class="${className}" type="button"><div/><img src=${
    //       MembersData.filter((member) => member.quote)[index].logo
    //     } /></span>`
    //   }
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      980: {
        slidesPerView: 1,
      },
    },
  }
  return (
    <>
      <Header />
      <Landing>
        <article>
          <div className="absolute-positioned">
            <h1>Members</h1>
            <h6>Recently joined</h6>
          </div>
          <FantasySlider settings={sliderSettings}>
            {members
              .filter((member) => member.quote)
              .map((member, index) => {
                if (index < 4) {
                  return (
                    <div key={`slider-member-quote-${index}`}>
                      <div>
                        <div>
                          <h2>{member.name}</h2>
                          <p className="quote">{member.quote || member.description}</p>
                          <p className="author">{member.author}</p>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              })
              .filter((member) => member !== null)}
          </FantasySlider>
        </article>
      </Landing>
      <MembersSection>
        <h1>All Members</h1>
        <h6>Recently joined</h6>
        <ul>
          {MembersData.map((member, index) => {
            return (
              <li key={`slider-member-${index}`}>
                <a href={member.url} target="_blank" rel="noopener noreferrer">
                  <img alt="" src={member.logo} />
                </a>
              </li>
            )
          })}
        </ul>
      </MembersSection>
      <Topics>
        <article>
          <div>
            <Fade bottom duration={800} distance="10%">
              <h1>Become a Member</h1>
              <h6>Together we:</h6>
              <div className="topic-wrapper">
                <h3>Innovate</h3>
                <p>
                  IOTA is a groundbreaking technology that enables a variety of new business models. There are multiple avenues
                  through which you can expedite your own innovation efforts or complement existing solutions.
                </p>
              </div>
              <div className="topic-wrapper">
                <h3>Collaborate</h3>
                <p>
                  Have a seat at the table with other industry players, with an opportunity to share knowledge and work towards
                  shared objectives.
                </p>
              </div>
              <div className="topic-wrapper">
                <h3>Grow</h3>
                <p>
                  Rapidly move complex projects forward. As an open-source project, Tangle EE invites open contributions from
                  community developers, pooling resources to accelerate development.
                </p>
              </div>
              <h2>Tangle EE Membership</h2>
              <LinkAction to="mailto:tangle-ee@iota.org">Member Enquiries</LinkAction>
            </Fade>
          </div>
          <aside>
            <TopicAnimationWrapper className="animated">
              <Team />
            </TopicAnimationWrapper>
          </aside>
        </article>
      </Topics>
      <Footer />
    </>
  )
}

export default Members
