import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

const PostHeaderStyles = styled.header`
  h1 {
    margin-bottom: 0;
  }
  .postMeta {
    font-size: 1.4rem;
    font-style: italic;
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: column;
    justify-content: start;
    & > * {
      :not(:last-child):after {
        content: '×';
        margin-left: 1rem;
        color: var(--yellow);
        font-weight: 600;
        font-style: normal;
      }
    }
  }
`

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
        image {
          ...ImageFields
        }
      }
      body
    }
  }
`

export default function Post({ data: { mdx: post }, scope, pageContext }) {
  console.log(post)
  return (
    <>
      <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
      <PostHeaderStyles>
        <h1>{post.frontmatter.title}</h1>
        <div className="postMeta">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          <span>{post.frontmatter.category.join(', ')}</span>
        </div>
      </PostHeaderStyles>
    </>
  )
}
