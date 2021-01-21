import React, { useState } from 'react'
import styled from 'styled-components'

import theme from '@style/theme'

const Footer = () => {
  const MENU_LINKS = [
    {
      name: 'Eclipse',
      children: [
        { name: 'About Us', to: 'https://www.eclipse.org/org/' },
        { name: 'Contact Us', to: 'https://www.eclipse.org/org/foundation/contact.php' },
        { name: 'Donate', to: 'https://www.eclipse.org/donate' },
        { name: 'Governance', to: 'https://www.eclipse.org/org/documents/' },
        { name: 'Logo and Artwork', to: 'https://www.eclipse.org/artwork/' },
        { name: 'Board of Directors', to: 'https://www.eclipse.org/org/foundation/directors.php' }
      ]
    },
    {
      name: 'Legal',
      children: [
        { name: 'Privacy Policy', to: 'https://www.eclipse.org/legal/privacy.php' },
        { name: 'Terms of Use', to: 'https://www.eclipse.org/legal/termsofuse.php' },
        { name: 'Copyright Agent', to: 'https://www.eclipse.org/legal/copyright.php' },
        { name: 'Eclipse Public License', to: 'https://www.eclipse.org/legal/epl-2.0/' },
        { name: 'Legal Resources', to: 'https://www.eclipse.org/legal/' }
      ]
    },
    {
      name: 'Useful links',
      children: [
        { name: 'Report a Bug', to: 'https://bugs.eclipse.org/bugs/' },
        { name: 'Documentation', to: 'https://help.eclipse.org/' },
        { name: 'How to Contribute', to: 'https://www.eclipse.org/contribute/' },
        { name: 'Mailing Lists', to: 'https://www.eclipse.org/mail/' },
        { name: 'Forums', to: 'https://www.eclipse.org/forums/' },
        { name: 'Marketplace', to: 'https://marketplace.eclipse.org/' }
      ]
    },
    {
      name: 'Other',
      children: [
        { name: 'IDE and Tools', to: 'https://www.eclipse.org/ide/' },
        { name: 'Community of Projects', to: 'https://www.eclipse.org/projects' },
        { name: 'Working Groups', to: 'https://www.eclipse.org/org/workinggroups/' },
        { name: 'Research@Eclipse', to: 'https://www.eclipse.org/org/research/' },
        { name: 'Report a Vulnerability', to: 'https://www.eclipse.org/security/' },
        { name: 'Service Status', to: 'https://status.eclipse.org/' }
      ]
    }
  ]

  const INITIAL_SUBMENU = MENU_LINKS.map(() => false)
  const [mainMenuOpen, setMainMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(INITIAL_SUBMENU)

  const toggleMainMenu = (prevStateOpen) => {
    setMainMenuOpen(!mainMenuOpen)
    if (prevStateOpen) {
      setSubmenuOpen(INITIAL_SUBMENU)
    }
  }

  const toggleMenu = (n) => {
    const newItems = [...submenuOpen]
    newItems[n] = !newItems[n]
    setSubmenuOpen(newItems)
  }

  return (
    <Wrapper>
      <article>
        <img alt="" src="/images/tangle-ee.svg" />
        <div>
          <div className={`${mainMenuOpen ? 'open' : ''} toggle`} onClick={() => toggleMainMenu(!mainMenuOpen)}>
            Quick links
            <svg width="16" height="9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.014 8.738l.782-.662 7.233-6.337L14.495.01l-6.48 5.645L1.532.011 0 1.739l7.233 6.337.781.662z"
                fill={theme.colors.primary}
              />
            </svg>
          </div>
          <div className={`${mainMenuOpen ? 'open' : ''} menu`}>
            <ul>
              {MENU_LINKS.map((menuItem, index) => {
                return (
                  <li key={menuItem.name}>
                    <h6 className={`${submenuOpen[index] ? 'open' : ''}`} onClick={() => toggleMenu(index)}>
                      {menuItem.name}
                    </h6>
                    <ul className={`${submenuOpen[index] ? 'open' : ''} submenu`}>
                      {menuItem.children.map((submenuItem) => {
                        return (
                          <li key={submenuItem.name}>
                            <a href={submenuItem.to} target="_blank" rel="noreferrer noopener">
                              {submenuItem.name}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </article>
      <article>
        <small>Copyright @ Eclipse Foundation. All Rights Reserved.</small>
      </article>
      <svg viewBox="0 0 8960 7274" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3621" cy="3653" r="3621" fill="url(#footer-bg-1)" />
        <circle opacity=".5" cx="5339" cy="3621" r="3621" fill="url(#footer-bg-2)" />
        <defs>
          <linearGradient id="footer-bg-1" x1="2261.19" y1="3834.98" x2="6785.57" y2="3754.41" gradientUnits="userSpaceOnUse">
            <stop stopColor="#898ED4" />
            <stop offset=".399" stopColor="#30C9E8" />
            <stop offset=".886" stopColor="#65C0D1" />
            <stop offset="1" stopColor="#65C0D1" stopOpacity=".48" />
          </linearGradient>
          <linearGradient id="footer-bg-2" x1="3119.53" y1="2310.05" x2="4190.35" y2="4267.65" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3979B8" />
            <stop offset="1" stopColor="#65C0D1" />
          </linearGradient>
        </defs>
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 580px;
  padding-top: 110px;
  background: #fff;
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 48px;

  @media (max-width: 980px) {
    height: 420px;
    padding: 0px;
  }

  article:first-of-type {
    display: grid;
    grid-template-columns: 2fr 4fr;
    grid-gap: 26px;
    margin-bottom: 180px;
    padding-top: 40px;
    @media (min-width: 980px) and (max-width: 1300px) {
      margin-bottom: 140px;
    }

    > div {
      > .toggle {
        display: none;
      }
      > .menu > ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 26px;
        min-width: 500px;

        @media (max-width: 980px) {
          min-width: inherit;
        }
      }
    }

    @media (max-width: 980px) {
      display: block;

      > div {
        position: relative;

        > .toggle {
          display: block;
          width: 100%;
          border: 1px solid ${theme.colors.primary};
          border-radius: 10px;
          padding: 20px;
          line-height: 18px;
          font-size: 18px;
          font-family: 'Raleway', sans-serif;
          color: #2f6193;
          font-weight: 600;
          cursor: pointer;

          svg {
            position: absolute;
            top: 28px;
            right: 20px;
            transition: transform 0.3s ease-out;
          }
          &.open {
            border-radius: 9px 9px 0 0;
            border-bottom: 0;
            svg {
              transform: rotate(180deg);
            }
          }
        }
        > .menu {
          position: absolute;
          top: 60px;
          left: 0px;
          background: rgb(255, 255, 255);
          width: 100%;
          max-height: 0px;
          overflow-y: scroll;
          z-index: 10;
          border-radius: 0 0 9px 9px;
          transition: all 0.6s ease-out;
          border: 0;
          opacity: 0;
          &.open {
            max-height: 200px;
            border: 1px solid #009fe3;
            opacity: 1;
          }
          ul {
            display: block;
          }
          h6,
          .submenu li {
            margin: 0;
            border-bottom: 1px solid #009fe382;
            padding: 10px 20px;
            font-size: 17px;
            line-height: 30px;
          }
          h6 {
            background: #9ebbdc4d;
            position: relative;
            cursor: pointer;
            &:after {
              position: absolute;
              content: '+';
              top: 10px;
              right: 17px;
              transition: transform 0.3s ease-out;
              font-size: 39px;
              font-weight: normal;
            }
            &.open {
              &:after {
                content: '-';
              }
            }
          }
          .submenu {
            width: 100%;
            max-height: 0px;
            overflow: hidden;
            z-index: 10;
            &.open {
              max-height: 6000px;
            }
            a {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
    }
  }

  h6 {
    margin-bottom: 34px;
    color: #2f6193;
  }

  a {
    font-size: 14px;
    line-height: 30px;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 980px) {
    img {
      display: block;
      margin: 0 auto 45px;
    }
  }

  small {
    font-size: 14px;
    color: #fff;
    position: relative;
    z-index: 2;
  }

  > svg {
    position: absolute;
    width: 300%;
    top: calc(100% - 160px);
    left: 50%;
    transform: translate(-48%, 0);

    @media (max-width: 980px) {
      top: calc(100% - 140px);
    }
  }
`

export default Footer
