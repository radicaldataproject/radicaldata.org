import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import { bpMaxSM } from '../../lib/breakpoints'
import MobileMenu from './MobileMenu'
import Links from './Links'
import { fonts } from '../../lib/typography'
import Container from '../Container'

const Header = () => {
  const theme = useTheme()
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding-top: 20px;
        font-family: ${fonts.walsheim};
        background: ${theme.colors.headerBg};
        margin: 0 auto;
        justify-content: center;
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`
              color: ${theme.colors.grey};
              &:hover {
                color: ${theme.colors.primary};
                text-decoration: none;
                transition: 0.5s;
              }
            `}
          >
            <svg width="48" height="48" viewBox="0 0 2310 2310" xmlns="http://www.w3.org/2000/svg" color-interpolation="auto" stroke="#000" stroke-linecap="square" stroke-miterlimit="10"
            css={css`
            margin-top: 0.4em;
            fill: ${theme.colors.darkGrey};
            transition: 550ms;
            &:hover {
              transform: scale(1.15);
            }
          `}
            >
              <g stroke-linecap="round"><circle r="1155" cx="1155" cy="1155" stroke="none" fill="#fff"/><g fill="#b40a0a" fill-opacity=".42" stroke-opacity=".42" stroke="none"><path d="M0 1155a1155 1155 0 012310 0H1155z"/><path d="M2310 1155a1155 1155 0 01-2310 0h1155z" fill="#1b86a0"/><path d="M2310 1155a1155 1155 0 01-2310 0h1155z" fill="#1b86a0"/><path d="M0 1155a770 770 0 011540 0H770z"/><path d="M2310 1155a770 770 0 01-1540 0h770z" fill="#1b86a0"/><path d="M1540 1155a770 770 0 01-1540 0h770z" fill="#1b86a0"/><path d="M0 1155a385 385 0 01770 0H385z"/><path d="M2310 1155a385 385 0 01-770 0h385zM770 1155a385 385 0 01-770 0h385z" fill="#1b86a0"/></g></g>
            </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="26"
              viewBox="0 0 93 88"
              css={css`
                margin-top: 0.4em;
                fill: ${theme.colors.darkGrey};
                transition: 550ms;
                opacity: 30%;
                &:hover {
                  transform: scale(1.05);
                  opacity: 100%;
                }
              `}
            >
              <path d="M23,78.69V46L31.56,73.4h0l1.22,4.18a179.89,179.89,0,0,1,28.24,0L62,73.47h0l8.36-30.2V78.53a124,124,0,0,1,18.89,4,3.2,3.2,0,0,0,4.14-3.06v-76A3.44,3.44,0,0,0,90,0H66a5.52,5.52,0,0,0-5.25,3.8L47,45.78l-14-42A5.52,5.52,0,0,0,27.77,0H3.44A3.44,3.44,0,0,0,0,3.44V79.82a3.21,3.21,0,0,0,4.19,3.05A121.74,121.74,0,0,1,23,78.69Z" />
            </svg> */}
          </Link>
          <div
            css={css`
              font-size: 0.8em;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: ${theme.colors.grey};
                margin-left: 16px;
                margin-right: 16px;
                :hover {
                  color: ${theme.colors.primary};
                  transition: 0.5s;
                }
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                ${bpMaxSM} {
                  display: none;
                }
              `}
            >
              <Links />
            </div>
            <MobileMenu>
              <Links />
            </MobileMenu>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
