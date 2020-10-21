import React from 'react'
import Layout from 'components/Layout'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { graphql } from 'gatsby'
import ProjectCard from '../components/ProjectCard'

const ProjectPage = ({ data: { site, projectQuery } }) => {
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          .header {
            margin-bottom: 1em;
            max-width: 700px;
            h1 {
              margin-bottom: 0.4em;
            }
          }
          .projectGrid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 1em;
            margin-top: 3em;
          }
        `}
      >
        <section className="header">
          <h1>Our Projects</h1>
          <p>A selection of projects we have worked on.</p>
        </section>
        <section>
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
        </section>
      </Container>
    </Layout>
  )
}

export default ProjectPage

export const projectPageQuery = graphql`
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
      limit: 20
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
  }
`
