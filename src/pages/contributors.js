import React from 'react'
import Layout from 'components/Layout'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { fonts } from '../lib/typography'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { graphql } from 'gatsby'
import SimpleCard from '../components/SimpleCard'

const ContributorsPage = ({ data: { site, ContributorsQuery } }) => {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          .header {
            grid-column-start: 1;
            grid-column-end: 3;
            margin-bottom: 1em;
            max-width: 700px;
            h1 {
              margin-bottom: 0.4em;
            }
          }
          .ContributorsGrid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 3em;
          }
        `}
      >
        <section className="header">
          <h1>Contributors</h1>
          <h2>The people involved in Radical Data</h2>
        </section>

        {/* ----------- Contributors Section ----------- */}

        <section>
          <div className="ContributorsGrid">
            {ContributorsQuery.edges.map(({ node: contributor }) => (
              <Link
                to={`${contributor.frontmatter.url}`}
                aria-label={`View ${contributor.frontmatter.title}`}
              >
                <SimpleCard
                  hover
                  key={contributor.id}
                  css={css`
                    font-family: ${fonts.regularSans};
                    max-width: 350px;
                    margin-bottom: 1em;
                    margin-right: 1em;
                    padding: 0.6em 1.4em 1.6em 1.4em;
                    h4 {
                      font-size: 1.1em;
                      margin-top: 0.2em;
                      margin-bottom: 0.4em;
                      transition: all 150ms ease;
                      &:hover: {
                        color: ${theme.colors.primary};
                      }
                    }
                    h5 {
                      margin-bottom: 0;
                      line-height: 1.3em;
                    }
                    h6 {
                      margin-bottom: 0;
                    }
                  `}
                >
                  <Img fluid={contributor.frontmatter.cover.childImageSharp.fluid} />
                  <h4>{contributor.frontmatter.title}</h4>
                  <h5>{contributor.frontmatter.description}</h5>
                  <br/>
                  <h6>{contributor.frontmatter.role}</h6>
                </SimpleCard>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default ContributorsPage

export const ContributorsPageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }

    ContributorsQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "contributor" }, published: { ne: false } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            description
            role
            slug
            url
            cover {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
