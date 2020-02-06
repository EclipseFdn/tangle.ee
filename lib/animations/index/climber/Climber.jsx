import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'

import animationData from './data/climber.json'

const Climber = () => {
  const options1 = {
    loop: true,
    animationData,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Wrapper>
      <div className="lottie">
        <Lottie width="100%" height="100%" options={options1} loop />
      </div>
      <svg viewBox="0 0 1440 950" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-157 46.383l45.881-15.638a56.636 56.636 0 0 1 51.596 7.785 10.103 10.103 0 0 0 11.022.541l40.708-23.66C17.667.62 47.927-3.645 76.464 3.566l92.472 23.287c9.805 2.471 20.185 1.151 29.044-3.757 20.76-11.407 45.036-14.589 67.993-8.902l558.622 106.893a141.182 141.182 0 0 0 52.103.169c14.234-2.64 28.807-2.573 43.007.135L1441 221.141v727.902l-1598-1.997V46.383z"
          fill="url(#paint0_linear)"
        />
        <path
          opacity=".5"
          d="M-109.158 30.067L-157 46.382v512.597h281.475C-64.967 417.494-125.218 121.796-105.067 97.594l9.603-21.392c3.854-8.563.338-18.65-8.013-22.983-6.154-3.181-6.864-11.677-1.319-15.84l12.882-9.681c-5.647-.102-11.394.677-17.244 2.37z"
          fill="url(#paint1_linear)"
        />
        <path
          opacity=".46"
          d="M196.256 24.008L65.206 95.63a17.785 17.785 0 0 1-18.8-1.016L24.634 79.417A28.216 28.216 0 0 0 3.5 74.78c-6.357 1.15-12.916-.372-18.157-4.197L-59.251 38.63s5.173 3.723 10.786.406c5.781-3.418 38.51-22.949 38.51-22.949C16.924.45 47.996-4.323 78.967 4.14c0 0 83.445 21.053 90.004 22.678 15.181 3.825 27.285-2.81 27.285-2.81z"
          fill="#5D6AC6"
        />
        <path
          opacity=".5"
          d="M246.059 104.059c43.008-21.663 52.306-37.74 14.505-49.588-33.405-10.459-56.565-16.28-30.801-42.073-17.954 2.64-30.734 10.087-30.734 10.087l-133.08 72.74c-2.468 1.421-5.646 2.707-9.636 2.64 0 0-35.298 25.386-22.788 46.033 12.577 20.749 46.016 50.942 63.429 113.967.034-.034 27.522-92.575 149.105-153.806z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M-157 276.888s284.349-114.61 576.474 0c292.125 114.61 375.199-71.623 683.416 14.318 308.22 85.94 223.3 656.337 223.3 656.337H-191l34-670.655z"
          fill="url(#paint3_radial)"
        />
        <path fill="url(#paint4_linear)" d="M0 233.043h1440v716H0z" />
        <defs>
          <linearGradient id="paint0_linear" x1="-157" y1="280.581" x2="1441.01" y2="280.581" gradientUnits="userSpaceOnUse">
            <stop offset=".073" stopColor="#2FBEE3" />
            <stop offset=".622" stopColor="#7F83CE" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="-14.312" y1="48.484" x2="-17.894" y2="513.539" gradientUnits="userSpaceOnUse">
            <stop offset=".002" stopColor="#898CD6" />
            <stop offset="1" stopColor="#2484C6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint2_linear" x1="160.398" y1="-38.454" x2="153.683" y2="296.921" gradientUnits="userSpaceOnUse">
            <stop offset=".078" stopColor="#597ED1" />
            <stop offset="1" stopColor="#2484C6" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint3_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(585.165 0 0 521.373 255.99 441.659)"
          >
            <stop offset=".002" stopColor="#3B83C1" />
            <stop offset="1" stopColor="#2484C6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="paint4_linear" x1="628" y1="258.043" x2="588.84" y2="849.302" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3979B8" stopOpacity="0" />
            <stop offset="1" stopColor="#65C0D1" />
          </linearGradient>
        </defs>
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  .lottie {
    position: absolute;
    width: 280px;
    top: 0px;
    left: 20%;
    transform: translate(0, -60%);
  }
`

export default Climber
