const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         portfolio: allContentfulPortfolio {
//           nodes {
//             slug
//           }
//         }
//       }
//     `).then(({ errors, data }) => {
//       if (errors) {
//         reject(errors)
//       }

//       if (data && data.portfolio) {
//         const component = path.resolve("./src/templates/portfolio-item.jsx")
//         data.portfolio.nodes.map(({ slug }) => {
//           createPage({
//             path: `/${slug}`,
//             component,
//             context: { slug },
//           })
//         })
//       }

//       resolve()
//     })
//   })
// }
