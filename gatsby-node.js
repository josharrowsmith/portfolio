const path = require('path')
const data = require('./src/assets/data/data.js')

exports.createPages = ({ actions }) => {
  const temeplate = path.resolve('./src/templates/project.js')

  // pass images thru
  data.ProjectData.forEach(projectObject => {
    const { name } = projectObject
    actions.createPage({
      path: name,
      component: temeplate,
      context: projectObject,
    })
  })
}
