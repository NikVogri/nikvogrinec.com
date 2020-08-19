const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  await createSpecificBlogPages(graphql, actions.createPage)
  await createListPages(graphql, actions.createPage)
}

const createSpecificBlogPages = async (graphql, createPage) => {
  const { data } = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allContentfulBlog.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve("./src/templates/blogTemplate.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}

const createListPages = async (graphql, createPage) => {
  const {
    data: {
      site: { siteMetadata },
    },
  } = await graphql(`
    query {
      site {
        siteMetadata {
          categories {
            items
          }
        }
      }
    }
  `)

  const categories = siteMetadata.categories.items

  categories.forEach(async category => {
    createPage({
      path: `/blog/${category.toLowerCase()}`,
      component: path.resolve("./src/templates/blogListTemplate.js"),
      context: {
        category,
      },
    })
  })
}
