import React from 'react'
import Layout from 'components/Layout'
import Img from 'gatsby-image'
import Container from 'components/Container'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import { Link } from 'gatsby'
import { useTheme } from 'components/Theming'

const AboutPage = () => {
const theme = useTheme()

  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      site {
        ...site
        siteMetadata {
          title
        }
      }
      profilePic: file(relativePath: { eq: "profilePic.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      venn: file(relativePath: { eq: "rd-venn-diagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout site={data.site}>
      <Container
        css={css`
        padding: 0;
          justify-items: center;
          margin-top: 4em;
          max-width: 80%;
          .faqBlock {
            text-align: center;
            width: 85%;
            border: 1px solid ${theme.colors.lightGrey};
            border-radius: 5px;
            margin: 1.6em auto 0em;
            padding: 1em;
            transition: all 0.3s ease-in-out;
            h2 {
              transition: all 0.3s ease-in-out;
              color: ${theme.colors.darkGrey};
              margin-top: 0.2em;
              font-size: 1.8em;
              line-height: 1.2em;
            }
            h4 {
              transition: all 0.3s ease-in-out;
              color: ${theme.colors.grey};
              margin: 0.5em;
            }
            :hover {
              border: 1px solid ${theme.colors.primary};
              h2, h4 {
              color: ${theme.colors.black};
              }
            }
          }
          .header {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 2em;
            ${bpMaxSM} {
              grid-template-columns: 1fr;
            }
            .headerText {
              max-width: 540px;
              h2 {
                opacity: 90%;
                max-width: 500px;
                font-size: 1.7em;
                line-height: 1.3em;
                margin-bottom: 1em;
              }
              p {
                max-width: 500px;
                line-height: 1.7em;
              }
            }
          }
        `}
      >
        <div className="header">
        <div className="headerText">
            <h1>Radical Data Project</h1>
            <h2>
              Reimagining, creating, queering, affirming, theorising, intervening.
            </h2>
            <Img
              style={{
                maxWidth: '420px',
                margin: '0 auto',
                marginBottom: '1em',
              }}
              fluid={data.venn.childImageSharp.fluid}
            />
            <h2>
              What is the Radical Data Project?
            </h2>
            <p>
              The Radical Data Project is a research project that is also researching what it is.
            </p>
            <p>
              There is a goal. We want to imagine a data science that works for citizens and communities instead of destabilising democracies and selling us more shoes.
            </p>
            <p>
              But RDP involves working out how to do that. We think it involves looking at what other projects are out there, working out the connections between them and publishing our findings.
              We think it very likely involves our own interventions. We think it works across disciplinary boundaries such as art, activism and social science.
              
              {' '}involves designing visual metaphors for invisible, complicated
              software concepts.
            </p>
            <h2>
              Who are the Radical Data Project?
            </h2>
            <p>
              The Radical Data Project was initially setup by{' '}
              <a
                href="https://jokroese.com/"
                target="_blank"
                rel="noopener noreferrer">
                Jo Kroese
              </a> and has since grown to include a range of <Link to="/contributors">contributors</Link> including artists, data scientists, designers and technologists.
              If you'd like to get involved, please get in touch.
            </p>
            <h2>
              What can I find on this site?
            </h2>
            <p>
              The <Link to="/garden"> digital garden</Link> is where ideas start to grow.
              Eventually, they may grow or combine with other ideas into something that justifies a more static, 
              joined-up piece of writing in <Link to="/articles">articles</Link>.
            </p>
            <p>
              There is also a selection of the <Link to="/projects">projects</Link> we have worked on as well as a section of <Link to="/bookshelf">book summaries</Link>.
            </p>
          </div>
          <div>
            <Img
            imgStyle={{
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
            fluid={data.profilePic.childImageSharp.fluid}
          />
          <a href='/faq'><div className="faqBlock"><h2>Have questions?<br />I have an FAQ</h2></div></a>
          <a href='/resources'><div className="faqBlock"><h2>Want to improve your illustration skills?</h2><h4>I have a recommended resources page</h4></div></a>
          </div>
          
        </div>
      </Container>
    </Layout>
  )
}

export default AboutPage
