const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const projectData = require('./src/assets/data/data.js')

async function makeProjects({ graphql, actions }) {
  const project = path.resolve('./src/templates/project.js')
  projectData.ProjectData.forEach(projectObject => {
    const { name } = projectObject
    actions.createPage({
      path: name,
      component: project,
      context: projectObject,
    })
  })
}

async function makePostsFromMdx({ graphql, actions }) {
  const blogPost = path.resolve('./src/templates/post.js')
  const { errors, data } = await graphql(
    `
      {
        allMdx(
          filter: { fields: { collection: { eq: "post" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              body
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )
  if (errors) {
    console.log(errors)
    throw new Error('There was an error')
  }
  const posts = data.allMdx.edges
  posts.forEach((post, i) => {
    const prev = posts[i - 1]
    const next = posts[i + 1]
    actions.createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        collection: 'post',
        prev,
        next,
        pathPrefix: '',
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    // if my posts have a slug in the frontmatter, it means I've specified what I want it to be. Otherwise I want to create one automatically

    // This is where we add our own custom fields to each node
    const generatedSlug = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug
        ? `/${node.frontmatter.slug}/`
        : generatedSlug,
    })

    // Add it to a collection
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // pass images thru
  await Promise.all([
    makeProjects({ graphql, actions }),
    makePostsFromMdx({ graphql, actions }),
  ])
}
