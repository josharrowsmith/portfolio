import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <Helmet>
      <html lang="en" />
      <title>{site.siteMetadata.title}</title>
      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/fries.png" />
      {/* Meta Tags */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/fries.png'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        propery="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="theme-color" content="#000" />
      {children}
    </Helmet>
  )
}
