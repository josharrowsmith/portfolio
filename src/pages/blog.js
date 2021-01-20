import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PostGrid, { PostGridItem } from '../components/PostGrid'

const HomePageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 880px;
  margin: 0px auto;
`

function IndexPage({ data }) {
  return (
    <HomePageGrid>
      <h1>Josh Arrowsmith blog</h1>
      <PostGrid>
        {data.allMdx &&
          data.allMdx.edges.map(function ({ node: post }) {
            return (
              <PostGridItem key={post.id}>
                {post.frontmatter.image &&
                  post.frontmatter.image.childImageSharp && (
                    <div>
                      <Link to={post.fields.slug}>
                        <Img
                          fluid={post.frontmatter.image.childImageSharp.fluid}
                        />
                      </Link>
                      <div className="postMeta">
                        <time dateTime={post.frontmatter.date} />
                        <ul className="categories">
                          {post.frontmatter.category.map(cat => (
                            <li key={cat}>{cat}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                <div>
                  <h3>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                </div>
              </PostGridItem>
            )
          })}
      </PostGrid>
    </HomePageGrid>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query blogPosts($skip: Int! = 0) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      filter: { fields: { collection: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            collection
            slug
          }
          frontmatter {
            title
            date
            category
            image {
              ...ImageFields
            }
          }
        }
      }
    }
  }
`
