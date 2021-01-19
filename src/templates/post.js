import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fileAbsolutePath
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        category
      }
      body
    }
  }
`

export default function Post({ data: { mdx: post }, scope, pageContext }) {
  console.log(post)
  return (
    <>
      <h1>Post One</h1>
    </>
  )
}
