import React from 'react'

import PropTypes from 'prop-types'

const Stats = (props) => {
  return (
    <>
      <div className="stats-stats">
        <div className="stats-stat">
          <svg viewBox="0 0 1152 1024" className="stats-icon">
            <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
          </svg>
          <span className="stats-text">{props.text}</span>
          <span className="stats-text1">{props.text1}</span>
          <h2 className="stats-text2">{props.heading}</h2>
        </div>
        <div className="stats-stat1">
          <svg viewBox="0 0 1024 1024" className="stats-icon3">
            <path d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
          </svg>
          <span className="stats-text3">{props.text2}</span>
          <span className="stats-text4">{props.text3}</span>
          <h2 className="stats-text5">{props.heading1}</h2>
        </div>
        <div className="stats-stat2">
          <svg viewBox="0 0 1024 1024" className="stats-icon5">
            <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
          </svg>
          <span className="stats-text6">{props.text4}</span>
          <span className="stats-text7">{props.text5}</span>
          <h2 className="stats-text8">{props.heading2}</h2>
        </div>
      </div>
      <style jsx>
        {`
          .stats-stats {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .stats-stat {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .stats-icon {
            fill: var(--dl-color-gray-700);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .stats-text {
            color: var(--dl-color-custom-neutral-light);
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text1 {
            color: var(--dl-color-gray-700);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text2 {
            color: var(--dl-color-custom-neutral-light);
            font-size: 3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 300;
          }
          .stats-stat1 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .stats-icon3 {
            fill: var(--dl-color-gray-700);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .stats-text3 {
            color: var(--dl-color-custom-neutral-light);
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text4 {
            color: var(--dl-color-gray-700);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text5 {
            color: var(--dl-color-custom-neutral-light);
            font-size: 3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 300;
          }
          .stats-stat2 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .stats-icon5 {
            fill: var(--dl-color-gray-700);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .stats-text6 {
            color: var(--dl-color-custom-neutral-light);
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text7 {
            color: var(--dl-color-gray-700);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text8 {
            color: var(--dl-color-custom-neutral-light);
            font-size: 3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 300;
          }
          @media (max-width: 767px) {
            .stats-stats {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .stats-stat {
              padding: var(--dl-space-space-unit);
            }
            .stats-text {
              text-align: center;
            }
            .stats-stat1 {
              padding: var(--dl-space-space-unit);
            }
            .stats-text3 {
              text-align: center;
            }
            .stats-stat2 {
              padding: var(--dl-space-space-unit);
            }
            .stats-text6 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .stats-stats {
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .stats-text2 {
              font-size: 2rem;
            }
            .stats-text5 {
              font-size: 2rem;
            }
            .stats-text8 {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </>
  )
}

Stats.defaultProps = {
  heading1: '258+',
  text4: 'Cities',
  text2: 'Projects',
  text5: '_____',
  heading2: '20+',
  text1: '_____',
  text3: '_____',
  text: 'Clients',
  heading: '50+',
}

Stats.propTypes = {
  heading1: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  heading2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default Stats
