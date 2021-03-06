import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/Layout'
// import { lighten, darken } from 'polished'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import { fonts } from '../lib/typography'
import { bpMaxMD, bpMaxSM } from '../lib/breakpoints'
import SimpleCard from '../components/SimpleCard'
import Book from '../components/Book'
import ProjectCard from '../components/ProjectCard'
import InlineSignUp from '../components/Forms/InlineSignUp'
import SignUp from '../components/Forms/Subscribe'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        margin-top: 1.6em;
        margin-bottom: 2em;
        ${bpMaxSM} {
          margin-top: 0.6em;
          margin-bottom: 0.8em;
        }
      `}
    >
      <Container>
        <h1
          css={css`
            color: ${theme.colors.black};
            z-index: 5;
            font-family: ${fonts.walsheimBold};
            font-weight: 100;
            font-size: ${rhythm(2.5)};
            line-height: ${rhythm(2.4)};
            margin-top: 0;
            // max-width: ${rhythm(22)};
            ${bpMaxSM} {
              font-size: ${rhythm(1.8)};
              line-height: ${rhythm(2.1)};
            }
          `}
        >
          Radical Data Project
        </h1>
        <h2
          css={css`
            font-family: ${fonts.regular};
            color: ${theme.colors.darkGrey};
            font-weight: 200;
            font-size: ${rhythm(1.3)};
            line-height: ${rhythm(1.7)};
            max-width: ${rhythm(26)};
            ${bpMaxSM} {
              font-size: ${rhythm(0.9)};
              line-height: ${rhythm(1.1)};
          `}
        >
          A collective exploring the radical potential of data science.
        </h2>
        <h3
          css={css`
            margin-top: ${rhythm(1)};
            // font-family: ${fonts.regularSans};
            font-family: ${fonts.lightSans};
            font-size: ${rhythm(0.8)};
            font-weight: 300;
            font-weight: bold;
            margin-bottom: ${rhythm(0.2)};
            // line-height: ${rhythm(1)};
            color: ${theme.colors.grey};
            letter-spacing: 0em;   
          `}
        >
          Join the movement of artists, data scientists and researchers shaping the future of data, art and activism.
          {/* <ol>
          <li>(Protective) What can we do to reduce the harms of data?</li>
          <li>(Positive) How can we use data to address injustice?</li>
          </ol> */}
        </h3>
        <InlineSignUp></InlineSignUp>
      </Container>
    </section>
  )
}

const SmallSectionLink = props => {
  const theme = useTheme()
  return (
    <Link
      css={css`
        transition: all 0.8s;
        justify-self: end;
        float: ${props.float};
        font-size: 0.8em;
        font-family: ${fonts.walsheim};
        padding: 8px 0px;
        border-bottom: 1px solid ${theme.colors.lightestGrey};
        &:hover {
          color: ${theme.colors.darkBlue};
          transform: translateY(2px);
          border-bottom: 2px solid ${theme.colors.blue};
        }
      `}
      to={props.to}
      aria-label={props.aria}
    >
      {props.children}
    </Link>
  )
}

const TitleSectionLink = props => {
  const theme = useTheme()
  return (
    <Link
      css={css`
        h2 {
          margin-bottom: 1em;
          transition: all 0.6s ease;
          &:hover {
            color: ${theme.colors.primary};
          }
        }
      `}
      to={props.to}
      aria-label={props.aria}
    >
      <h2>{props.children}</h2>
    </Link>
  )
}

// ------- // Main Section // ---------- //

export default function Index({
  data: { site, bookQuery, projectQuery, essaysQuery, notesQuery },
}) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
          padding-top: 0;
          display: grid;
          grid-gap: 2.2em;
          grid-template-columns: 5fr 3fr;
          ${bpMaxMD} {
            display: flex;
            flex-direction: column;
          }
          h2,
          h3 {
            margin-top: 0;
          }
          h3,
          h5 {
            margin-bottom: 0.8em;
          }
          h5 {
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .essays {
            margin-bottom: 1.2em;
            justify-self: end;
            .essaysGrid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr;
              grid-gap: 0.8em;
              margin-bottom: 1em;
              ${bpMaxSM} {
                grid-template-columns: 1fr;
              }
            }
            ${bpMaxSM} {
              grid-gap: 0.6em;
              margin-bottom: 3em;
            }
          }
          .project {
            margin-bottom: 1.2em;
            grid-column: 1 / 3;
            display: column;
            flex-direction: row;
            ${bpMaxSM} {
              margin-bottom: 3em;
            }
            .projectGrid {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-gap: 1em;
              ${bpMaxSM} {
                grid-template-columns: 1fr;
              }
            }
          }
          .books {
            display: flex;
            flex-direction: row;
            padding-top: 2em;
            grid-column: 1 / 3;
            ${bpMaxMD} {
              grid-column: 1 / 1;
              flex-wrap: wrap;
            }
            ${bpMaxSM} {
              flex-direction: column;
              align-items: center;
            }
            .bookTitle {
              padding-right: 3em;
              margin-bottom: 2em;
            }
          }
          .garden {
            padding-right: 2em;
            padding-bottom: 2em;
            ${bpMaxSM} {
              margin-bottom: 3em;
            }
            .gardenGrid {
              display: grid;
              grid-template-columns: 1fr;
              ${bpMaxMD} {
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 0.6em;
              }
              ${bpMaxSM} {
                grid-template-columns: 1fr;
              }
            }
            h4 {
              margin-top: 0.6em;
            }
          }
          button {
            width: 100%;
            max-width: 240px;
            margin-bottom: 20px;
          }
        `}
      >

        {/* ------------------ Articles Section-----------------  */}
        <section className="essays">
          <TitleSectionLink to="/articles">Articles</TitleSectionLink>
          <div className="essaysGrid">
            {essaysQuery.edges.map(({ node: essay }) => (
              <Link
                to={`/${essay.frontmatter.slug}`}
                aria-label={`View ${essay.frontmatter.title}`}
              >
                <SimpleCard
                  hover
                  key={essay.id}
                  css={css`
                    font-family: ${fonts.regularSans};
                    max-width: 350px;
                    margin: 0 auto;
                    padding: 0.4em 1.2em 0.8em 1.2em;
                    h3 {
                      color: #121F35;
                      font-family: ${fonts.walsheimLight};
                      font-size: 1.1em;
                      font-weight: bold;
                      margin-top: 0.2em;
                      margin-bottom: 0.4em;
                      transition: all 150ms ease;
                      &:hover: {
                        color: ${theme.colors.primary};
                      }
                    }
                    p {
                      color: ${theme.colors.grey};
                      margin-top: 0;
                      margin-bottom: 0;
                      line-height: 1.3em;
                      font-family: ${fonts.regularSans};
                      font-size: ${rhythm(.6)};
                      font-weight: 100;
                    }
                  `}
                >
                  <Img fluid={essay.frontmatter.cover.childImageSharp.fluid} />
                  <h3>{essay.frontmatter.title}</h3>
                  <p>{essay.frontmatter.description}</p>
                </SimpleCard>
              </Link>
            ))}
          </div>

          <SmallSectionLink float="right" to="/articles" aria="Read More Articles">
            Read More Articles
          </SmallSectionLink>
        </section>

        <section>
          {/* ------------ Garden Section ------------ */}
          <section className="garden">
            {/* <button>Start Here</button> */}
            <TitleSectionLink to="/garden">The Digital Garden</TitleSectionLink>
            <p
              css={css`
                margin-bottom: 1em;
              `}
            >
              A consistently tended collection of half-baked notes, research,
              and sketches.
            </p>

            {/* Notes Section */}

            <div className="gardenGrid">
              {notesQuery.edges.map(({ node: note }) => (
                <Link
                  css={css`
                    font-family: ${fonts.walsheimLight};
                  `}
                  to={note.childMarkdownRemark.frontmatter.slug}
                  aria-label={`View ${note.title}`}
                >
                  <SimpleCard
                    hover
                    key={note.id}
                    css={css`
                      margin-bottom: 0.6em;
                      padding: 0;
                    `}
                  >
                    <h3
                      css={css({
                        color: theme.colors.darkGrey,
                        fontFamily: fonts.walsheimLight,
                        fontSize: rhythm(.7),
                        "&&": {
                          marginBottom: '0.4em',
                          marginTop: '0.6em',
                        },
                        marginBottom: '0.4em',
                        padding: '0.4em 1em',
                        transition: 'all 150ms ease',
                        ':hover': {
                          color: theme.colors.black,
                        },
                      })}
                    >
                      {note.title}
                    </h3>
                  </SimpleCard>
                </Link>
              ))}
            </div>

            <SmallSectionLink
              float="right"
              to="/garden"
              aria="Visit the Garden"
            >
              Visit the Garden
            </SmallSectionLink>
          </section>
        </section>

        {/* ------------ Project Section ------------ */}
        <section className="project">
          <TitleSectionLink to="/projects">
            Radical Data Projects
          </TitleSectionLink>
          <div className="projectGrid">
            {projectQuery.edges.map(({ node: project }) => (
              <ProjectCard
                slug={project.frontmatter.slug}
                title={project.frontmatter.title}
                id={project.id}
                fluid={project.frontmatter.cover.childImageSharp.fluid}
              />
            ))}
          </div>
          <SmallSectionLink
            float="right"
            to="/projects"
            aria="See More Projects"
          >
            See More Projects
          </SmallSectionLink>
        </section>

        {/* ------------ Books Section ------------ */}
        <section className="books">
          <span className="bookTitle">
            <TitleSectionLink to="/bookshelf">Bookshelf</TitleSectionLink>
            <p>
              A collection of notes on what we've been reading and watching.
            </p>

            <SmallSectionLink
              float="left"
              to="/bookshelf"
              aria="Browse the Bookshelf"
            >
              Browse the Bookshelf
            </SmallSectionLink>
          </span>
          {bookQuery.edges.map(({ node: book }) => (
            <Book
              redirectTo={book.frontmatter.redirectTo}
              slug={book.frontmatter.slug}
              title={book.frontmatter.title}
              key={book.id}
              fluidImg={book.frontmatter.cover.childImageSharp.fluid}
              author={book.frontmatter.author}
            />
          ))}
        </section>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }

    projectQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "project" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            slug
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

    notesQuery: allBrainNote(
      sort: { order: DESC, fields: childMarkdownRemark___frontmatter___date }
      limit: 6
    ) {
      edges {
        node {
          id
          title
          childMarkdownRemark {
            frontmatter {
              slug
            }
          }
        }
      }
    }

    essaysQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "essay" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 4
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            slug
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

    bookQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "book" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            description
            slug
            redirectTo
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
