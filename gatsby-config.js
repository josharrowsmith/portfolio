import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: `Josh Arrowsmith`,
    siteUrl: 'https://josharrowsmith.com',
    description: 'This will be my portfolio site'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
  ],
};
