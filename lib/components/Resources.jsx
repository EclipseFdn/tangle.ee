import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '@style/theme'

const GITHUB_ICON_SRC = '/images/github.svg'
const DOCS_ICON_SRC = '/images/docs.svg'
const DISCORD_ICON_SRC = '/images/discord.svg'
const PROPOSAL_ICON_SRC = '/images/proposal.svg'
const REPORT_ICON_SRC = '/images/report.svg'

function Resources(props) {
  const { data } = props

  const getIconData = (type) => {
    let icon = ''
    let text = ''
    switch (type) {
      case 'github':
        icon = GITHUB_ICON_SRC
        text = 'Github'
        break
      case 'docs':
        icon = DOCS_ICON_SRC
        text = 'Docs'
        break
      case 'discord':
        icon = DISCORD_ICON_SRC
        text = 'Discord'
        break
      case 'proposal':
        icon = PROPOSAL_ICON_SRC
        text = 'Proposals'
        break
      case 'report':
        icon = REPORT_ICON_SRC
        text = 'Report Bugs'
        break
      default:
        break
    }
    return { icon, text }
  }

  return (
    <Wrapper className="resources">
      {data.map((resource) => (
        <a key={`resource-${resource.type}`} href={resource.to} target="_blank" rel="noreferrer noopener">
          <img alt="" src={getIconData(resource.type).icon} />
          <p className="bold">{getIconData(resource.type).text}</p>
        </a>
      ))}
    </Wrapper>
  )
}

Resources.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
      })
    ])
  )
}

Resources.defaultProps = {
  data: []
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0px;

  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 30px;
    > p {
      text-align: center;
      color: ${theme.colors.primary};
    }
  }

  @media (max-width: 980px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 240px; /* TODO, fix this so the alignment is perfectly centered*/
    flex-wrap: wrap;
    margin: 0 auto;
  }
`

export default Resources
