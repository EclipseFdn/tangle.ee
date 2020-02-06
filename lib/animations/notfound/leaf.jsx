import React from 'react'
import PropTypes from 'prop-types'

const Leaf = ({ className }) => {
  return (
    <svg className={`leaf ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 139 139">
      <g clipPath="url(#not_found_clip0)">
        <path
          fill="#D5F4FB"
          d="M50.945 96.747c13.226 19.758 46.203 14.184 46.203 14.184s17.721-28.364 4.496-48.122C87.222 41.266 63.7 40.268 48.181 23.376c-6.383 23.128-11.657 51.828 2.764 73.371z"
        />
        <path
          fill="#51D4EF"
          d="M50.973 96.727c-14.42-21.542-9.148-50.24-2.766-73.368 10.9 32.345 26.808 61.768 48.958 87.553-.618.102-33.093 5.384-46.192-14.185z"
        />
      </g>
      <defs>
        <clipPath id="not_found_clip0">
          <path fill="#fff" d="M0 0H100V100H0z" transform="matrix(-.831 .55628 .55628 .831 83.102 0)" />
        </clipPath>
      </defs>
    </svg>
  )
}

Leaf.propTypes = {
  className: PropTypes.string.isRequired
}

export default Leaf
