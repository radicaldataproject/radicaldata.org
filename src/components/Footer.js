import React from 'react'
import { css } from '@emotion/core'
import { fonts } from '../lib/typography'
import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub, Instagram } from './Social'
import Container from './Container'
import { useTheme } from 'components/Theming'

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var today = new Date().getDay();
var today_name = days[today]
var tomorrow_name = days[today+1]

const Footer = ({ author, noSubscribeForm }) => {
  const theme = useTheme()

  return (
    <footer
      css={css`
      margin-top: 3em;
    `}
    >
      <Container>
        {!noSubscribeForm && (
          <div>
            <SubscribeForm />
          </div>
        )}
        <div
          css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 3em;
        `}
        >
          <div
            css={css`
            color: ${theme.colors.black};
            font-size: 0.8em;
            font-family: ${fonts.walsheim};
            opacity: 0.7;
          `}
          >
            {`I hope you have a beautiful ${today_name}. Do you have time to look at a leaf? Or maybe your thumb?`}
            <br></br>
            {`If today isn't going so well, try not to worry: sometimes ${tomorrow_name}s can feel very different.`}
          </div>
          <div>
            <Twitter />
            <GitHub />
            <Instagram />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
