import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
const path = require(`path`)

export default {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: `Josh Arrowsmith`,
    siteUrl: 'https://josharrowsmith.com',
    description: 'This will be my portfolio site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
