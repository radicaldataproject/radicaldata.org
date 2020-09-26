import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <span>
      <Link to="/articles" aria-label="View articles page">
        Articles
      </Link>
      <Link to="/projects" aria-label="View projects page">
        Projects
      </Link>
      <Link to="/garden" aria-label="View notes page">
        Digital Garden
      </Link>
      <Link to="/bookshelf" aria-label="View books page">
        Bookshelf
      </Link>
      <Link to="/about" aria-label="View about page">
        About
      </Link>
      {/* <Link
        to="./start"
        css={css`
          font-weight: bold;
          color: ${theme.colors.primary} !important;
        `}
        aria-label="View start here page"
      >
        Start Here
      </Link> */}
    </span>
  )
}
