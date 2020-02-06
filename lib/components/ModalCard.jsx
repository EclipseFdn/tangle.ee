import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import styled from 'styled-components'

import LinkArrow from '@components/LinkArrow'

const ReactModalAdapter = ({ className, ...props }) => {
  const contentClassName = `${className}__content`
  const overlayClassName = `${className}__overlay`
  return <Modal portalClassName={className} className={contentClassName} overlayClassName={overlayClassName} {...props} />
}

ReactModalAdapter.propTypes = {
  className: PropTypes.string.isRequired
}

const ModalCard = ({ logo, title, description, url }) => {
  const [open, setOpen] = useState(false)
  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }
  return (
    <StyledCard>
      <button className="openTrigger" type="button" onClick={openModal}>
        <img alt="" src={logo} />
      </button>
      <StyledModal isOpen={open} onRequestClose={closeModal}>
        <button type="button" className="close" onClick={closeModal}>
          X
        </button>
        <img alt={title} src={logo} />
        <h2>{title}</h2>
        <div className="description">{description}</div>
        <LinkArrow to={url} target="_blank">
          Visit the website
        </LinkArrow>
      </StyledModal>
    </StyledCard>
  )
}

ModalCard.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

const StyledCard = styled.li`
  button.openTrigger {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: none !important;
  }
`

const StyledModal = styled(ReactModalAdapter)`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-feature-settings: 'liga' 0;

  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(5px);
  }

  &__content {
    border: none;
    overflow: auto;
    outline: none;
    background: #ffffff;
    box-shadow: 0px 15.9734px 57.5575px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 90%;
    max-width: 650px;
    min-height: 370px;
    padding: 50px 50px 50px 280px;
    position: relative;
    display: flex;
    flex-direction: column;

    @media (max-width: 640px) {
      padding: 200px 30px 30px 30px;
      min-height: 450px;
    }

    h2 {
      color: #2f6193;
    }

    img {
      position: absolute;
      max-width: 180px;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 47px;
      @media (max-width: 640px) {
        top: 40px;
        bottom: inherit;
        left: 0;
        right: 0;
        width: 100%;
        height: 140px;
        object-fit: contain;
        max-width: 70%;
      }
    }

    .description {
      line-height: 25px;
      margin-bottom: 30px;
    }

    .close {
      all: unset;
      position: absolute;
      top: 15px;
      color: gray;
      right: 20px;
      font-size: 20px;
      cursor: pointer;
    }

    a {
      margin-top: auto;
      font-family: 'Raleway', sans-serif;
      font-size: 15px;
      top: 12px;
      right: 80px;
      line-height: 27px;
      color: #009fe3;
      display: flex;
      align-items: center;
      div {
        margin-left: 10px;
      }
    }
  }

  // transition
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
  }
`

export default ModalCard
