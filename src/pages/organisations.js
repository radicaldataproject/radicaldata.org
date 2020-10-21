import React from 'react'
import Layout from 'components/Layout'
import Container from 'components/Container'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import OrganisationCard from '../components/OrganisationCard'
import OrganisationBook from '../components/OrganisationBook'
import {
    OrganisationCourses,
    OrganisationPeople,
  } from '../../static/organisationData'

const OrganisationsPage = () => {
  const data = useStaticQuery(graphql`
    query OrganisationsPageQuery {
      site {
        ...site
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout site={data.site}>
      <Container
        css={css`
        button {
          border: none;
          padding: 3px;
        }
          .header {
            text-align: center;
            margin: 3em auto 2em;
            max-width: 700px;
            h1 {
              margin-bottom: 0.5em;
            }
            p {
              font-size: 1.1em;
              line-height: 1.6em;
            }
          }
          h3 {
            text-align: center;
            font-size: 1.7em;
            margin-bottom: 1em;
            margin-top: 1.6em;
            letter-spacing: 0.02em;
          }
          .mainGrid {
            text-align: left;
            margin-bottom: 4em;
            display: grid;
            align-items: center;
            h1 {
              margin-top: 0;
            }
          }
          .courseGrid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          .bookGrid {
            grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
          }
        `}
      >
        <div className="header">
            <h1>Organisations</h1>
            <p>
            There are loads of organisations and people doing brilliant work with data, art and activism.
            Here is a partial list of them.<br></br>
            If you know of something that should be on this list, let us know {` `}
            <Link to="https://github.com/radicaldataproject/radicaldata.org/issues">here</Link>.
            </p>

        </div>

        {/* <h3>Organisations</h3> */}
            <div className="mainGrid courseGrid">
            {OrganisationCourses.map((d, i) => {
            return (
              <OrganisationCard
                key={i}
                title={d.title}
                description={d.description}
                img={d.img}
                cost={d.cost}
                url={d.url}
                RecProjects={d.RecProjects}
              />
            )
          })}
            </div>

            {/* <h3>Books</h3>
            <div className="mainGrid bookGrid">
            {OrganisationPeople.map((d, i) => {
            return (
              <OrganisationBook
                key={i}
                title={d.title}
                description={d.description}
                img={d.img}
                url={d.url}
                author={d.author}
              />
            )
          })}
            </div> */}
      </Container>
    </Layout>
  )
}

export default OrganisationsPage
