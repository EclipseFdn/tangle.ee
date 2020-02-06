import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Card(props) {
  const { imagePath, title, content, className, to } = props

  return (
    <Wrapper href={to} className={className}>
      <img alt="" src={imagePath} />
      <div>
        <h3>{title}</h3>
        <p className="semi-bold">{content}</p>
      </div>
    </Wrapper>
  )
}

Card.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  to: PropTypes.string
}

Card.defaultProps = {
  className: '',
  to: null
}

const Wrapper = styled.a`
  width: 100%;
  max-width: 550px;
  background: #ffffff;
  border-radius: 10px;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  position: relative;
  transition: border-radius 0.2s linear;
  box-shadow: 0px 35.9734px 57.5575px rgba(0, 0, 0, 0.05);
  cursor: inherit;
  user-select: auto;

  @media (max-width: 1350px) {
    max-width: 550px;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 32px;
    display: block;
  }

  h3 {
    margin-bottom: 20px;
  }

  img {
    flex-direction: column;

    @media (max-width: 700px) {
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 71px;
      margin-bottom: 23px;
    }
  }

  > div {
    width: 60%;
    margin-left: 40px;
    flex-direction: column;
    @media (max-width: 700px) {
      width: 100%;
      margin-left: 0;
    }
  }

  p {
    margin: 0;
  }

  ${({ href }) =>
    href &&
    `
      user-select: none;
      cursor: pointer;
      &:hover {
        border-radius: 0px 0px 10px 10px;
        &::before {
          visibility: visible;
          opacity: 1;
        }
      }

      &::before {
        visibility: hidden;
        opacity: 0;
        content: '';
        width: 100%;
        height: 12px;
        position: absolute;
        top: -12px;
        left: 0;
        background: linear-gradient(90deg, #898ed4 0%, #30c9e8 100%);
        box-shadow: 0px 35.9734px 57.5575px rgba(0, 0, 0, 0.05);
        border-radius: 10px 10px 0px 0px;
        transition: visibility 0.3s, opacity 0.3s linear;
      }
    `}
`

export default Card
