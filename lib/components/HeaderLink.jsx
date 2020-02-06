import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'
import PropTypes from 'prop-types'

const HeaderLink = ({ router, children, activeClassName, href }) => {
  const child = Children.only(children)

  let className = child.props.className || ''
  if (router.pathname === href && href !== '/' && activeClassName) {
    className = `${className} ${activeClassName}`.trim()
  }

  return <Link href={href}>{React.cloneElement(child, { className })}</Link>
}

HeaderLink.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.shape().isRequired,
  activeClassName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default withRouter(HeaderLink)
